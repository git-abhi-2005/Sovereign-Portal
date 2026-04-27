const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  grievanceId: { type: String, unique: true },
  category: String,
  title: String,
  description: String,
  status: { type: String, default: 'Submitted' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

grievanceSchema.pre('save', function(next) {
  if (!this.grievanceId) {
    this.grievanceId = `GV-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
  }
  next();
});

module.exports = mongoose.model('Grievance', grievanceSchema);
