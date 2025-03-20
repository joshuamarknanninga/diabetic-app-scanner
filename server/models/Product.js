const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  barcode: { type: String, unique: true },
  name: String,
  carbsPerServing: Number,
  servingSize: String
});

module.exports = mongoose.model('Product', productSchema);