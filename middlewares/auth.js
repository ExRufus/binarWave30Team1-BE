const jwt = require("jsonwebtoken");

const authOnly = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ auth: false, message: "forbidden" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ auth: false, message: "Unauthorized" });
  }
};

module.exports = authOnly;
