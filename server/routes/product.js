const productController = require('../controllers/product-controller');

const router = require('express').Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.patch('/', productController.updateProduct);

module.exports = router;