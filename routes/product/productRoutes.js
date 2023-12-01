
const express = require('express');
const router = express.Router();

const productController = require('../../Controllers/product/productController');

router.get('/', productController.getAllProducts);

router.get('/total-product/', productController.getTotalProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);


module.exports = router;
