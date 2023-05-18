const gameRoom = require("../Controllers/Game.controller");
const Router = require("express").Router();

Router.post("/rooms", gameRoom.createRoom);
Router.get("/rooms", gameRoom.getRooms);
Router.get("/rooms/:id", gameRoom.getRoomById);

module.exports = Router;
