const User = require("../models/User");

module.exports = {
  addUser: async (req, res) => {
    console.log("hello");
    console.log(req.body);
    try {
      var newUser = new User({
        //t_id: mongoose.Schema.Types.ObjectId(),

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: "Admin",
      });

      newUser.save((err) => {
        if (!err) {
          res.json({ success: true, message: "new user saved" });
        } else {
          res.json({ success: false, message: "not save,error occured" });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
