const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  u_id: { type: String },
  grades: [{ grade: { type: String } }],
  NIC: { type: String },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
