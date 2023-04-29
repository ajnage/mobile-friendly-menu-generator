const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true,
  },
  restaurantName: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('restaurant', ItemSchema);
