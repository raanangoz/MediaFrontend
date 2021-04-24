import logo from './logo.svg';
import './App.css';
// import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import UseStateTest from './components/UseStateTest';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Book from './components/Book';
import AllBooks from './components/AllBooks';
import AddNewBook from './components/pages/AddNewBook';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FindBook from './components/pages/FindBook';
import Home from './components/pages/Home';

function App() {
  return (

    <div className="App">
    <Router>
      <Navbar/>
      
      <Switch>
            <Route exact path = "/" ><Home/></Route>
            <Route path = "/collection" > <AllBooks/> </Route>
            <Route path = "/add" ><AddNewBook/> </Route>
            <Route path = "/login" > <Login/> </Route>
            <Route path = "/register" > <Register/> </Route>
            <Route path = "/find" > <FindBook/> </Route>
      </Switch>
    </Router>
      
    </div>
  );
  
}

export default App;
