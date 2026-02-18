const fs = require('fs');
const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads directory');
}

app.listen(PORT, () => {
  console.log(`ScholarBay server running on port ${PORT}`);
});

