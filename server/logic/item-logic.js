const itemDal = require('../dal/item-dal');

const addItem = async (payload) => {
    const isItemInCart = await itemDal.findItemInCart(payload);
    (isItemInCart) ? await updateItem(payload) : await itemDal.addItem(payload);

    const cart = await getItemsByCartId(payload.cartId)
    return cart;
}

const getItemsByCartId = async (cartId) => {
    const cart = await itemDal.getItemsByCartId(cartId);
    return cart;
}

const updateItem = async (payload) => await itemDal.updateItem(payload);

const deleteItem = async (payload) => await itemDal.deleteItem(payload);

module.exports = {
    addItem,
    getItemsByCartId,
    updateItem,
    deleteItem
}