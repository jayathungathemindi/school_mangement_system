const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Quiz = require("../models/Quiz");
const Student = require("../models/Student");
const mongoose = require("mongoose");

module.exports = {
  addQuiz: async (req, res) => {
    // console.log(req.body);
    try {
      var Teacher_Data = null;
      await Teacher.findOne({ u_id: req.body.UserID })
        .exec()
        .then((teacher) => {
          Teacher_Data = teacher;
          // console.log(teacher);
        });
      let j = req.body.quiz.length;
      const myArray = new Array({});

      for (let i = 0; i < j; i++) {
        myArray[i] = req.body.quiz[i];
      }
      // console.log(myArray);
      var quiz = await new Quiz({
        _id: new mongoose.Types.ObjectId(),
        t_id: req.body.UserID,
        quizName: req.body.quizName,

        grade: req.body.grade,
        subject: Teacher_Data.subject,
        questions: myArray,
        date: new Date(),
      });
      // console.log(myArray);
      quiz.save((err, doc) => {
        if (!err) {
          res.json({
            success: true,
            message: "AQuiz Added ",
          });
        } else {
          console.log(err);
          res.json({
            success: false,
            message: "***  failed ***",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  getQuiz: async (req, res) => {
    try {
      var userData = [];
      console.log(req.params);
      await Student.findOne({ u_id: req.params.id })
        .exec()
        .then((student) => {
          userData = student;
        });

      await Quiz.find({
        subject: req.params.subject,
        grade: userData.grade,
      })
        .exec()
        .then((quiz) => {
          res.json({
            successs: true,
            message: "sucess",
            quiz: quiz,
          });
        });
    } catch (error) {
      res.json({
        successs: false,
        message: "faile",
      });
    }
  },
  // getNotification: async (req, res) => {
  //   try {
  //     var userData = [];
  //     var count;
  //     console.log(req.params);
  //     await Student.findOne({ u_id: req.params.id })
  //       .exec()
  //       .then((student) => {
  //         userData = student;
  //       });

  //     await Quiz.find({
  //       grade: userData.grade,
  //     })
  //       .exec()
  //       .then((quiz) => {

  //         res.json({
  //           successs: true,
  //           message: "sucess",
  //           quiz: quiz,
  //         });
  //       });
  //   // await  Quiz.countDocuments({
  //   //     grade: userData.grade,
  //   //   }).then((count) => {
  //   //     res.json({
  //   //       successs: true,
  //   //       count: count,
  //   //     });
  //   //   });
  //   } catch (error) {
  //     res.json({
  //       successs: false,
  //       message: "faile",
  //     });
  //   }
  // },
};
