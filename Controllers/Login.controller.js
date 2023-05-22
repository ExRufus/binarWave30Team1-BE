const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  const { Username, Password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        Username,
      },
    });
    if (!Username)
      return res.status(401).json({ msg: "user cannot be empty!" });
    if (!Password)
      return res.status(401).json({ msg: "password cannot be empty!" });
    if (!user) return res.status(401).json({ msg: "user not found ea kaka !" });
    const compare = await bcrypt.compare(Password, user.Password);
    if (!compare)
      return res
        .status(400)
        .json({ auth: false, message: "password doesnt match" });
    const token = jwt.sign(
      { id: user.id, Username: user.Username },
      process.env.TOKEN,
      (err, token) => {
        res.status(200).json({
          auth: true,
          status: "authorized",
          token,
        });
      }
    );
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = login;
