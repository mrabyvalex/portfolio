import { createAction } from 'redux-actions';
import { FETCH_HEADER_DATA, UPDATE_HEADER_DATA } from './constants';

export const fetchHeaderData = createAction(FETCH_HEADER_DATA);
export const updateHeaderData = createAction(UPDATE_HEADER_DATA);
