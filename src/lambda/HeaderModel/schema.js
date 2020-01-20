import mongoose from 'mongoose';
// Set Product Schema
export default mongoose.model('header', new mongoose.Schema({}, { strict: false }));
