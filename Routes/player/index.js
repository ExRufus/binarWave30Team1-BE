const {
  getPlayer,
  getPlayerById,
  deletePlayer,
  updateUser,
  createUser
} = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", getPlayer);
PlayerRouter.get("/:id", getPlayerById);
PlayerRouter.post("/", createUser);
PlayerRouter.delete("/:id", deletePlayer);
PlayerRouter.put("/:id", updateUser);ta

module.exports = PlayerRouter;