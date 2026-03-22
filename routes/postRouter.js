const { Router } = require("express");
const router = new Router();
const { postController, commentController } = require("../controllers");

router.get("/", postController.getAllPosts);

router.post("/", postController.createPost);

router.put("/:postId", postController.updatePost);

router.delete("/:postId", postController.deletePost);

router.get('/comments', commentController.getAllComments); 

router.post('/:postId/comments', commentController.createComment);

router.put('/:postId/comments/:commentId', commentController.updateComment);

router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
