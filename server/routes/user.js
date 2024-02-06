const express = require("express");
const jwt = require("jsonwebtoken");

const {
  UserSignUpSchema,
  UserSignInSchema,
} = require("../validation/userSchema");

const User = require("../db/User");
const { JWT_KEY } = require("../constant/envVariable");
const { userAuthentication } = require("../middleware/user");
const route = express.Router();

route.get("/", userAuthentication, (req, res) => {
  const { authorization } = req.headers;
  res.json({
    msg: true,
  });
});

route.post("/signup", async (req, res) => {
  const isValidInput = UserSignUpSchema.safeParse(req.body);
  if (!isValidInput.success) {
    return res.status(404).json({
      msg: "Invalid Inputs",
    });
  }

  const result = await User.findOne({ username: req.body.username });
  if (result) {
    return res.status(404).json({
      msg: "Username alredy exist",
    });
  }

  const response = await User.create(req.body);

  res.json({
    msg: "On /user/signup",
    body: req.body,
    response,
  });
});

route.post("/signin", async (req, res) => {
  const isValidInput = UserSignInSchema.safeParse(req.body);
  if (!isValidInput.success) {
    return res.status(404).json({
      msg: "Invalid Inputs",
    });
  }

  const result = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!result) {
    return res.status(400).json({
      msg: "Invalid username/password",
    });
  }
  const token = "Bearer " + jwt.sign({ username: req.body.username }, JWT_KEY);
  res.json({
    token,
  });
});

module.exports = {
  userRoute: route,
};
