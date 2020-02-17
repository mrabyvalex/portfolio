import UUIDV4 from 'uuid/v4';

export const generateUniqueId = () => UUIDV4();

export const reorderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
