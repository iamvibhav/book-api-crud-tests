const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes);

// Connect to MongoDB only if not in test
const dbURI =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI;

mongoose.connect(dbURI).then(() => {
  console.log(`MongoDB connected (${process.env.NODE_ENV})`);
  if (process.env.NODE_ENV !== 'test') {
    app.listen(5000, () => console.log('Server running on port 5000'));
  }
})
.catch(err => console.log(err));


module.exports = app; // ✅ Export app for testing
