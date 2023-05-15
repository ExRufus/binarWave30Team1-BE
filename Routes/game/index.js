const { getRoom, createRoom, getRoomById } = require("../../Controllers/Game.controller");
const GameRouter = require("express").Router();

//router Room
GameRouter.post("/rooms", createRoom);
GameRouter.get("/rooms", getRoom);
GameRouter.get("/rooms/:id", getRoomById);



module.exports = GameRouter;
