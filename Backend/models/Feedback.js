const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  feedback: { type: String },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
