const mongoose = require('mongoose');

// Create connection URL
const connectionURL = 'mongodb://127.0.0.1:27017/socialNetworkDB';

// Connect to MongoDB
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
