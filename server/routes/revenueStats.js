const express = require("express");
const router = express.Router();
const revenueStatsController = require("../controllers/revenueStats");

router.get("/:restaurantId", revenueStatsController.getRevenueStats);
router.post(
  "/add-stats/:restaurantId",
  revenueStatsController.createRevenueStats,
);
router.put(
  "/update-stats/:revenueStatsId",
  revenueStatsController.updateRevenueStats,
);

module.exports = router;
