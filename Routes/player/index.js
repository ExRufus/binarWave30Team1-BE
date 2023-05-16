const {
  getPlayer,
  getPlayerById,
  deletePlayer,
  updateUser,
  createUser,
  login
} = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", getPlayer);
PlayerRouter.get("/:id", getPlayerById);
PlayerRouter.post("/", createUser);
PlayerRouter.delete("/:id", deletePlayer);
PlayerRouter.put("/:id", updateUser);
PlayerRouter.post("/login", login);

module.exports = PlayerRouter;
