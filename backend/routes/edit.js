//This route will handle editing and deleting items, as well as rendering the edit page itself

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')
const upload = require("../middleware/multer");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', upload.single("file"), editController.updateTask)

module.exports = router