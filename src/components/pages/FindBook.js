import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Book from '../Book'

function FindBook() {
  const [bookName,setBookName] = useState("");
  const [book,setBook] = useState();
  const onSubmit = (data) => {
    
    axios.get(`http://localhost:8080/media/findBook/${bookName}`)
    
      .then(response  => {
      
        setBooks(prevBooks => response.data)
      
      });
    
  }

  return (
      <div>
        <form>
            <label>search by book name:</label>
            <input value = {bookName} onChange = {e=> setBookName(e.target.value)} type = 'text' />

            <input type="submit" />
        </form>
        {book==null? "could not find" : 
          book.map(book =>
            
              <Book key = {book}
              book = {{name: book.name, id: book.id, timesBorrowed: book.timesBorrowed}} 
              ></Book>
          )}
        </div>
     
  );
          }

export default FindBook;