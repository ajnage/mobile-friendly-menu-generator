const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({

  //restaurant id is automatically generated

   restaurantName: {
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

module.exports = mongoose.model("Restaurant", ItemSchema);
