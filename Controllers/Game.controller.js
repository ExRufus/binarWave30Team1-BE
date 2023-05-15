const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRoom = async (req, res) => {
  const { Name, Description, thumbnail_url, Game_url, play_count } = req.body;

  try {
    const room = await prisma.game.create({
      data: {
        Name,
        Description,
        thumbnail_url,
        Game_url,
        play_count,
        // category
        // isAvalable
      },
    });
    if (!room) {
      return res.status(401).json({
        message: "cannot be empty",
      });
    }
    res.status(202).json({
      message: "success create room ",  
      data: room,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = { createRoom, getRoom };

