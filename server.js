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
db
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
