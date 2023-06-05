const express = require("express");
const router = express.Router();
const authController = require("../controllers/userAuth");

// Routes for user login/signup
router.post("/", authController.login);

module.exports = router;
