import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';
import { changeCompleted } from '../redux/actions';



const ListItem = ({title, id, completed}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{title}</span>
      <input 
        type="checkbox" 
        checked={completed}
        onClick={()=>dispatch(changeCompleted(id))}/>
      <button 
        disabled={!completed}
        onClick={()=>dispatch(deleteItem(id))}
        >delete</button>
    </div>
  );
};

export default ListItem;