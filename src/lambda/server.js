import mongoose from 'mongoose';

require('dotenv').config();

const dbUrl = process.env.REACT_APP_MONGO_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('success', () => {
  console.log('coneection established');
});
db.on('error', (error) => {
  console.log('connection error', JSON.stringify(error));
});
export default db;
