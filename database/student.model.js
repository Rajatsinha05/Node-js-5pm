const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  number: Number,
  course: String,
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student
