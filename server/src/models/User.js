const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  course: String,
  yearSemester: String,
  college: String,
  profilePicture: String,
  password: { type: String },
  googleId: String,
  githubId: String,
  facebookId: String,
  appleId: String,
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [{ type: String }],
  subscriptionPlan: {
    type: String,
    enum: ['FREE', 'ACHIEVER', 'GENIUS'],
    default: 'FREE',
  },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

