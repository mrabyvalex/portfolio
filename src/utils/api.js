/* eslint-disable prefer-destructuring */
import axios from 'axios';

const HEADERS = {
  headers: {
    Accept: 'application/json'
  }
};
export const get = (url) => axios.get(url, HEADERS);
