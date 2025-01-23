const { Router } = require("express");
const foodController = require("../controller/food");
const isToken = require("../middleware/jwt-decode");
const isAdmin = require("../middleware/authRole");

const routes = Router();
routes.post("/create", isAdmin, foodController.create);
routes.get("/", foodController.getAll);
routes.get("/:foodId", foodController.getById);
routes.get("/user/:userId", foodController.getAllByUserId);
routes.patch("/:foodId", isAdmin, foodController.update);
routes.delete("/:foodId", isAdmin, foodController.delete);
module.exports = routes;
