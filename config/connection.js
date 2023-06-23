const mongoose = require('mongoose');
const { connect, connection } = require('mongoose');

//create variable to connect to mongoDB
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/socialNetworkDB');

//create connection
connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//export connection for use in models etc. 
module.exports = connection; 



