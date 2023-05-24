const express = require('express');

const mongoose 

const app = express();
const port = 3001;

//connection to local mongoDB
const connectionStringURI = ``;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

//varriable to hold db connection
let db;

//creates variable to hold database name
const dbName = 'socialNetworkDB';




