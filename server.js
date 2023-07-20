//required requirements
const express = require('express');
const routes = require('./controllers');
const db = require('./config/connection');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Connect to DB
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Start the server after successful database connection
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
