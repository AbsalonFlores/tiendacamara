const express = require('express');
const router = express.Router();
const { getProducts, addProduct, updateProduct, deleteProduct, searchProducts } = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProducts);

module.exports = router;
