export const dbObjToJSON = (data = {}) => JSON.parse(JSON.stringify(data));
export const stringToURL = (str = '') =>
  str
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .join('-');
export const arrayToObject = (array = [], key = 'id') => array.reduce((total, current) => ({ ...total, [current[key]]: current }), {});
