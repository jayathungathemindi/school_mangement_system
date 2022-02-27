const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  grade: { type: String },
  NameOfTrustee: { type: String },
  Nic_Trust: { typeof: String },
  TP: { type: Number },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
