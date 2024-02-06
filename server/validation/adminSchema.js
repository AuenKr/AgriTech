const { z } = require("zod");

const AdminSignUpSchema = z
  .object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .strict();

const AdminSignInSchema = z
  .object({
    username: z.string().email(),
    password: z.string(),
  })
  .strict();

module.exports = {
  AdminSignUpSchema,
  AdminSignInSchema,
};
