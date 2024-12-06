const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUser = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findById(userId);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndDelete(userId);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserById,
};
