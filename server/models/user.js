const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 255,
  },
  dob: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 1024,
  },
});

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "3h" }
  );
  return token; // if user exist we are sending a token
};

const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(user); // the user from req.body will be validate by it
};

module.exports.User = model("User", userSchema);
module.exports.validate = validateUser;
