const jwt = require("jsonwebtoken");

const authOnly = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) {
          return res.status(403).json({ auth: false, message: "forbidden" });
        }
        req.user = user;
        next();
      });
    }
    res.status(401).json({ auth: false, message: "Unauthorized" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

module.exports = authOnly;
