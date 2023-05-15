const { getPlayer } = require("../../Controllers/User.controller");
const UserController = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", getPlayer);
PlayerRouter.delete("/:id", UserController.deletePlayer);
PlayerRouter.put("/user/:id")

module.exports = PlayerRouter;
