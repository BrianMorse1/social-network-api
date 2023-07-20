const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser

} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:username
router.route('/:username').get(getSingleUser).delete(deleteUser);

module.exports = router;


