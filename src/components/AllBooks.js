import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './Book';
function AllBooks()  {
  

    const [books,setBooks] = useState(() => getBooks()) 
    const [numberOfBooks, setBooksNumber] = useState(1)
    
    function getBooks(){
      console.log("getting")
      axios.get(`http://localhost:8080/media/all/`)
    
      .then(response  => {
      
        setBooks(prevBooks => response.data)
      
      });
    
  }
  useEffect(() => {
    console.log("render")

  }, [books])
    
      return (
        <>
          
          <button onClick = {getBooks} > get books </button> 
          {books==null? "loading" : 
          books.map(book =>
            <>
              <Book key = {book}
              book = {{name: book.name, id: book.id, timesBorrowed: book.timesBorrowed}} 
              >
              
              </Book>  
              <button id={book.id + 30}  onClick = {() => removeBook(book.id)}>remove</button>
              
            </>
            
          )}
          
          
        </>
    )
  

  function removeBook(id){
    console.log("start remove")
    axios.delete(`http://localhost:8080/media/delete/${id}`)
    
      
      .then((response ) => {
        console.log("after remove, this should start getting the books again")
        getBooks()
        console.log("new books probably re- fetched")
      })
      
      // .catch((error) => {
      //   console.log("something went wrong")
      // });
    
    
  }
}

export default AllBooks

            {/* <BookExpandedDetails></BookExpandedDetails> */}
              
       
   
//com