const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, categoryController.getCategory);
router.post("/createCategory", categoryController.createCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);
module.exports = router;