const Restaurant = require("../models/restaurant");

module.exports = {
  getRestaurants: async (req, res) => {
    try {
      const allRestaurants = await Restaurant.find();
      res.status(200).send(allRestaurants);
    } catch (err) {
      console.log(err);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      const newRestaurant = await Restaurant.create({
        restaurantName: req.body.restaurantName,
      });
      res.status(200).send(newRestaurant);
    } catch (err) {
      console.log(err);
    }
  },
  updateRestaurant: async (req, res) => {
    try {
      const updatedRestaurant = await Restaurant.findOneAndUpdate(
        { _id: req.params.id },
        {
          restaurantName: req.body.restaurantName,
        },
      );
      console.log("Restaurant details updated");
      res.status(200).send({
        _id: req.params.id,
        restaurantName: req.body.restaurantName,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteRestaurant: async (req, res) => {
    console.log(req.body.restaurantId);
    try {
      const id = req.params.id;
      const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
      res.status(200).send({
        deletedRestaurant,
      });
      console.log("Restaurant deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  },
};
