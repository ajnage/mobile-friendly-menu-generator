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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

// type: String,
// enum: [
//   "starters",
//   "shareables",
//   "vegetarian",
//   "vegan",
//   "halal",
//   "kosher",
//   "seafood",
//   "bbq",
//   "burgers",
//   "drinks",
//   "more",
//   "desserts",
// ],
// required: true,

const getCategoryEnum = () => {
  return restaurantSchema.path("category").enum;
};

module.exports = mongoose.model("Item", restaurantSchema);

module.exports = {
  getCategoryEnum
};
