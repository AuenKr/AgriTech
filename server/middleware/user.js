const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../constant/envVariable");

function userAuthentication(req, res, next) {
  const { authorization } = req.headers;
  try {
    const { username } = jwt.verify(authorization.split(" ")[1], JWT_KEY);
    req.userID = username;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "Invalid token",
    });
  }
}

module.exports = {
  userAuthentication,
};
