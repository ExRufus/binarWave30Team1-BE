const { PrismaClient } = require("@prisma/client");
const { authLogin, generateToken } = require("../libs/Auth");
const prisma = new PrismaClient();

// 1. fungsi create player / register - vincent
const createUser = async(req, res) => {
  try {
    const { Email, Username, Password, Total_score, Biodata, City } = req.body;
    const player = await prisma.user.create();

    if (!Email || !Username) {
      return res
        .status(404)
        .json({
          result: "Failed",
          message: "username or email cannot empty",
      });
    }
    
    if (!Password) {
      return res
        .status(404)
        .json({
          result: "Failed",
          message: "password cannot be empty",
      });
    }

    const newUser = { Email, Username, Password, Total_score, Biodata, City }
    const createdUser = await prisma.user.create(newUser);
    if (createdUser) {
      return res
        .status(200)
        .json({
          result: "success",
          data: createdUser
      })
    }
  } catch (error) {
    console.log(error)
  }
}

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
    if (!players) {
      return res.status(400).json({
        result: "error",
        message: "Tidak ada data",
      });
    }
  } catch (error) {
    next(error);
  }
}
// 3. fungsi get player berdasarkan id - adan
async function getPlayerById(req, res, next) {
  const { id } = req.params;
  try {
    const players = await prisma.user.findUnique({
      where: { id },
    });
    if (!players) {
      return res.status(400).json({
        result: "users not found!",
      });
    }
    res
      .status(200)
      .json({ message: "success get player by id", data: players });
  } catch (error) {
    next(error);
  }
}
// 4. fungsi update player - akmal
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const findUser = await prisma.user.findUnique({ where: { id } });

    if (!findUser)
      return res
        .status(404)
        .json({ result: "not found", message: `Player with ${id} not found` });

    const { Email, Username, Password, Total_score, Biodata, City } = req.body;

    if (findUser) {
      const updateData = await prisma.user.update({
        where: { id },
        data: {
          Email,
          Username,
          Password,
          Total_score,
          Biodata,
          City,
        },
      });

      res.status(200).json({
        result: "Success",
        message: `User with id = ${id} berhasil di update`,
        data: updateData,
      });
    } else {
      res.status(500).json({
        result: "Error",
        message: "Internal Server Error",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// 5, fungsi delete player - labib
async function deletePlayer(req, res, next) {
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
}
// 6, fungsi login player - mirza

async function login(req, res) {
  try {
    const user = await authLogin(req.body);
    const token = generateToken(user);
    res.cookie('CH9', token)
    res.status(200).json({
      result: "Success",
    });
  } catch (error) {
    
  }
}


module.exports = { 
  getPlayer, 
  updateUser, 
  deletePlayer, 
  getPlayerById, 
  createUser,
  login
 };