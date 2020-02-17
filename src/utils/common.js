import UUIDV4 from 'uuid/v4';

export const generateUniqueId = () => UUIDV4();

if (typeof window !== 'undefined') {
  window.generateUniqueId = generateUniqueId;
}
