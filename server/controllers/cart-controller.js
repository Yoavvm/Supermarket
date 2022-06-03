const cartLogic = require('../logic/cart-logic');

const getCartByUserId = async (req, res) => {
    try {
        const cart = await cartLogic.getCartByUserId(req.headers.authorization);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const createCart = async (req, res) => {
    try {
        const cartId = await cartLogic.createCart(req.headers.authorization);
        res.json(cartId);    
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}


module.exports = {
    getCartByUserId,
    createCart
}