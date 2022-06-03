const userLogic = require('../logic/user-logic');

const getAllUsers = async (req, res) => {
    try {
         const successfulGetAllUsers = await userLogic.getAllUsers()        
        res.json(successfulGetAllUsers);
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });   
    }
}

const addNewUser = async (req, res) => {
    try {
        await userLogic.addNewUser(req.body)
        res.send({error: false, msg: 'User saved'})                
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });
    }
}

const login = async (req, res) => {
    try {
        const user = await userLogic.login(req.body);
        res.send(user)
    } catch (error) {
        res.status(500).json({ error, msg: "Login failed" });
    }
}

module.exports = {
    getAllUsers,
    addNewUser,
    login
}
