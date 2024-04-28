const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const router = express.Router();

const newUser = async (req, res) => {
  // First We are checking that the user is already registered with email or username
  let user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });
  // If user is already registered with email or username, then we are sending an error response
  if (user) {
    if (user.email === req.body.email) {
      return res.status(400).send("User already registered with this email!");
    } else if (user.username === req.body.username) {
      return res.status(400).send("Username already taken!");
    }
  }
  // If user isn't exist, then we are creating new user
  user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    dob: req.body.dob,
    profile: req.body.profile,
    password: req.body.password,
  });
  //Hashing Password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  try {
    const result = await user.save();
    const token = user.generateJWT();
    res.send({
      token: token,
      data: {
        name: result.name,
        username: result.username,
        dob: result.dob,
        profile: result.profile,
        email: result.email,
        password: result.password,
      },
      message: "SuccessFully Registered!",
    });
  } catch (err) {
    const errMsgs = [];
    for (field in err.errors) {
      errMsgs.push(err.errors[field].message);
    }
    return res.status(400).send(errMsgs);
  }
};

router.route("/").post(newUser);

module.exports = router;
