const { getRoom, createRoom } = require("../../Controllers/Game.controller");
const GameRouter = require("express").Router();

//router Room
GameRouter.post("/rooms", createRoom);
GameRouter.get("/rooms", getRoom);

module.exports = GameRouter;
