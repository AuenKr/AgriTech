const { z } = require("zod");

const UserSignUpSchema = z
  .object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .strict();

const UserSignInSchema = z
  .object({
    username: z.string().email(),
    password: z.string(),
  })
  .strict();

module.exports = {
  UserSignUpSchema,
  UserSignInSchema,
};
