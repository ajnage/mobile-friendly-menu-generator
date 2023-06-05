const express = require("express");
const router = express.Router();
const orderStatsController = require("../controllers/orderStats");

router.get("/:restaurantId", orderStatsController.getRestaurantOrderStats);
router.post("/add-stats/:restaurantId", orderStatsController.createOrderStats);
router.put(
  "/update-stats/:orderStatsId",
  orderStatsController.updateOrderStats,
);

module.exports = router;
