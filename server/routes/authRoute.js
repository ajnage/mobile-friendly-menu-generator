const express = require("express");
const router = express.Router();
const authController = require("../controllers/userAuth");

// Routes for user login/signup
router.post("/auth", authController.auth);

module.exports = router;
