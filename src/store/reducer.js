import { UPDATE_HEADER_DATA } from './constants';
import { INTIAL_STORE_STATE } from './initialState';

export default (state = INTIAL_STORE_STATE, action) => {
  switch (action.type) {
    case UPDATE_HEADER_DATA:
      return { ...state, headerData: action.payload[0] };
    default:
      return state;
  }
};
