import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//useSelector - вывессти состояние из reducer(store)
//useDispatch - изменить состояние state
import { increment, decrement, refresh, changeText, displayView } from '../redux/actions';
//increment,decrement - action функция который создали



const DefaultRedux = () => {

  const { count } = useSelector(state => state.count);
  const { text } = useSelector(state => state.text);
  const { isActive } = useSelector(state => state.display);
  //берем состояние (state - любое название root лучше чем все)
  const dispatch = useDispatch();
  //dispatch изменение состояния


  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment +</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement -</button>
      <button onClick={() => dispatch(refresh())}>refresh</button>
      <hr />
      <button onClick={() => dispatch(changeText('privet redux'))}>click</button>
      <h1>{text}</h1>
      <hr />
      <button onClick={() => dispatch(displayView(true))}>none</button>
      <button onClick={() => dispatch(displayView(false))}>block</button>
      <h1>{isActive ? '' : 'text'}</h1>
    </div>
  );
};

export default DefaultRedux;