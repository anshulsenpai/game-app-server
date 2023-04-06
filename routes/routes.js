const router = require("express").Router()
const authRoute = require("../API/auth")
const productsRoute = require("../API/products")
const userRoute = require("../API/user")



router.use('/auth', authRoute)
router.use('/user', userRoute)
router.use('/product', productsRoute)

module.exports = router