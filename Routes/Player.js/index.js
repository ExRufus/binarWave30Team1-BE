const UserController = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();

PlayerRouter.get("/", UserController.getPlayer);
PlayerRouter.get("/:id", UserController.getPlayerById);
PlayerRouter.delete("/:id", UserController.deletePlayer);
PlayerRouter.put("/:id", UserController.updateUser);

module.exports = PlayerRouter;
