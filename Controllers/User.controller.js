const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// 1. fungsi create player / register - vincent
// 2. fungsi get player - auda
async function getPlayer(req, res, next) {
  try {
    const players = await prisma.user.findMany();
    if (players) {
      return res.status(200).json({
        result: 'Success',
        players,
      });
    }
  } catch (error) {
    next(error);
  }
}
// 3. fungsi get player berdasarkan id - adan
// 4. fungsi update player - akmal
// 5, fungsi delete player - labib
// 6, fungsi login player - mirza

async function loginPlayer(req, res) {
  try {
    const user = await loginPlayer(req.body);
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );
    req.session.token = token;
    res.redirect('/');
  } catch (error) {
    res.redirect('/login');
  }
}

module.exports = { getPlayer, loginPlayer };
