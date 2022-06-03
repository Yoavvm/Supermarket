const { User } = require('../db/models');

const getAllUsers = async () => {
    const successfulGetAllUsers = await User.find();
    return successfulGetAllUsers;
}

const addNewUser = async (payload) => {
    const user = await User(payload);
    await user.save();
}

const login = async (payload) => {
    const succesfulLogin = await User.findOne({userId: payload.userId, encrpytedPassword: payload.encrpytedPassword}, {encrpytedPassword: 0, _id: 0, __v: 0 });
    return succesfulLogin;
}


module.exports = {
    getAllUsers,
    addNewUser,
    login,
}