const { Model } = require("sequelize");
const Product = require("../models/product");
const User = require("../models/user");

const createProduct = async (req, res) => {
  let product = await Product.create(req.body);
  // console.log("Product created", product);
  res.send(product);
};

const getProducts = async (req, res) => {
  let products = await Product.findAll({
    include: [{ model: User, attributes: ["username", "email", "id"] }],
  });
  res.send(products);
};
module.exports = { createProduct, getProducts };
