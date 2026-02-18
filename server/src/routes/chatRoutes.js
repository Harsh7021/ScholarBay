const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Resource = require('../models/Resource');

const router = express.Router();

// Simple mocked chatbot that uses resource titles as "context"
router.post('/', protect, async (req, res) => {
  const { question, subject } = req.body;

  try {
    const resources = await Resource.find(subject ? { subject } : {}).limit(5);

    const contextText = resources
      .map((r) => `${r.title} (${r.type}, ${r.semester || ''})`)
      .join('\n');

    const answer =
      `This is a demo AI answer.\n\n` +
      `You asked: "${question}".\n\n` +
      `Some related materials on ScholarBay:\n${contextText || 'No resources yet.'}`;

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Chat error' });
  }
});

module.exports = router;

