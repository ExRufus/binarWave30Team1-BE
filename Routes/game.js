const gameRoom = require("../Controllers/Game.controller");
const authOnly = require("../middlewares/auth");
const Router = require("express").Router();

Router.post("/rooms", gameRoom.createRoom);
Router.get("/rooms", gameRoom.getRooms);
Router.get("/rooms/:id", gameRoom.getRoomById);
Router.post("/rooms/:id/plays", gameRoom.updateScore);
// Router.post("/rooms/delete", gameRoom.deleteAllGames);
// Router.post("/rooms/createmany", gameRoom.bulkCreate);

module.exports = Router;
