const mongoose = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./models/Reaction.js');

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
    get: function() {
      return moment(this.createdAt).format('DD/MM/YYYY');
    }
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
