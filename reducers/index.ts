
import { ADD_ARTICLE, SET_BUSY, CLEAR_LIST } from "../constants/action-types";
import { Quote } from '../constants/quote-def';

const initialState = {
  quotes: [],
  busy: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state, 
        quotes: [action.payload, ...state.quotes]
      };
    case SET_BUSY:
      return {
        ...state, 
        busy: action.payload
      };
      case CLEAR_LIST:
      return {
        ...state, 
        quotes: []
      };
    default:
      return state;
  }
}
export default rootReducer;