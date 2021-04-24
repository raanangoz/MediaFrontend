import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
function Register() {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
    
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/add',
      data: {
        
        firstName: data['fname'],
        email: data['email'],
        password: data['password']
      
      }
    });
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder = " first name "name="fname" ref={register} />
      <input placeholder = " email "name="email" ref={register({ required: true })} />
      <input placeholder = " password "name="password" ref={register({ required: true })} />
      <input type="submit" />
    </form>
  );

}
export default Register;



  

  

