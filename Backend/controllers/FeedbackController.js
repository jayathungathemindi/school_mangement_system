const Feedback = require("../models/Feedback");

const mongoose = require("mongoose");

module.exports = {
  addFeedback: async (req, res) => {
    try {
      console.log(req.body);
      var feedback = new Feedback({
        _id: new mongoose.Types.ObjectId(),
        feedback: req.body.feedback,
      });
      // console.log(document);
      feedback.save((err) => {
        if (!err) {
          return res.json({
            success: true,
            message: "Feedback successfully",
          });
        }
      });
    } catch (error) {
      console.log(err);
      res.json({
        successs: false,
      });
    }
  },

  getFeedback: async (req, res) => {
    try {
      Feedback.find()
        .exec()
        .then((feedback) => {
          return res.status(200).json({
            message: "feedbacks found",
            feedback: feedback,
          });
        });
    } catch (error) {
      res.json({
        successs: false,
        message: "faild",
      });
    }
  },
};
