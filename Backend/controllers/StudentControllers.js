const User = require("../models/User");
const Student = require("../models/Student");
const mongoose = require("mongoose");

module.exports = {
  getByGrade: async (req, res) => {
    try {
      // console.log(req.params);
      const dataArr = new Array();
      Student.find({ grade: req.params.grade }) //studenttable.find({grade:req.body.grade}).exec().then((students)=>{console.log(students)})//=--->for()-->one by one run student-->user table ekatag ghn -->user id parameter-->
        .exec()
        .then((students) => {
          // console.log(students);

          students.map(async (student) => {
            dataArr.push(student.u_id);
            // console.log(dataArr)
          });

          User.find({ _id: { $in: dataArr } })
            .exec()
            .then((users) => {
              // console.log(students);
              return res.json({
                success: true,
                users: users,
                students: students,
              });
            });
        });
    } catch (error) {
      res.json({
        success: false,
        message: "*** Error occurd can not find a user  ***",
      });
    }
  },

  enroll: async (req, res) => {
    try {
      Student.findOne({ u_id: req.body.UserID })
        .exec()
        .then((student) => {
          var j = 0;
          for (let i = 0; i <= student.Enroll_subjects.length; i++) {
            j = i;
          }

          student.Enroll_subjects[j] = { subject: req.body.Subject };
          student.save((err) => {
            console.log(student);
            if (!err) {
              res.json({
                success: true,
                message: "Student Updated ",
              });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  },
  getStudentCount: async (req, res) => {
    try {
      Student.countDocuments().then((count) => {
        res.json({
          successs: true,
          count: count,
        });
      });
    } catch (error) {
      res.json({
        successs: false,
        message: "faile",
      });
    }
  },
};
