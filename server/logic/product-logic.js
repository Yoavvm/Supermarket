const productDal = require('../dal/product-dal');
const jwtUtils = require('../utils/jwt-util');

const getAllProducts = async () => {
    const successfulGetAllProducts = await productDal.getAllProducts();
    return successfulGetAllProducts;
}

const addProduct = async (payload) => {
    if (!jwtUtils.verifyPermission(payload.token)) {
        throw new Error('Unauthorized action')
    }
    await productDal.addProduct(payload);
}

const updateProduct = async (payload) => {
    if (!jwtUtils.verifyPermission(payload.token)) {
        throw new Error('Unauthorized action')
    }
    await productDal.updateProduct(payload);
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct
}
