import { INCREMENT, DECREMENT, REFRESH, CHANGE_TEXT, DISLPAY_VIEW, ADD_TODO_ITEM, DELETE_ITEM, CHANGE_COMPLETED } from "./types";

export const increment = () => ({type: INCREMENT});
export const decrement = ()=> ({type: DECREMENT});
export const refresh = ()=> ({type: REFRESH});

export const changeText = (text)=> ({type: CHANGE_TEXT, payload: text});
export const displayView = (bool)=> ({type: DISLPAY_VIEW, payload: bool});

export const addTodoItem = (text) =>({type: ADD_TODO_ITEM, payload: text});
export const deleteItem = (id) =>({type: DELETE_ITEM, payload: id});
export const changeCompleted = (id) =>({type: CHANGE_COMPLETED, payload: id});



