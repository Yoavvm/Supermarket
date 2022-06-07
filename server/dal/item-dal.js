const { Item } = require('../db/models');

const addItem = async (payload) => {
    const newItem = await Item(payload);
    await newItem.save();
}
const getItemsByCartId = async (cartId) => {
    const cart = await Item.find({ cartId });
    return cart;
}

const updateItem = async (payload) => {
    const { quantity, productId, cartId } = payload

    if (quantity) {
        await Item.findOneAndUpdate({ productId, cartId }, { quantity });
        return
    }
    
    await Item.findOneAndRemove({ productId, cartId });
}

const deleteItem = async (payload) => {
    await Item.findOneAndRemove({ productId: payload.productId, cartId: payload.cartId })
}

const findItemInCart = async (payload) => {
    const {productId, cartId} = payload;

    const [isItemExist] = await Item.find({productId, cartId});
    return !!isItemExist;
}

module.exports = {
    addItem,
    getItemsByCartId,
    updateItem,
    deleteItem,
    findItemInCart,
}