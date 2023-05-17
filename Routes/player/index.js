const {
  getPlayer,
  getPlayerById,
  deletePlayer,
  updateUser,
  createUser,
  loginController
} = require("../../Controllers/User.controller");
const { restrictLoginPage } = require("../../middlewares/checkLogin");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", restrictLoginPage);
PlayerRouter.get("/:id", getPlayerById);
PlayerRouter.post("/", createUser);
PlayerRouter.delete("/:id", deletePlayer);
PlayerRouter.put("/:id", updateUser);
PlayerRouter.post("/login", loginController);

module.exports = PlayerRouter;


//notes api - public / private 
