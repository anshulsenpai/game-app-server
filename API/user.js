const router = require("express").Router();
const { getUsers, findUser, deleteUser, updateUser } = require("../controllers/userController");
const hashPass = require("../middlewares/hashPass");
const { verifyAdmin, verifyToken } = require("../middlewares/verifyUser");

// GET ALL USERS
router.get('/', verifyAdmin ,getUsers)

// FIND USER
router.get('/find/:id', verifyAdmin, findUser)

// DELETE USER
router.delete('/delete/:id', verifyToken, deleteUser)

// UPDATE USER
router.put('/update/:id', verifyToken, hashPass, updateUser)

module.exports = router