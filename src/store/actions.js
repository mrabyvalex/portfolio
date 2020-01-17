import { createAction } from 'redux-actions';
import { TOGGLE_LOADING_ACTION, DATA_RECEIVED_ACTION } from './constants';

export const toggleLoading = createAction(TOGGLE_LOADING_ACTION);
export const dataReceived = createAction(DATA_RECEIVED_ACTION);
