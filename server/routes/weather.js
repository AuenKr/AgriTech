const express = require("express");
const axios = require("axios");
const { WEATHER_API } = require("../constant/envVariable");
const { WeatherSchema } = require("../validation/weatherSchema");
const { userAuthentication } = require("../middleware/user");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    msg: "On weatther route",
  });
});

route.get("/location", userAuthentication, async (req, res) => {
  const isValidInput = WeatherSchema.safeParse(req.query);
  if (!isValidInput.success) {
    return res.json({
      msg: "Invalid Inputs",
      params: req.query,
      isValidInput,
    });
  }
  // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  const units = "metric";
  try {
    const urlCity = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${req.query.lat}&lon=${req.query.lon}&appid=${WEATHER_API}`;
    const response = await axios.get(urlCity);
    const city = response.data.name;

    const urlTempData = `https://api.openweathermap.org/data/2.5/onecall?&exclude=hourly,minutely&lat=${req.query.lat}&lon=${req.query.lon}&units=${units}&appid=${WEATHER_API}`;
    const { data } = await axios.get(urlTempData);

    const dailyData = data.daily.map((each) => {
      return {
        date: each.dt,
        minTemp: each.temp.min,
        maxTemp: each.temp.max,
        type: each.weather[0].main,
      };
    });

    const finalData = {
      city,
      temp: data.current.temp,
      detail: {
        feelsLike: data.current.feels_like,
        humidity: data.current.humidity,
        maxTemp: data.daily[0].temp.max,
        minTemp: data.daily[0].temp.min,
        windSpeed: data.current.wind_speed,
        type: data.current.weather[0].main,
        visibility: data.current.visibility,
      },
      daily: dailyData,
    };
    return res.json({
      msg: "Success",
      response: finalData,
    });
  } catch (err) {
    res.status(500).json({
      msg: "failed",
      query: req.query,
      error: err,
    });
  }
});

module.exports = {
  weatherRoute: route,
};
