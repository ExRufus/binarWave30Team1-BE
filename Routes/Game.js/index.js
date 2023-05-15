const GameRouter = require("express").Router();
const GameController = require("../../Controllers/Game.controller");

GameRouter.post("/", GameController.createRoom);
module.exports = GameRouter;
