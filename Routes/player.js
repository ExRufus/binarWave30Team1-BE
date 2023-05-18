const players = require("../Controllers/User.controller");
const Router = require("express").Router();

Router.post("/", players.register);
Router.get("/", players.getPlayers);
Router.get("/:id", players.getPlayerById);
Router.put("/:id", players.updatePlayer);
Router.delete("/:id", players.deletePlayer);

module.exports = Router;

//notes api - public / private
