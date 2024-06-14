const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const decryptPassword = (userPassword, hashedPassword) => {
  return bcrypt.compareSync(userPassword, hashedPassword);
};

module.exports = {
  encryptPassword,
  decryptPassword,
};
