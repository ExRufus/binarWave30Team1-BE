const jwt = require("jsonwebtoken");

function restrictLoginPage(req, res, next) {
  const token = req.session.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (decodedToken) {
      req.userId = decodedToken.id;
      return res.redirect("/");
    }
    next();
  });
}

module.exports = { restrictLoginPage };
