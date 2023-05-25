const OrderStats = require("../models/orderStats");

module.exports = {
  getRestaurantOrderStats: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const orderStats = await OrderStats.find({
        restaurant: restaurantId,
      }).populate("restaurant");

      res.status(200).send(orderStats);
      // console.log(orderStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
  createOrderStats: async (req, res) => {
    try {
      const newOrderStats = await OrderStats.create({
        month: req.body.month,
        orders: req.body.orders,
        description: req.body.description,
        restaurant: req.params.restaurantId,
      });
      res.status(200).send(newOrderStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
  updateOrderStats: async (req, res) => {
    try {
      const orderStatsId = req.params.orderStatsId;
      const { month, orders, description } = req.body;
      const updatedOrderStats = await OrderStats.findByIdAndUpdate(
        orderStatsId,
        { month, orders, description },
        { new: true },
      );

      if (!updatedOrderStats) return res.status(404).send("stats not found");

      res.status(200).send(updatedOrderStats);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },
};
