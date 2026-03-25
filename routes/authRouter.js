const { Router } = require("express");
const router = new Router();
const { authController } = require("../controllers");

router.post("/signIn", authController.signIn);

module.exports = router;
