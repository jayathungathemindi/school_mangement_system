const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Quiz = require("../models/Quiz");
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
    } catch (error) {}
  },
};
