import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

function AddNewBook() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    
    axios({
      method: 'post',
      url: 'http://localhost:8080/media/add',
      data: {
        
        author: data['Author Name'],
        name: data['Book Name']
      
      }
    });
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder = " author name "name="Author Name" ref={register} />
      <input placeholder = " book name "name="Book Name" ref={register({ required: true })} />
      <input type="submit" />
    </form>
  );
}
export default AddNewBook;