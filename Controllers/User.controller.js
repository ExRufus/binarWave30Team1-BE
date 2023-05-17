const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const { authLogin } = require("../libs/Auth");
const jwt = require("jsonwebtoken");

// 1. fungsi create player / register - vincent
const createUser = async (req, res) => {
  const { Email, Username, Password, Total_score, Biodata, City } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, 12);
    const player = await prisma.user.create({
      data: {
        Email,
        Username,
        Password: hashedPassword,
        Total_score,
        Biodata,
        City,
      },
    });
    // validasi body kosong
    if (!Email || !Username) {
      return res.status(404).json({
        result: "Failed",
        message: "username or email cannot empty",
      });
    }
    if (!Password) {
      return res.status(404).json({
        result: "Failed",
        message: "password cannot be empty",
      });
    }
    res.status(200).json({
      message: "success",
      data: player,
    });
  } catch (error) {
    console.log(error); // res.status(500)
  }
};

// 2. fungsi get player - auda
async function getPlayer(req, res, next) {
  try {
    const players = await prisma.user.findMany();
    if (players) {
      return res.status(200).json({
        result: "Success",
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
    next(error); // notes res.status(500)
  }
}
// 4. fungsi update player - akmal
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { Email, Username, Password, Total_score, Biodata, City } = req.body;
    //pastiin data yang dikirim objek/
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
  } catch (error) {
    console.log(error);
  }
}

// 5, fungsi delete player - labib
async function deletePlayer(req, res, next) {
  const { id } = req.params;
  try {
    const players = await prisma.user.delete({
      where: {
        id: +id, //parsing string to number
      },
    });
    if (!players) {
      res.status(400).json({ msg: "cannot delete!" });
    }
    res.status(200).json({ msg: "success delete players!" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
}
// 6, fungsi login player - mirza
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

/*
async function loginPlayer(req, res) {
  try {
    authLogin({ email: req.body.email, password: req.body.password });
    res.status(200).json({ msg: 'login succes!' });

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
    console.log({ error });
    res.status(400).json({ msg: 'login failed' });
    res.redirect('/login');
  }
}
*/

module.exports = {
  getPlayer,
  updateUser,
  deletePlayer,
  getPlayerById,
  createUser,
  loginController,
};
