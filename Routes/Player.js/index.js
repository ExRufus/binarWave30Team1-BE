const {
  getPlayer,
  getPlayerById,
} = require("../../Controllers/User.controller");
const UserController = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", getPlayer);
PlayerRouter.get("/:id", getPlayerById);
PlayerRouter.delete("/:id", UserController.deletePlayer);
PlayerRouter.put("/:id");

module.exports = PlayerRouter;
