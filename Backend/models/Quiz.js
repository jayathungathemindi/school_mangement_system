const { Date } = require("mongoose");
const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  t_id: { type: String },
  quizName: { type: String },

  grade: { type: Number },
  subject: { type: String },
  questions: [
    {
      questionType: { type: String },
      answer: { type: String },
      id: { type: Number },

      question: {
        questionName: { type: String },
        option_1: { type: String },
        option_2: { type: String },
        option_3: { type: String },
        option_4: { type: String },
      },
    },
  ],
  date: { type: Date },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
