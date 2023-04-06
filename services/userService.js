const User = require("../models/User");

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return { status: 200, data: users };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const findUserService = async (req, res) => {
  const id = req.params.id;
  if (!id) return { status: 500, message: "Invalid ID" };
  try {
    const user = await User.findById(id);
    if (!user) {
      return { status: 500, message: "User not found" };
    } else return { status: 200, data: user._doc };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const deleteUserService = async (req, res) => {
  if (req.param.id) return { status: 500, message: "Invalid ID" };
  try {
    await User.findByIdAndDelete(req.params.id);
    return { status: 200, data: "User has been deleted" };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const updateUserService = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return { status: 200, data: updatedUser };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = { getAllUsers, findUserService, deleteUserService, updateUserService};
