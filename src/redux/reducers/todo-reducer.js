import { ADD_TODO_ITEM } from "../types";
import { DELETE_ITEM } from "../types";
import { CHANGE_COMPLETED } from "../types";

const initialState ={
  todos: JSON.parse(localStorage.getItem('redux-todos')) || [],
}

export const todoReducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {todos} = state;
  //{todos} - состояние в initialState
  switch (type) {
    case ADD_TODO_ITEM: {
      const newItem = {
        id: Date.now(),
        title: payload,
        completed: false
      }
      return {
        ...state,
        todos: [newItem, ...todos]
      }
    }
    case DELETE_ITEM: {
      const newArr = todos.filter(item=>item.id !== payload);
      return {
        ...state,
        todos: newArr
      }
    }
    case CHANGE_COMPLETED: {
      const newArr = todos.map(item=> item.id === payload ? {...item, completed: !item.completed}:item)
      return{
        ...state,
        todos: newArr
      }
    }
    default:
      return state
  }
}