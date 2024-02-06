import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const {todos} = useSelector(state=>state.todo)
  return (
    <div>
      <h1>todo list {todos.length}</h1>
    </div>
  );
};

export default Header;