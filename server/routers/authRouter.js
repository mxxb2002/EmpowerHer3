const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const router = express.Router();

const authUser = async (req, res) => {
  // First We are finding the user with the req.body.email
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password!");
  // Then we compare our req.body.password with user's password (user => matched email )
  const validUser = await bcrypt.compare(req.body.password, user.password);
  if (!validUser) return res.status(400).send("Invalid email or password");

  const token = user.generateJWT();

  // finally Logging Successfully
  res.send({ message: "Login Successful!", token: token });
};

router.route("/").post(authUser);

module.exports = router;
