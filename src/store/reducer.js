import { TOGGLE_LOADING_ACTION } from './constants';

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_ACTION:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
