import { TOGGLE_LOADING_ACTION } from './constants';
import { INTIAL_STORE_STATE } from './initialState';

export default (state = INTIAL_STORE_STATE, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_ACTION:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
