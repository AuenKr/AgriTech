const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../constant/envVariable");

const {
  AdminSignUpSchema,
  AdminSignInSchema,
} = require("../validation/adminSchema");
const { Admin } = require("../db");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    msg: "On admin page",
  });
});

route.post("/signup", async (req, res) => {
  const isValidBody = AdminSignUpSchema.safeParse(req.body);
  if (!isValidBody.success) {
    return res.status(404).json({
      msg: "Invalid Inputs",
    });
  }

  const result = await Admin.findOne({ username: req.body.username });
  if (result) {
    return res.status(404).json({
      msg: "Username alredy exist",
    });
  }

  const response = await Admin.create(req.body);

  res.json({
    body: req.body,
  });
});

route.post("/signin", async (req, res) => {
  const isValidBody = AdminSignInSchema.safeParse(req.body);
  if (!isValidBody.success) {
    return res.status(404).json({
      msg: "Invalid Inputs",
    });
  }

  const result = await Admin.findOne({
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
  adminRoute: route,
};
