const mongoose = require("mongoose");
const SubCategory = require("./SubCategory");

const CategorySchema = new mongoose.Schema({
  categorySequence: {
    type: Number,
    required: true,
  },
  categoryName: {
    type: String,
    require: true,
  },
  categoryDescription: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subCategories: [SubCategory]
});

module.exports = CategorySchema;
