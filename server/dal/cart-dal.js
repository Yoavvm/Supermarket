const { Cart } = require('../db/models');

const getCartByUserId = async (id) => {
    const cart = await Cart.find({ userId: id });
    return cart;
}

const createCart = async (id) => {
    const newCart = await Cart({id});
    await newCart.save()

    return newCart._id;
}

module.exports = {
    getCartByUserId,
    createCart
}