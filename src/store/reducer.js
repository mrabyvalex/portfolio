import { TOGGLE_LOADING } from "./constants"

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}
