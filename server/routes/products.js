const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get product by barcode
router.get('/:barcode', async (req, res) => {
  try {
    const product = await Product.findOne({ barcode: req.params.barcode });
    res.json(product || { error: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;