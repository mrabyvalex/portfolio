import { APIUtil } from '../utils';

const API_BASEPATH = '/.netlify/functions/';

const APIS = {
  FETCH_HEADER: `${API_BASEPATH}headerAPI?type=get`
};

export const fetchHeaderDataApi = () => APIUtil.get(APIS.FETCH_HEADER);
