const { z } = require("zod");

const WeatherSchema = z
  .object({
    lat: z.string(),
    lon: z.string(),
  })
  .strict();

module.exports = {
  WeatherSchema,
};
