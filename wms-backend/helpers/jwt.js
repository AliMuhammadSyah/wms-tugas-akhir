require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (users) => {
  const { role_id, nama, username, no_hp, alamat } = users;
  return jwt.sign(
    {
      role_id,
      nama,
      username,
      no_hp,
      alamat,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "10m",
    }
  );
};

const decodeToken = (token) => {
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    return decode;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
