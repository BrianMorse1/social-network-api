const { Schema, Types} = require('mongoose');
const moment = require('moment');


// create schema but not a model. export at the end to be used in thoughts model. will be stored in DB under thoughts table.

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(){
            return moment(this.createdAt).format('DD/MM/YYYY')
        }}       
})

module.exports = reactionSchema;