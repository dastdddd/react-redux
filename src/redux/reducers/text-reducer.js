import { CHANGE_TEXT } from '../types';


const initialState = {
  text: 'hello world',
}
//initialState - открываем состояние

export const textReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //type, payload - свойства action

  switch (type) {
    
    case CHANGE_TEXT:{
      return {
        ...state,
        text: payload,
      }
    }
    default:
      return state
  }
}