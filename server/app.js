const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const getUser = require("./routers/getUser");
const newFeedbacks = require("./routers/feedbackRouter");
const authorize = require("./middlewares/authorize");

const app = express();
app.use(express.json());
app.use(cors());

//All API
app.use("/register", userRouter);
app.use("/login", authRouter);
app.use("/profile", getUser);
app.use("/feedback", newFeedbacks);

module.exports = app; // exporting All Apis
