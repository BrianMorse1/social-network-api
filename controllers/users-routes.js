const { User } = require('../models');
const router = require('express').Router();

//returns all users
router.get('/all', (req, res) => {
    User.findAll()
    .then(users => res.json(users))
});

//get user by username
router.get('/:username', (req, res) =>{
    User.findOne({ username: req.params.username }) 
.then(user=> res.json(user))
});

//create a new user
router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
});

//delete user by username
router.delete('/:username', async (req, res) =>{
  try{  User.findOne({ username: req.params.username }) 
.then(user=> res.json(user))
}catch(err){
    res.status(404).json(err);
}
});