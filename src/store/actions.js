import { createAction } from "redux-actions"
import { TOGGLE_LOADING, DATA_RECEIVED } from "./constants"

export const toggleLoading = createAction(TOGGLE_LOADING)
export const dataReceived = createAction(DATA_RECEIVED)
