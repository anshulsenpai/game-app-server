const {
  getAllProducts,
  postProductService,
  findProductService,
  deleteProductService,
} = require("../services/productService");

// GET ALL PRODUCTS
const getProducts = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(products.status).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST PRODUCT
const postProduct = async (req, res, next) => {
  try {
    const product = await postProductService(req, res);
    res.status(product.status).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// FIND PRODUCT
const findProduct = async (req, res, next) => {
  try {
    const product = await findProductService(req, res);
    res.status(product.status).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res, next) => {
  try {
    const response = await deleteProductService(req, res);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getProducts, postProduct, findProduct, deleteProduct };
