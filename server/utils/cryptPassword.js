const bcrypt = require("bcrypt");

function cryptPassword(password) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, salt);

  return password;
}

module.exports = cryptPassword;
