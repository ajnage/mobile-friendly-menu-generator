const Restaurant = require('../models/Restaurant');

module.exports = {
  getRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.find();
      // let sortedCategories = categories.sort((a,b)=> (a.sequence > b.sequence ? 1:-1))
      // res.render("categories.ejs", {category: sortedCategories, user: req.user});
      if (!restaurant && restaurant.length < 1)
        res.status(404).body(`Restaurant with id  not found`);
      else res.status(200).json(restaurant[0]);
    } catch (err) {
      console.log(err);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      const createRes = await Restaurant.create({
        sequence: req.body.sequence,
        restaurantName: req.body.restaurantName,
        user: req.user,
      });
      res.status(200).json({ restaurantId: createRes._id });
    } catch (err) {
      console.log(err);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      //Find category by id
      let category = await Restaurant.findById({ _id: req.params.id });
      //Delete category from db
      await Restaurant.remove({ _id: req.params.id });
      console.log('Deleted Category');
      // res.redirect("/")
    } catch (err) {
      console.log('Error with deleting category');
      // res.redirect("/")
    }
  },
  updateRestaurant: async (req, res) => {
    try {
      //Find category by id
      let category = await Restaurant.findById({ _id: req.params.id });
      //Delete category from db
      await Restaurant.remove({ _id: req.params.id });
      console.log('Deleted Category');
      // res.redirect("/")
    } catch (err) {
      console.log('Error with deleting category');
      // res.redirect("/")
    }
  },
};
