const productLogic = require('../logic/product-logic');

const getAllProducts = async (req, res) => {
    try {
        const successfulGetAllProducts = await productLogic.getAllProducts()
        res.json(successfulGetAllProducts);
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const addProduct = async (req, res) => {
    const payload = req.body;
    payload.token = req.headers.authorization;
    
    try {
        await productLogic.addProduct(payload);
        res.json({ error: false, msg: "successful added product" });
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

const updateProduct = async (req, res) => {
    const payload = req.body;
    payload.token = req.headers.authorization;
    
    try {
        await productLogic.updateProduct(payload);
        res.json({ error: false, msg: "successful update product" });
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct
}
