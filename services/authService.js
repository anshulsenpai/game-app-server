const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, phoneNo, address, password } = req.body;
    const user = await new User({
      name,
      email,
      phoneNo,
      address,
      password,
    }).save();

    return { status: 200, data: user };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(500).json({ message: "Invalid input" });

    // Compare hashed password with provided password
    const checkPass = await bcrypt.compare(req.body.password, user.password);
    !checkPass && res.status(500).json({ message: "Invalid input" });

    // Create token for every new login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC_KEY, {
      expiresIn: "15d",
    });
    const { password, ...other } = user._doc;
    return { status: 200, data: { ...other, token } };
  } catch (error) {
    return { status: 500, error: error.message };
  }
};

module.exports = { registerUser, loginUser };
