const express = require("express");
const db = require("./config/db");
const {
  createUser,
  getAllUsers,
  deleteUserById,
  updateUserById,
} = require("./controller/user");
const { createProduct, getProducts } = require("./controller/product");
const app = express();
app.use(express.json());

(async () => {
  try {
    await db.authenticate();
    console.log("authenticated successfully");
    await db.sync();
    console.log("sync successfully");
  } catch (error) {
    console.log("error: " + error);
  }
})();

app.post("/", createUser);
app.get("/", getAllUsers);
app.delete("/:id", deleteUserById);
app.put("/:id", updateUserById);

// product
app.post("/product", createProduct);
app.get("/product", getProducts);
app.listen(8090, () => {
  console.log("listening on port 8090");
});
