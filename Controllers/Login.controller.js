async function loginController(req, res) {
  try {
    const user = await login(req.body);
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    req.session.token = token;
    console.log(req.session);
    res.redirect("/");
  } catch (error) {
    res.redirect("/login");
  }
}
module.exports = loginController;
