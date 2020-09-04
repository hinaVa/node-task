const mongoose = require('mongoose');
const messages = require('../common/messages');

const schema = new mongoose.Schema({
  orderId: {
    type: String,
    required: [true, messages.ORDER_ID_REQUIRED]
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Driver',
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
  },
  rating: {
    type: Number,
    required: true
  },
  review: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Rating', schema);
