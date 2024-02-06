import { DISLPAY_VIEW } from '../types';

const initialState = {
  isActive: false,
}
//initialState - открываем состояние

export const displayReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //type, payload - свойства action

  switch (type) {
    case DISLPAY_VIEW:{
      return {
        ...state,
        isActive: payload
      }
    }
    default:
      return state
  }
}