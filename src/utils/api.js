import axios from 'axios';

const HEADERS = {
  headers: {
    Accept: 'application/json'
  }
};
export const get = (url) =>
  axios
    .get(url, HEADERS)
    .then((d) => d)
    .catch((err) => {
      throw err;
    });
export const post = (url, body) =>
  axios
    .post(url, body, HEADERS)
    .then((d) => d)
    .catch((err) => {
      throw err;
    });
