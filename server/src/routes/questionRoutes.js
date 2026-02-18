const express = require('express');
const Question = require('../models/Question');
const { protect } = require('../middleware/authMiddleware');
const { awardPoints } = require('../utils/points');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find()
      .sort({ createdAt: -1 })
      .populate('askedBy', 'fullName')
      .populate('answers.answeredBy', 'fullName');
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { text, subject, semester } = req.body;
    const question = await Question.create({
      text,
      subject,
      semester,
      askedBy: req.user._id,
    });

    await awardPoints(req.user._id, 'ASK');

    res.status(201).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/answers', protect, async (req, res) => {
  try {
    const { text } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    question.answers.push({
      text,
      answeredBy: req.user._id,
    });

    await question.save();
    await awardPoints(req.user._id, 'ANSWER');

    res.status(201).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

