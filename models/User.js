const mongoose = require('mongoose');

//created user schema which is the definition of what the user table will look like in the DB. different from user model.
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(?i)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DON"T FORGET TO FINISH ME'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]    
},
{
    toJSON: {
        virtuals: true,
    }
})

userSchema.virtual('friendCount').get(
    function() {
        return this.friends.length;
        }
);

const User = mongoose.model('user', userSchema);
module.exports = User; 