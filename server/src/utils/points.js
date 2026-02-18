const User = require('../models/User');

const POINTS_CONFIG = {
  VIEW: 1,
  DOWNLOAD: 1,
  UPLOAD: 5,
  ASK: 1,
  ANSWER: 3,
};

const awardPoints = async (userId, action) => {
  const points = POINTS_CONFIG[action] || 0;
  const user = await User.findById(userId);
  if (!user) return;

  user.points += points;
  user.level = 1 + Math.floor(user.points / 50);

  if (user.points >= 10 && !user.badges.includes('Starter')) {
    user.badges.push('Starter');
  }
  if (user.points >= 100 && !user.badges.includes('Achiever')) {
    user.badges.push('Achiever');
  }

  await user.save();
};

module.exports = { awardPoints };

