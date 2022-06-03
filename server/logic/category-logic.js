const categoryDal = require('../dal/category-dal');

const getAllCategories = async () => {
    const successfulGetAllCategories = await categoryDal.getAllCategories();
    return successfulGetAllCategories;
}

module.exports = {
    getAllCategories
}