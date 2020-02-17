import { UPDATE_HEADER_DATA, UPDATE_IMAGES_DATA, UPDATE_PAGE_DATA } from './constants';

const INTIAL_STORE_STATE = {
  loading: false,
  headerData: {},
  pageData: {
    '/a': {
      entry: ['1'],
      mapping: {},
      nodes: {
        '1': {
          title: 'component1',
          index: 0
        }
      }
    }
  }
};

export default (state = INTIAL_STORE_STATE, action) => {
  switch (action.type) {
    case UPDATE_HEADER_DATA:
      return { ...state, headerData: action.payload };
    case UPDATE_IMAGES_DATA:
      return { ...state, imagesData: action.payload };
    case UPDATE_PAGE_DATA:
      return { ...state, pageData: { ...(state.pageData || {}), [action.payload.url]: action.payload.data } };
    default:
      return state;
  }
};
