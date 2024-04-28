const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbacks");

const newFeedbacks = async (req, res) => {
  try {
    const feedbackData = req.body;

    // Create a new Feedback document
    const feedback = new Feedback(feedbackData);

    // Save the feedback to the database
    await feedback.save();

    res.status(201).send({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error submitting feedback" });
  }
};

router.route("/").post(newFeedbacks);

module.exports = router;
