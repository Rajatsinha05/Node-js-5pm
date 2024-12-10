const express = require("express");
const path = require("path");
const upload = require("./utils/uplaod");
const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.post("/", upload.array("img", 5), (req, res) => {
  console.log(req.files);

  res.send("uploaded image");
});

app.listen(8090, () => {
  console.log("listening on port 8090");
});
