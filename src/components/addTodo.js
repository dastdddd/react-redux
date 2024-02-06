import React, { useState } from 'react';
import { addTodoItem } from '../redux/actions';
import { useDispatch } from 'react-redux';


const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    if (value) {
      dispatch(addTodoItem(value))
      setValue('')
    } else {
      alert('error!!!')
    }
  }
  
  return (
    <form onSubmit={handleClick}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text" />
      <button type='submit'>add todo</button>
    </form>
  );
};

export default AddTodo;