const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

  //category ID is automatically generated

  categoryName: {
    type: String,
    require: true,
  },
  categorySequence: {
    type: Number,
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
