const express = require("express");
const router = express.Router();
const restaurantsController = require("../controllers/restaurants");

router.get("/", restaurantsController.getRestaurants);
router.get("/:restaurantId", restaurantsController.getRestaurantbyId);
router.post("/create-restaurant", restaurantsController.createRestaurant);
router.put("/update-restaurant/:id", restaurantsController.updateRestaurant);
router.delete("/delete-restaurant/:id", restaurantsController.deleteRestaurant);

module.exports = router;
