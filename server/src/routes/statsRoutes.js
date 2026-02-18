const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/leaderboard', async (req, res) => {
  try {
    const topUsers = await User.find()
      .sort({ points: -1 })
      .limit(10)
      .select('fullName points level badges');

    res.json(topUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

