const mongoose = require('mongoose');

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
            ref: 'DON"T FORGET TO FINISH ME'
        }
    ]
})