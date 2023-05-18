const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await prisma.userGame.findUnique({
      where: {
        username,
      },
    });
    if (!user) return res.status(200).json({ message: "user not found !" });
    const compare = await bcrypt.compare(password, user.password);
    if (!compare)
      return res.status(200).json({ message: "password doesnt match" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.TOKEN,
      (err, token) => {
        res.status(200).json({
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
