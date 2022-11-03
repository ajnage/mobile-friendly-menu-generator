const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  sequence: {
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
});

module.exports = mongoose.model("Category", CategorySchema);
