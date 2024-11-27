const express = require("express");
const DB = require("./db");
const Student = require("./student.model");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the world  with the node app!");
});

// students
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.send(data);
});
app.get("/student/:id", async (req, res) => {
  let { id } = req.params;
  const data = await Student.findById(id);
  res.send(data);
});

app.post("/student", async (req, res) => {
  let data = await Student.create(req.body);
  res.send(data);
});
app.patch("/student/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Student.findByIdAndUpdate(id, req.body,{new: true});
  res.send(data);
});
app.delete("/student/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Student.findByIdAndDelete(id);
  res.send(data);
});
app.listen(8090, () => {
  console.log("listening on http://localhost:8090");
  DB();
});
