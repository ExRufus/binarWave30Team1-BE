const jwt = require("jsonwebtoken");

// Fungsi untuk menendang user ke halaman utama, kalau dia udah authenticated.
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