import React from 'react';
import axios from 'axios';
import './Book.css'; 
import BookExpandedDetails from './BookExpandedDetails';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function Book (props){
    //
    const imgurl = 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg'
    return(
        <div className = "books">
            {/* {props.book.timesBorrowed} */}
            <h1 className = 'bookName' >{props.book.name}</h1>
            {/* {props.book.id}  */}
            <img src = {imgurl} className = "bookPictureCollection" onClick = {() => moreDetails(props.book)} ></img>
            <button id={props.book.id}  onClick = {() => removeBook(props.book.id)}>remove</button>
              
        </div>

    )
    function removeBook(e){
        axios({
            method: 'delete',
            url: 'http://localhost:8080/media/delete/'+e,
            data: {
              
            }
          });
    }
    function moreDetails(book){
        return(
            <BookExpandedDetails/>
        )
        // return(
        //     <div>
        //         console.log(book.timesBorrowed)
                // <Router>
                //     <Link to ='harry'></Link>
                //         <Switch>
                //             <Route path = "/harry" > <BookExpandedDetails/> </Route>
                //         </Switch>
                // </Router>
            // </div>
        // )
            
    }

 }
export default Book;
