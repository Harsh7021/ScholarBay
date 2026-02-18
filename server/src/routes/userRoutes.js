const express = require('express');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookmarks/:resourceId', protect, async (req, res) => {
  try {
    const { resourceId } = req.params;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.bookmarks.includes(resourceId)) {
      user.bookmarks.push(resourceId);
      await user.save();
    }

    res.json(user.bookmarks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/bookmarks/:resourceId', protect, async (req, res) => {
  try {
    const { resourceId } = req.params;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.bookmarks = user.bookmarks.filter(
      (id) => id.toString() !== resourceId.toString()
    );
    await user.save();

    res.json(user.bookmarks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/bookmarks', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('bookmarks');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.bookmarks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

