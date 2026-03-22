const { Router } = require("express");
const router = new Router();
const postController = require("../controllers").postController;

router.get("/", postController.getAllPosts);

router.post("/", postController.createPost);

router.put("/:postId", postController.updatePost);

router.delete("/:postId", postController.deletePost);

module.exports = router;
