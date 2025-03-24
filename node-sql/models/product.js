const { STRING, NUMBER, INTEGER } = require("sequelize");
const db = require("../config/db");
const { ulid } = require("ulid");
const User = require("./user");

const Product = db.define("product", {
  id: { type: STRING, defaultValue: () => ulid(), primaryKey: true },
  title: STRING,
  price: INTEGER,
});

User.hasMany(Product);
Product.belongsTo(User);
module.exports = Product;
