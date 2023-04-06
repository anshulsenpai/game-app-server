const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const hashPass = require("../middlewares/hashPass");

// Register 
router.post("/register", hashPass, register);

// Login
router.post("/login", login);

module.exports = router;
