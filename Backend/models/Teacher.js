const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  grades: [{ grade: { type: String } }],
  Nic: { type: String },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
