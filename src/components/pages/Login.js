import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css';
function Login() {
    const { login, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
    
    axios({
      method: 'post',
      url: 'http://localhost:8080/login',
      data: {
        
        username: data['username'],
      
        password: data['password']
        
      }
    })
    .then(
      console.log("logged")
    );
    
  }
  return (
    <form className = "form-div" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder = " username "name="username"  />
      
      <input placeholder = " password "name="password"  />
      <input type="submit" action = "login"/>
    </form>
    
  );

  
}
export default Login;



  

  

