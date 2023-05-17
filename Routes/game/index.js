const { getRoom, createRoom, getRoomById } = require("../../Controllers/Game.controller");
const { restrictLoginPage } = require("../../middlewares/checkLogin");
const GameRouter = require("express").Router();

//router Room
GameRouter.post("/rooms", createRoom);
GameRouter.get("/rooms", getRoom, restrictLoginPage);
GameRouter.get("/rooms/:id", getRoomById);



module.exports = GameRouter;
