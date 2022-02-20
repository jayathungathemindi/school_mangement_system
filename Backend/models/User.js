const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  u_id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
