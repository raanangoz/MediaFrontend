import React from 'react';
import axios from 'axios';
import './Book.css'; 

import  BookExpandedDetails  from './BookExpandedDetails';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
function Book (props){
    //
    const imgurl = 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg'
    return(
        <div className = "books">
            {/* {props.book.timesBorrowed} */}
            <text className = 'bookName' >{props.book.name}</text> <br/>
            <text className = 'book-author'>{props.book.author}</text>
            {/* {props.book.id}  */}
            <img src = {imgurl} className = "bookPictureCollection" onClick = {() => moreDetails()} ></img>
            
            {/* <BookExpandedDetails></BookExpandedDetails> */}
              
        </div>

    )
    
    function moreDetails(){
        
         <BookExpandedDetails/>
        // return(
        //     <div>
        //         console.log(book.timesBorrowed)
                // <Router>
                //     <NavLink to ='harry'></NavLink>
                //         <Switch>
                //             <Route path = "/harry" > <BookExpandedDetails/> </Route>
                //         </Switch>
                // </Router>
            // </div>
        // )
            
    }

 }
export default Book;
