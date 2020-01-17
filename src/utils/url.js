const generateUrl = (str) =>
  str
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .join('-');
