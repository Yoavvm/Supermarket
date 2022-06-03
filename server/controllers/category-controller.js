const categoryLogic = require('../logic/category-logic');

const getAllCategories = async (req, res) => {
    try {
        const successfulGetAllCategories = await categoryLogic.getAllCategories()
        res.json(successfulGetAllCategories);
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });
    }
}

module.exports = {
    getAllCategories
}
