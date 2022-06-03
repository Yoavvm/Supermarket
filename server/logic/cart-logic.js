const cartDal = require('../dal/cart-dal');
const jwtUtils = require('../utils/jwt-util');

const getCartByUserId = async (token) => {
    const decoded = jwtUtils.decodeToken(token);
    const cart = await cartDal.getCartByUserId(decoded.userId);
    return cart;
}

const createCart = async (token) => {
    const decoded = jwtUtils.decodeToken(token)
    const cartId = await cartDal.createCart(decoded.userId);
    return cartId;
}

module.exports = {
    getCartByUserId,
    createCart
}