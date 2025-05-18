const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.get('/products', ProductController.products);

router.get('/productsByCategory', ProductController.productsOfCategory);

router.put('/favProduct', ProductController.setFav);

router.put('/resetFavProduct', ProductController.resetFav);

module.exports = router;