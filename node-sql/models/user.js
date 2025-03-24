const { STRING } = require("sequelize");
const db = require("../config/db");
const { ulid } = require("ulid");

const User = db.define("user", {
  id: { type: STRING, primaryKey: true, defaultValue: () => ulid() },
  username: STRING,
  email: { type: STRING },
  password: { type: STRING },
});
module.exports = User;
