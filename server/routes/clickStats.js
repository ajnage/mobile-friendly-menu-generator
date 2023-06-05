const express = require("express");
const router = express.Router();
const clickStatsController = require("../controllers/clickStats");

router.get("/:restaurantId", clickStatsController.getClickStats);
router.post("/add-stats/:restaurantId", clickStatsController.createClickStats);
router.put(
  "/update-stats/:clickStatsId",
  clickStatsController.updateClickStats,
);

module.exports = router;
