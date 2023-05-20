const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    enum: [
      "starters",
      "shareables",
      "vegetarian",
      "vegan",
      "halal",
      "kosher",
      "seafood",
      "bbq",
      "burgers",
      "drinks",
      "more",
      "desserts",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Item", restaurantSchema);
