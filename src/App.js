import React from 'react';
import './App.css';
import DefaultRedux from './components/defaultRedux';
import Header from './components/header';
import AddTodo from './components/addTodo';
import List from './components/list';


const App = () => {

  return (
    <div>
      <DefaultRedux />
      <hr />
      <Header/>
      <AddTodo/>
      <List/>
      
    </div>
  );
};

export default App;