const itemController = require('../controllers/item-controller');

const router = require('express').Router();

router.post('/', itemController.addItem);
router.get('/:cartId', itemController.getItemsByCartId);
router.delete('/', itemController.deleteItem);
router.patch('/', itemController.updateItem);

module.exports = router;