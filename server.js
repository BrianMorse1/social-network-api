const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const routes = require('./controllers');
const connection = require('./config/connection');
const app = express();
const port = 3001;


// Initialize a new instance of MongoClient
const client = new MongoClient(connection);


//creates variable to hold database name
const dbName = 'socialNetworkDB';

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


db.once('open', () => {
    app.listen(, () => {
      console.log(`API server running on port ${port}!`);
    });
  });


