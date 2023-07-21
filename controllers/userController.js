const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.username})
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  //delete user
  async deleteUser(req, res){
    try {
        const user = await User.findOneAndRemove({ username: req.params.username});
        if (!user) {
            return res.status(404).json({ message: 'No user with that username' });
            }
            res.json({ message: 'User successfully deleted!'})
  } catch (err) {
    res.status(500).jseon(err);
  }
},

//update user
async updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},
// Add a friend
async addFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { $addToSet: { friends: req.body.username } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'No user with this username!' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},
// Remove friend
async removeFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.thoughtID },
      { $pull: { friends: { friends: req.params.username} } },
      { runValidators: true, new: true }
    )

    if (!user) {
      return res.status(404).json({ message: 'No user with this username!' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},

}




// //update user
//     async updateUser(req, res) {
//         try {
//             const user = await User.updateOne(
//                 { username: req.params.username},
//                 {})
//     }
// }

