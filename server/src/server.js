const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose'); // 1. Added mongoose import
require('dotenv').config();            // 2. Added dotenv to read Render variables
const app = require('./app');

const PORT = process.env.PORT || 5000;

// 3. Changed to MONGO_URI to match your Render "Key"
const DB_URI = process.env.MONGO_URI || 'mongodb+srv://chintutupe7:702197QW@scholarbay.e0ozr1u.mongodb.net/?appName=ScholarBay';

// 4. Added actual connection logic
mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`ScholarBay server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads directory');
}
