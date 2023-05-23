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
async function getRooms(req, res, next) {
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
async function getRoomById(req, res, next) {
  const { id } = req.params;
  try {
    const games = await prisma.game.findUnique({
      where: { id },
    });
    if (!games) {
      return res.status(400).json({
        result: "room not found!",
      });
    }
    res.status(200).json({ message: "success get room by id", data: games });
  } catch (error) {
    next(error);
  }
}

const updateScore = async (req, res) => {
  const { id } = req.params;
  try {
    const getData = await prisma.game.findUnique({
      where: {
        id,
      },
    });
    const visitedRoom = ++getData.play_count;
    const data = await prisma.game.update({
      where: {
        id,
      },
      data: {
        play_count: visitedRoom,
      },
    });
    res
      .status(200)
      .json({ msg: "success update rooms !", data: data.play_count });
  } catch (error) {
    console.log(error.message);
  }
};

const bulkCreateGames = () => {
  try {
  } catch (error) {}
};

const deleteAllGames = async (req, res) => {
  try {
    const deletAll = await prisma.game.deleteMany({});
    res.status(200).json({ msg: "sucess delete all" });
  } catch (error) {
    console.log(error);
  }
};
const bulkCreate = async (req, res) => {
  try {
    const create = await prisma.game.createMany({});
    res.status(200).json({ msg: "data created 10" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateScore,
};
