const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 1. fungsi create player / register - vincent
// 2. fungsi get player - auda
async function getPlayer(req, res, next) {
  try {
    const players = await prisma.user.findMany();
    if (players) {
      return res.status(200).json({
        result: "Success",
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
export const deletePlayer = async (req, res) => {
  try {
    const players = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(players);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// 6, fungsi login player - mirza

module.exports = { getPlayer };
