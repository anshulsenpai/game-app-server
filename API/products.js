const router = require("express").Router();
const {
  getProducts,
  postProduct,
  findProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middlewares/upload");
const { verifyAdmin } = require("../middlewares/verifyUser");

// GET ALL PRODUCTS
router.get("/get", getProducts);

// POST PRODUCT
router.post("/post", upload, postProduct);

// FIND PRODUCT
router.get('/find/:id', findProduct)

// DELETE PRODUCT
router.delete('/delete/:id', deleteProduct)

module.exports = router;
