const { Router } = require("express");
const router = new Router();
const { postController, commentController } = require("../controllers");
const passport = require('passport');

router.get("/", postController.getAllPosts);

router.post("/", passport.authenticate('jwt', { session: false }), postController.createPost);

router.put("/:postId", passport.authenticate('jwt', { session: false }), postController.updatePost);

router.delete("/:postId", passport.authenticate('jwt', { session: false }), postController.deletePost);

router.get('/:postId/comments', commentController.getAllComments); 

router.post('/:postId/comments', commentController.createComment);

router.put('/:postId/comments/:commentId', passport.authenticate('jwt', { session: false }), commentController.updateComment);

router.delete('/comments/:commentId', passport.authenticate('jwt', { session: false }), commentController.deleteComment);

module.exports = router;
