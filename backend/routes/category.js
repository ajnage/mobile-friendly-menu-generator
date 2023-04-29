const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/category/:id", ensureAuth, categoryController.getCategory);
router.post("/category/:id", categoryController.createCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.post("/createCategory/:name", categoryController.deleteCategory);
module.exports = router;