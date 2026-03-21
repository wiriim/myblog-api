const { Router } = require("express");
const router = new Router();
const userController = require("../controllers").userController;

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;
