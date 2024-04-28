const express = require("express");
const { User } = require("../models/user");
const router = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");
const authorize = require("../middlewares/authorize");

const getUser = async (req, res) => {
  try {
    // User information is available in req.user
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).send("User not found");
    // Send user information as response
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).send("Internal server error");
  }
};

router.route("/").get(authorize, getUser);

module.exports = router;
