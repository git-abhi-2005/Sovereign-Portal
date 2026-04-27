const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  org: String,
  salary: String,
  type: String,
  tag: String,
  posted: String
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
