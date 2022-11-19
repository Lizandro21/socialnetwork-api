const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController');
// the api thoughts
router.route('/').get(getThoughts).post(createThought);
// api thoughts ID
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
//api thoughts id reactions
router.route('/:thoughtId/reactions').post(createReaction);
//api thoughts id reaction reactions id
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;