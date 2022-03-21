const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  u_id: { type: String },
  grades: [{ grade: { type: String } }],
  NIC: { type: String },
  tp:{type:Number}
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
