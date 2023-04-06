const {
  getAllUsers,
  findUserService,
  deleteUserService,
  updateUserService,
} = require("../services/userService");

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(users.status).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findUser = async (req, res, next) => {
  try {
    const user = await findUserService(req, res);
    res.status(user.status).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const response = await deleteUserService(req, res);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await updateUserService(req, res);
    res.status(updatedUser.status).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getUsers, findUser, deleteUser, updateUser };
