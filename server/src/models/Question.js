const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: String,
  answeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  subject: String,
  semester: String,
  askedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [answerSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', questionSchema);

