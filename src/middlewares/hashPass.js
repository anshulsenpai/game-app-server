const bycrypt = require("bcryptjs");

const hashPass = async (req, res, next) => {
  
  try {
    const password = req.body.password;
    if (password) {
      const salt = await bycrypt.genSalt(12);
      const hashedPass = await bycrypt.hash(password, salt);
      req.body.password = hashedPass;
      next();
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = hashPass