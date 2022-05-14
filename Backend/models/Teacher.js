const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  u_id: { type: String },
  grades: [{ grade: { type: Number } }],
  NIC: { type: String },
  subject: { type: String },
  tp: { type: Number },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
