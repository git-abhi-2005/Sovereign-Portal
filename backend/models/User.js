const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNumber: { type: String, required: true, unique: true },
  name: { type: String },
  age: { type: Number },
  occupation: { type: String },
  income: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
