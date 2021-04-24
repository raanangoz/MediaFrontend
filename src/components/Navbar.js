import React, {Component} from 'react';
import { NavLink } from "react-router-dom";



import './Navbar.css';

function Navbar(){
  
  
  return (
   
    <span>
      <nav className = "nav">
        <div className = "logo"> Library </div>

          <ul className = "nav-items">
            <li>
              <NavLink to = '/'> Home </NavLink> 
            </li>
            <li>
              <NavLink to = 'collection' > Books Collection </NavLink> 
            </li>
            <li>
              <NavLink to = 'add' > add new book </NavLink> 
            </li>
            <li>
              <NavLink to = 'login' > login </NavLink> 
            </li>
            <li>
              <NavLink to = 'find' > search book </NavLink> 
            </li>
            <li>
              <NavLink to = 'register' > register </NavLink> 
            </li>
          </ul>
               
         
        
      </nav>
    </span>
    
    
  );
}

export default Navbar;
