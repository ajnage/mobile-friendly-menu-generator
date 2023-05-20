const express = require("express");
const router = express.Router();
const authController = require("../controllers/userAuth");

// Routes for user login/signup
router.post("/login", authController.login);

router.post("/register", authController.register);

module.exports = router;
