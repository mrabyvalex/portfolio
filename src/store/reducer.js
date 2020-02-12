import { UPDATE_HEADER_DATA, UPDATE_IMAGES_DATA } from './constants';

const INTIAL_STORE_STATE = {
  loading: false,
  headerData: {}
};

export default (state = INTIAL_STORE_STATE, action) => {
  switch (action.type) {
    case UPDATE_HEADER_DATA:
      return { ...state, headerData: action.payload };
    case UPDATE_IMAGES_DATA:
      return { ...state, imagesData: action.payload };
    default:
      return state;
  }
};
