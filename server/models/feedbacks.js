const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  learning: Number,
  communication: Number,
  service: Number,
  avgRating: Number,
  review: String,
  submittedAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
