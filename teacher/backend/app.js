const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes will be mounted here later
app.use('/api/questions', require('./routes/questions'));
app.use('/api/upload', require('./routes/upload'));

module.exports = app;
