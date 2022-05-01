const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  u_id: { type: String },
  grade: { type: String },
  Enroll_subjects: [{ subject: { type: String } }],
  NameOfTrustee: { type: String },
  NIC_TRUST: { type: String },
  TP: { type: Number },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
