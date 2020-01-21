import mongoose from 'mongoose';
// Set Product Schema
export default mongoose.model('images', new mongoose.Schema({}, { strict: false }));
