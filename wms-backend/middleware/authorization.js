const { decodeToken } = require("../helpers/jwt");

const authorization = (req, res, next) => {
  const token = req.cookies.token;

  const users = decodeToken(token);

  if (users.role_id !== 1) {
    return res.status(401).json({
      message: "You are forbidden to access this site!"
    })
  }

  next();
}

module.exports = authorization;