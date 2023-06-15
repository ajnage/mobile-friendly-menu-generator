const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/items");

router.get("/", itemsController.getItems);
router.post("/create-item", itemsController.createItem);
router.put("/update-item/:id", itemsController.updateItem);
router.delete("/delete-item/:id", itemsController.deleteItem);
router.get("/:category", itemsController.getCategories);
router.get("/categories", itemsController.getAllCategories)
module.exports = router;
