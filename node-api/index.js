const express = require("express");
const axios = require("axios");
const cache = require("./config/lru");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the app!");
});
app.get("/api", async (req, res) => {
  if (cache.has("data")) {
    return res.send({ data: cache.get("data"), LRU: "LRU" });
  }
  
  let pro = await axios.get("https://fakestoreapi.com/products");
  cache.set("data", pro.data);

  res.send({ data: pro.data });
});
app.listen(8090, () => {
  console.log("listening on port 8090");
});
