const { Item } = require('../db/models');

const addItem = async (payload) => {
    const newItem = await Item(payload);
    await newItem.save()
}
const getItemsByCartId = async (cartId) => {
    const cart = await Item.find({cartId: cartId});
    return cart;
}

const updateItem = async (payload) => {
    await Item.findOneAndUpdate({ productId: payload.productId, cartId: payload.cartId }, { quantity: payload.quantity} )
}

const deleteItem = async (payload) => {
    await Item.findOneAndRemove({ productId: payload.productId, cartId: payload.cartId})
}

module.exports = {
    addItem,
    getItemsByCartId,
    updateItem,
    deleteItem,
}