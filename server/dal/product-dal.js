const { Product, Category } = require('../db/models');

const getAllProducts = async () => {
    // const successfulGetAllProducts = await Product.find({}, {lookup: {from: Category,  pipeline: [ categoryName ]}});
    const successfulGetAllProducts = await Product.find();
    return successfulGetAllProducts;
}

const addProduct = async (payload) => {
    const product = await Product(payload);
    await product.save();
}

const updateProduct = async (payload) => { 
    console.log(payload);
    const product = await Product.findByIdAndUpdate(payload._id, {$set: {productName: payload.productName}});
    await product.save();
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct
}