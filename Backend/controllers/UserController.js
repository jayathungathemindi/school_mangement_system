const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
process.env.SECRET_KEY = "secret";

module.exports = {
  addUser: async (req, res) => {
    console.log(req.body);

    var userData = new User({
      //t_id: mongoose.Schema.Types.ObjectId(),
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          res.json({
            success: false,
            message: "*** A Client already registered for this email ***",
          });
        } else {
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;

          userData.save((err, doc) => {
            if (!err) {
              res.json({
                success: true,
                message: "Client registered successfully",
              });
            } else {
              res.json({
                success: false,
                message: "*** Client register failed ***",
              });
            }
          });
        }
      })
      .catch((err) => {
        res.json({ success: false, message: "*** Client register failed ***" });
      });
  },

  addAdmin: async (req, res) => {
    console.log("61 " + req.body.firstName);
    var userData = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    console.log("70 " + userData);

    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          res.json({
            success: false,
            message: "*** An Admin already registered for this email ***",
          });
        } else {
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;

          userData.save((err, doc) => {
            if (!err) {
              res.json({
                success: true,
                message: "Admin registered successfully ",
              });
            } else {
              console.log("Error is :" + err);
              res.json({
                success: false,
                message: "*** Admin register failed ***",
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error is :" + err);
        res.json({ success: false, message: "*** Admin register failed ***" });
      });
  },

  deleteAdmin: async (req, res) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then((result) => {
        res.status(200).json({
          message: "User deleted",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  },
  login: async (req, res) => {
    console.log(req.body);
    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed",
            });
          }
          if (result) {
            // console.log(user[0]);
            // console.log(user[0]._id);
            const token = jwt.sign(
              {
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                role: user[0].role,
                email: user[0].email,
                userId: user[0]._id,
              },
              process.env.SECRET_KEY,
              {
                expiresIn: "1h",
              }
            );

            return res.status(200).json({
              message: "Auth successful",
              token: token,
            });
          }
        });
      });
  },
};
