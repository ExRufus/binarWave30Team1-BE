const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

// 1. fungsi create player / register - vincent
// 2. fungsi get player - auda
async function getPlayer (req, res) {
    const players = await prisma.user.findMany();
    res.json(players);
  };
// 3. fungsi get player berdasarkan id - adan
// 4. fungsi update player - akmal
// 5, fungsi delete player - labib
// 6, fungsi login player - mirza

module.exports = {getPlayer};