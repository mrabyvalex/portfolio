export const parseDbObjToJSON = (data) => JSON.parse(JSON.stringify(data));
export const generateUrlFromString = (str) =>
  str
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .join('-');
