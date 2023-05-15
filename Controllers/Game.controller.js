const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 1. fungsi get room labib
async function getRoom(req, res, next) {
  try {
    const rooms = await prisma.game.findMany();
    if (rooms) {
      return res.status(200).json({
        result: "Success",
        rooms,
      });
    }
    if (!rooms) {
      return res.status(400).json({
        result: "error",
        message: "Tidak ada rooms",
      });
    }
  } catch (error) {
    next(error);
  }
}
// 2. fungsi get room berdasarkan id

module.exports = { getRoom };
