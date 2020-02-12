import { APIUtil } from '../utils';

const API_BASEPATH = '/.netlify/functions/';

const APIS = {
  FETCH_HEADER: `${API_BASEPATH}headerAPI?type=get`,
  FETCH_IMAGES: `${API_BASEPATH}imagesAPI?type=get`
};

export const fetchHeaderDataApi = () => APIUtil.get(APIS.FETCH_HEADER);
export const fetchImagesDataApi = () => APIUtil.get(APIS.FETCH_IMAGES);
