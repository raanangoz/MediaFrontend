import React, {Component} from 'react';
import axios from 'axios';
import Book from './Book';
class AllBooks extends React.Component {
  constructor(){
    super()
    this.state = {
      books: [],
      times: []
    }

  }
  componentWillMount(){
    axios.get('http://localhost:8080/media/all')
    
    .then(response  => {
      this.setState({
    
        books: response.data,
        times: response.data[0].times_borrowed
        
      });
      
    
    })
  }
  // componentDidMount(){
  //   axios.get('http://localhost:8080/media/all')
    
  // }
  render(){
    
      return (
        <div>
          
          {this.state.books.map(book =>
            <Book key = {book.id}
              book = {{name: book.name, id: book.id, timesBorrowed: book.timesBorrowed}} >

            </Book>  
          )}
        </div>
    )
  }
}
export default AllBooks
//com