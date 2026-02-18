const express = require('express');
const Resource = require('../models/Resource');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { awardPoints } = require('../utils/points');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { search, subject, semester, university, examYear, type } = req.query;
    const query = {};

    if (search) query.title = { $regex: search, $options: 'i' };
    if (subject) query.subject = subject;
    if (semester) query.semester = semester;
    if (university) query.university = university;
    if (examYear) query.examYear = examYear;
    if (type) query.type = type;

    const resources = await Resource.find(query)
      .sort({ createdAt: -1 })
      .populate('uploadedBy', 'fullName');

    res.json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', protect, upload.single('file'), async (req, res) => {
  try {
    const { title, subject, semester, university, examYear, type } = req.body;

    const resource = await Resource.create({
      title,
      subject,
      semester,
      university,
      examYear,
      type,
      filePath: req.file ? `uploads/${req.file.filename}` : undefined,
      uploadedBy: req.user._id,
    });

    await awardPoints(req.user._id, 'UPLOAD');

    res.status(201).json(resource);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/view', protect, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });

    resource.views += 1;
    await resource.save();

    await awardPoints(req.user._id, 'VIEW');

    res.json({ views: resource.views });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/download', protect, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });

    resource.downloads += 1;
    await resource.save();

    await awardPoints(req.user._id, 'DOWNLOAD');

    res.json({ downloads: resource.downloads });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

