const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Health Check
app.get('/', (req, res) => {
  res.send('Welcome to the Nodejs Intern Challenge API');
});

