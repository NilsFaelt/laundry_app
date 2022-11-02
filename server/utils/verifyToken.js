const jwt = require("jsonwebtoken");
const createError = require("./customError");

const verifyToken = (req, res, next) => {
  const token = req.cookies.acesstoken;
  if (!token) {
    return next(createError(401, "not autenticated"));
  }
  console.log(token);
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      console.log(err);
      return next(createError(403, "not admin"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
