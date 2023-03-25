const mongoose = require("mongoose");
const Item = require("./Item");

const SubCategorySchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true,
  },
  subCategoryName: {
    type: String,
    require: true,
  },
  subCategoryDescription: {
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
  items: [Item]
});

module.exports = SubCategorySchema;
