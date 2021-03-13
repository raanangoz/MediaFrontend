import React, {Component} from 'react';
import Book from './Book';
import AllBooks from './AllBooks';
import Test from './Test';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Navbar(){
  
  
  return (
  <div>
    
    <Router> 
      <ul>
        <li>
          <Link to = '/' > Home </Link> 
        </li>
        <li>
          <Link to = 'collection' > Books Collection </Link> 
        </li>
      </ul>
    
      <Switch>
        <Route exact path = "/" ></Route>
        <Route path = "/collection" > <AllBooks/> </Route>
          
      </Switch>


    </Router>
  </div>
  );
}

export default Navbar;
