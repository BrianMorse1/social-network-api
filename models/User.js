const mongoose = require('mongoose');

//created user schema which is the definition of what the user table will look like in the DB.
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
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]    
},
{
    toJSON: {
        virtuals: true,
    }
})

//virtual for obtaining length of friends array for user
userSchema.virtual('friendCount').get(
    function() {
        return this.friends.length;
        }
);

const User = mongoose.model('user', userSchema);
module.exports = User; 