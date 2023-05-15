const {
  getPlayer,
  getPlayerById,
  deletePlayer,
} = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", getPlayer);
PlayerRouter.get("/:id", getPlayerById);
PlayerRouter.delete("/:id", deletePlayer);
PlayerRouter.put("/:id");

module.exports = PlayerRouter;
