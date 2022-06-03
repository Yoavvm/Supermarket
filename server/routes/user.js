const userController = require('../controllers/user-controller');

const router = require('express').Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.addNewUser);
router.post('/login', userController.login);

module.exports = router;