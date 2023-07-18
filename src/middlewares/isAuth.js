const jwt = require("jsonwebtoken");
const config = require("config");

const isAuth = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  jwt.verify(token, config.get("SECRET_KEY"), (err, data) => {
    if (err) {
      if (err instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid Token" });
      } else {
        return res.status(403).json({ message: "Token expired" });
      }
    }

    req.verified = data;

    next();
  });
};

module.exports = isAuth;
