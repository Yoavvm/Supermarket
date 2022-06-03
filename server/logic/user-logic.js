const userDal = require('../dal/user-dal');
const jwtUtils = require('../utils/jwt-util');

const getAllUsers = async () => {
    const successfulGetAllUsers = await userDal.getAllUsers();
    return successfulGetAllUsers;
}

const addNewUser = async (payload) => {
    payload.encrpytedPassword = jwtUtils.encryptPassword(payload.password);
    await userDal.addNewUser(payload)
}

const login = async (payload) => {
    payload.encrpytedPassword = jwtUtils.encryptPassword(payload.password);
    const succesfulLoginData = await userDal.login(payload);
    succesfulLoginData.token = jwtUtils.generateToken(succesfulLoginData);
    return succesfulLoginData;
}

module.exports = {
    getAllUsers,
    addNewUser,
    login
}