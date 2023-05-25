const mongoose = require("mongoose");

const orderStatsSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  orders: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

module.exports = mongoose.model("OrderStats", orderStatsSchema);
