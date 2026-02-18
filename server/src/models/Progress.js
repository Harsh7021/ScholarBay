const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  viewedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  downloadedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
});

module.exports = mongoose.model('Progress', progressSchema);

