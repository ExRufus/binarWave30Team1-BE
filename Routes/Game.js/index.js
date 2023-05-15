const { getRoom } = require("../../Controllers/Game.controller");
const GameRouter = require("express").Router();

//router Room
GameRouter.get("/rooms", getRoom);

module.exports = GameRouter;
