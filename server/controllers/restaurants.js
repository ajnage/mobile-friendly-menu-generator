const Restaurant = require("../models/restaurant");
const User = require("../models/user");

module.exports = {
  getAll: async (req, res) => {
    const { user } = req;

    try {
      const restaurants = await User.findOne(
        { _id: user.id },
        { restaurants: 1 }
      ).populate("restaurants");

      res.status(200).json(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    try {
      const restaurants = await Restaurant.findOne({ _id: id });

      if (!restaurants) return res.status(404).send("Restaurant not found");

      res.status(200).send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
    const { user } = req;
    const { name } = req.body;

    try {
      const restaurants = await Restaurant.create({
        name,
        userId: user.id,
      });

      await User.findOneAndUpdate(
        { _id: user.id },
        { $push: { restaurants: restaurants.id } },
        { new: true }
      );
      res.status(200).send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
      const restaurants = await Restaurant.findOneAndUpdate(id, body, {
        new: true,
      });

      res.status(200).send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    const { user } = req;
    const { id } = req.params;

    try {
      const restaurants = await Restaurant.findByIdAndDelete(id);
      await User.findOneAndUpdate(
        user.id,
        { $pull: { restaurants: restaurants.id } },
        { new: true }
      );
      res.status(200).send(restaurants);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
