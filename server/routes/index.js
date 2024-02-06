const express = require("express");
const { adminRoute } = require("./admin");
const { userRoute } = require("./user");
const { weatherRoute } = require("./weather");
const route = express.Router();

route.use("/admin", adminRoute);
route.use("/user", userRoute);
route.use("/weather", weatherRoute);

module.exports = {
  mainRoute: route,
};
