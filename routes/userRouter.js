const { Router } = require("express");
const router = new Router();
const { userController } = require("../controllers");
const passport = require('passport');

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.put("/:userId", passport.authenticate('jwt', { session: false }), userController.updateUser);

router.delete("/:userId", passport.authenticate('jwt', { session: false }), userController.deleteUser);

module.exports = router;
