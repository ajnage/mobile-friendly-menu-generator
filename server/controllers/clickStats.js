const ClickStats = require("../models/clickStats");

module.exports = {
  getClickStats: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const clickStats = await ClickStats.find({
        restaurant: restaurantId,
      }).populate("restaurant");

      res.status(200).send(clickStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
  createClickStats: async (req, res) => {
    try {
      const newClickStats = await ClickStats.create({
        month: req.body.month,
        clicks: req.body.clicks,
        description: req.body.description,
        restaurant: req.params.restaurantId,
      });

      res.status(200).send(newClickStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
  updateClickStats: async (req, res) => {
    try {
      const clickStatsId = req.params.clickStatsId;
      const { month, clicks, description } = req.body;
      const updatedClickStats = await ClickStats.findByIdAndUpdate(
        clickStatsId,
        { month, clicks, description },
        { new: true },
      );

      if (!updatedClickStats) return res.status(404).send("stats not found");

      res.status(200).send(updatedClickStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
};
