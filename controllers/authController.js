const User = require("../models/User");
const { registerUser, loginUser } = require("../services/authService");

const register = async (req, res, next) => {
  // Checking if User alreay registered
  const checkEmail = await User.findOne({ email: req.body.email });
  const checkPhoneNo = await User.findOne({ phoneNo: req.body.phoneNo });

  if (!checkEmail && !checkPhoneNo) {
    try {
      const result = await registerUser(req, res);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json({ status: 500, message: "User alreay exist" });
  }
};

const login = async (req, res, next) => {
  try {
    const user = await loginUser(req, res);
    res.status(user.status).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, login };
