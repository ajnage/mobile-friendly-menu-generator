const mongoose = require("mongoose");

const clickStatsSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  clicks: {
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

module.exports = mongoose.model("ClickStats", clickStatsSchema);
