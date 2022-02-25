const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
process.env.SECRET_KEY = "secret";

module.exports = {
  addStudent: async (req, res) => {
    console.log(req.body.date);
    var userData = new User({
      //t_id: mongoose.Schema.Types.ObjectId(),
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: "Student",
      date: req.body.date,
    });

    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          res.json({
            success: false,
            message: "*** A Student already registered for this email ***",
          });
        } else {
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          console.log(userData);
          userData.save((err, doc) => {
            if (!err) {
              res.json({
                success: true,
                message: "Student registered successfully",
              });
            } else {
              res.json({
                success: false,
                message: "*** Student register failed ***",
              });
            }
          });
        }
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "*** Student register failed ***",
        });
      });
  },
  addTeacher: async (req, res) => {
    var userData = new User({
      //t_id: mongoose.Schema.Types.ObjectId(),
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: "Teacher",
      date: req.body.date,
    });

    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          res.json({
            success: false,
            message: "*** A Teacher already registered for this email ***",
          });
        } else {
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          console.log(userData);
          userData.save((err, doc) => {
            if (!err) {
              res.json({
                success: true,
                message: "Teacher registered successfully",
              });
            } else {
              res.json({
                success: false,
                message: "*** Teacher register failed ***",
              });
            }
          });
        }
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "*** Teacher register failed ***",
        });
      });
  },
  addAdmin: async (req, res) => {
    var userData = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: "Admin",
      date: req.body.date,
    });

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
    User.findOne({ email: req.body.email })
      .exec()
      .then((user) => {
        console.log(user);
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            console.log(result);
            // console.log(user[0]);
            // console.log(user[0]._id);
            const token = jwt.sign(
              {
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                email: user.email,
                userId: user._id,
              },
              process.env.SECRET_KEY,
              {
                expiresIn: "1h",
              }
            );

            return res.status(200).json({
              message: "Auth successful",
              token: token,
              user: user,
            });
          } else {
            return res.status(401).json({
              message: "Auth failed",
            });
          }
        });
      });
  },

  getById: async (req, res) => {
    try {
      User.findOne({ _id: req.params.userId })
        .exec()
        .then((user) => {
          console.log(user);
          return res.status(200).json({
            message: "User find",
            user: user,
          });
        });
    } catch (error) {
      res.json({
        success: false,
        message: "*** Error occurd can not find a user  ***",
      });
    }
  },
  editProfile: async (req, res) => {
    try {
      console.log(req.body);
      console.log("id" + req.params);
      User.findOne({ _id: req.params.userId })
        .exec()
        .then((user) => {
          user._id = req.params.userId;
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName;
          user.email = req.body.email;
          user.password = req.body.password;
          user.role = req.body.role;
          const hash = bcrypt.hashSync(user.password, 10);
          user.password = hash;
          user.save((err) => {
            if (!err) {
              res.json({
                success: true,
                message: "User Updated ",
              });
            }
          });
        });
    } catch (error) {
      res.json({
        success: false,
        message: "*** Error occurd can not find a user  ***",
      });
    }
  },
  getByRole: async (req, res) => {
    try {
      User.findOne({ role: req.params.role })
        .exec()
        .then((user) => {
          console.log(user);
          return res.status(200).json({
            message: "User find",
            user: user,
          });
        });
    } catch (error) {
      res.json({
        success: false,
        message: "*** Error occurd can not find a user  ***",
      });
    }
  },
};
