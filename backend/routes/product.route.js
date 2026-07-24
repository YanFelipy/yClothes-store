const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authGuard } = require('../middlewares/authGuard');


router.post('/', authGuard, productController.createProduct);
router.get('/',  productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.delete('/:id', authGuard, productController.deleteProduct);

module.exports = router;