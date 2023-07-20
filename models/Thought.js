const mongoose = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction.js');


//created thought schema 
const thoughtSchema = new mongoose.Schema({
    thoughtID: {
        type: String,
        required: true,
        unique: true,
    },
    
    thoughtText: {
        type: String,  
        required: true, 
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(){
            return moment(this.createdAt).format('DD/MM/YYYY')
        }       
    },
    username: {
        type: String, 
        required: true,
    },
    
    reactions: [
       reactionSchema
    ]    
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    }
})

thoughtSchema.virtual('friendCount').get(
    function() {
        return this.friends.length;
        }
);

const Thought = mongoose.model('thought', thoughtSchema);
module.exports = Thought; 