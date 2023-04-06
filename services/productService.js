const Product = require("../models/Product");

// Get all products
const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return { status: 200, data: products };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

// Post product
const postProductService = async (req, res) => {
  const { image, title, desc, price, category } = req.body;
  try {
    const product = new Product({
      image: `${process.env.BASE_URL}/images/${image}`, //setting BASE URL followed by image name
      title: title,
      desc: desc,
      price: price,
      category: category,
    });
    const savedProduct = await product.save();
    return { status: 201, data: savedProduct };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const findProductService = async (req, res) => {
  const id = req.params.id;
  if(!id) return { status: 500, message: "Invalid ID" }
  try {
    const product = await Product.findById(id);
    if(!product) return { status: 500, message: "Product not found" }
    return { status: 200, data: product };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const deleteProductService = async (req, res) => {
  const id = req.params.id;
  if(!id) return { status: 500, message: "Invalid ID" }
  try {
    const product = await Product.findByIdAndDelete(id);
    if(!product) return { status: 500, message: "Product not found" }
    return { status: 200, data: "Product deleted" };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = {
  getAllProducts,
  postProductService,
  findProductService,
  deleteProductService,
};
