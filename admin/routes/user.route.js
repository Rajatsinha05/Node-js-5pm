const { Router } = require("express");
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const userRouter = Router();
userRouter.get("/", getUser);
userRouter.get("/:userId", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
