const mongoose = require("mongoose");
const Category = require("./Category");

const RestaurantSchema = new mongoose.Schema({
  restaurantId: {
    type: Number,
    required: true
  },
  restaurantName: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  categories: [Category]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
