const { Router } = require("express");
const router = new Router();
const { authController } = require("../controllers");

router.get("/signIn", authController.signIn);

module.exports = router;
