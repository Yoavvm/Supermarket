const cartController = require('../controllers/cart-controller');

const router = require('express').Router();

router.get('/', cartController.getCartByUserId);
router.post('/', cartController.createCart);

module.exports = router;