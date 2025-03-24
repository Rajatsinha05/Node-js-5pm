const Product = require("../models/product");
const User = require("../models/user");

const createUser = async (req, res) => {
  let user = await User.create(req.body);
  return res.send(user);
};

const getAllUsers = async (req, res) => {
  let users = await User.findAll({
    include: [{ model: Product }],
  });
  res.send(users);
};

const deleteUserById = async (req, res) => {
  let { id } = req.params;
  let user = await User.findByPk(id);
  await user.destroy();
  res.send(user);
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  let user = await User.findByPk(id);
  await user.update(req.body);
  res.send(user);
};
module.exports = { createUser, getAllUsers, deleteUserById, updateUserById };
