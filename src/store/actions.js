import { createAction } from 'redux-actions';
import { FETCH_HEADER_DATA, UPDATE_HEADER_DATA, FETCH_IMAGES_DATA, UPDATE_IMAGES_DATA, ADD_NEW_IMAGE } from './constants';

export const fetchHeaderData = createAction(FETCH_HEADER_DATA);
export const updateHeaderData = createAction(UPDATE_HEADER_DATA);

export const fetchImagesData = createAction(FETCH_IMAGES_DATA);
export const updateImagesData = createAction(UPDATE_IMAGES_DATA);
export const addNewImage = createAction(ADD_NEW_IMAGE);
