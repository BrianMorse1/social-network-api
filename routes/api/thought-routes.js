const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtID').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtID/reactions').post(addReaction);

router.route('/reactions/:reactionID').delete(removeReaction);

module.exports = router;





