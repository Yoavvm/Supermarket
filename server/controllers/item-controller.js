const itemLogic = require('../logic/item-logic');

const addItem = async (req, res) => {
    try {
        await itemLogic.addItem(req.body);
        res.json({ error: false, msg:'successful added item' });
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const getItemsByCartId = async (req, res) => {
    try {
        const cart = await itemLogic.getItemsByCartId(req.params.cartId);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const updateItem = async (req, res) => {
    try {
        await itemLogic.updateItem(req.body);
        res.json({ error: false, msg:'successful update item' });
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const deleteItem = async (req, res) => {
    try {
        await itemLogic.deleteItem(req.body);
        res.json({ error:false, msg: 'successful deleted item'})
    } catch (error) {
        res.status(500).json({ error, msg: error.message });  
    }
}

module.exports = {
    addItem,
    getItemsByCartId,
    updateItem,
    deleteItem
}