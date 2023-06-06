const mongoose = require("mongoose");

const revenueStatsSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  revenue: {
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

module.exports = mongoose.model("RevenueStats", revenueStatsSchema);
