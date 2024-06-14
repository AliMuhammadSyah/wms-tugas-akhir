const { decodeToken } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      message: "Login required!"
    })
  }

  const users = decodeToken(token);

  if (!users) {
    return res.status(401).json({
      message: "Invalid token!"
    })
  }

  req.users = users;

  next();
}

module.exports = authentication;