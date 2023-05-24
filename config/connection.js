const mongoose = require('mongoose');

//create variable to connect to mongoDB
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/socialNetworkDB');

//export connection for use in models etc. 
module.export = connection; 



