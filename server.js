const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./bookRoutes');

const app = express();
app.use(express.json());



// //server
const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
