const itemDal = require('../dal/item-dal');

const addItem = async (payload) => await itemDal.addItem(payload);

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