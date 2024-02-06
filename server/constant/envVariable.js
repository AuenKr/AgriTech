require("dotenv").config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  WEATHER_API: process.env.WEATHER_API,
};
