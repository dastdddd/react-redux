import React, {useEffect} from 'react';
import ListItem from './list-item';
import { useSelector } from 'react-redux';

const List = () => {
  const {todos} = useSelector(state=>state.todo);

  useEffect(() => {
    localStorage.setItem('redux-todos', JSON.stringify(todos));
  },[todos]);

  return (
    <div className='list'>
      {
        todos.map(item => <ListItem key={item.id}{...item}/>)
      }
    </div>
  );
};

export default List;