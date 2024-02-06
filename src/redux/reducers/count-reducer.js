import { INCREMENT, DECREMENT, REFRESH } from '../types';

const initialState = {
  count: 1,
}
//initialState - открываем состояние

export const countReducer = (state = initialState, action) => {
  const { type} = action;
  //type, payload - свойства action
  const { count } = state;

  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        count: count + 1
      }
    }
    case DECREMENT: {
      return {
        ...state,
        count: count === 1 ? 1 : count - 1
      }
    }
    case REFRESH: {
      return {
        ...state,
        count: 1
      }
    }

    default:
      return state
  }
}