const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  try {
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const verifiedUser = await jwt.verify(token, process.env.JWT_SEC_KEY);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// verify admin
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    try {
      const user = await User.findById(req.user.id);
      if (user.isAdmin) {
        next();
      } else {
        res.status(401).json({ message: "Forbidden" });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
};

module.exports = { verifyToken, verifyAdmin };
