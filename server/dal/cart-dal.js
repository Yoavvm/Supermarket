const { Cart, Item } = require('../db/models');

const getCartByUserId = async (userId) => {
    let [cart] = await Cart.find({userId , isComplete: false })
    if(!cart) {
        await createCart(userId);
        [cart] = await Cart.find({userId , isComplete: false })
    }
    const cartItems = await Item.find({ cart: cart._id});
    return {cartItems, cart};
}

const createCart = async (userId) => {
    const newCart = await Cart({userId});
    await newCart.save()

    return newCart._id;
}

module.exports = {
    getCartByUserId,
    createCart
}