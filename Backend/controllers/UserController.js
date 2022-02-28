const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
process.env.SECRET_KEY = "secret";

module.exports = {
  addStudent: async (req, res) => {
    console.log(req.body);
    var userData = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: "Student",
      date: req.body.date,
      userName: req.body.userName,
      address: req.body.address,
      gender: req.body.gender,
    });

    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          res.json({
            success: false,
            message: "*** A User already registered for this email ***",
          });
        } else {
          const hash = bcrypt.hashSync(userData.password, 10);
          userData.password = hash;
          userData.save((err, doc) => {
            if (!err) {
              var student = new Student({
                _id: userData._id,
                grade: req.body.grade,
                NameOfTrustee: req.body.trust,
                Nic_Trust: req.body.nic,
                TP: req.body.telephone,
              });
              student.save((err, doc) => {
                if (!err) {
                  // res.json({
                  //   success: true,
                  // });
                } else {
                  // res.json({
                  //   success: false,
                  // });
                }
              });
              res.json({
                success: true,
                message: "User registered successfully",
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
          err: err,
        });
      });
  },
  addTeacher: async (req, res) => {
    console.log(req.body);
    var userData = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: "Teacher",
      date: req.body.date,
      userName: req.body.userName,
      address: req.body.address,
      gender: req.body.gender,
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

          userData.save((err, doc) => {
            if (!err) {
              const myArray = new Array({});
              let j = req.body.grade.length;
              console.log(j);

              for (let i = 0; i < j; i++) {
                (grade = req.body.grade[i]), (myArray[i] = { grade });
                console.log(myArray);
              }
              var teacher = new Teacher({
                _id: userData._id,
                Nic: req.body.nic,
                grades: myArray,
              });
              teacher.save((err, doc) => {
                if (!err) {
                  // res.json({
                  //   success: true,
                  // });
                } else {
                  // res.json({
                  //   success: false,
                  //   err: err,
                  // });
                }
              });
              res.json({
                success: true,
                message: "Teacher registered successfully",
              });
            } else {
              res.json({
                success: false,
                message: "*** Teacher register failed ***",
                err: err,
              });
            }
          });
        }
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "*** Teacher register failed ***",
          err: err,
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
      userName: req.body.userName,
      address: req.body.address,
      gender: req.body.gender,
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
              res.json({
                success: false,
                message: "*** Admin register failed ***",
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
    User.findOne({ userName: req.body.userName })
      .exec()
      .then((user) => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            // console.log(user[0]);
            // console.log(user[0]._id);
            const token = jwt.sign(
              {
                firstName: user.firstName,
                role: user.role,
                email: user.email,
                userId: user._id,
                userName: user.userName,
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

          switch (user.role) {
            case "Admin": {
              return res.status(200).json({
                message: "User find",
                user: user,
              });
            }
            case "Student": {
              Student.findOne({ _id: user._id })
                .exec()
                .then((student) => {
                  console.log(student);
                  return res.status(200).json({
                    message: "User find",
                    user: user,
                    student: student,
                  });
                });
              break;
            }

            case "Teacher": {
              Teacher.findOne({ _id: user._id })
                .exec()
                .then((teacher) => {
                  console.log(teacher);
                  return res.status(200).json({
                    message: "User find",
                    user: user,
                    teacher: teacher,
                  });
                });
              break;
            }
            default: {
              break;
            }
          }
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

          switch (user.role) {
            case "Admin": {
              break;
            }
            case "Student": {
              Student.findOne({ _id: user._id })
                .exec()
                .then((student) => {
                  student.class = req.body.class;
                  student.save((err) => {
                    if (!err) {
                      res.json({
                        success: true,
                        message: "Student Updated ",
                      });
                    }
                  });
                });
              break;
            }
            case "Teacher": {
              Teacher.findOne({ _id: user._id })
                .exec()
                .then((teacher) => {
                  teacher.class = req.body.class;
                  teacher.save((err) => {
                    if (!err) {
                      res.json({
                        success: true,
                        message: "Student Updated ",
                      });
                    }
                  });
                });
              break;
            }

            default: {
              break;
            }
          }
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
