const mongoose = require('mongoose');
const moment = require('moment');
//require reactions schema


//created user schema 
const thoughtSchema = new mongoose.Schema({
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
        require: true,
    },
        
    
    reactions: [
       //reactions schema goes right here
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

const User = mongoose.model('user', userSchema);
module.exports = User; 