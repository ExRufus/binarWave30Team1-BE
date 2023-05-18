const players = require("../Controllers/User.controller");
const authOnly = require("../middlewares/auth");
const Router = require("express").Router();

Router.post("/", players.register);
Router.get("/", authOnly, players.getPlayers);
Router.get("/:id", authOnly, players.getPlayerById);
Router.put("/:id", authOnly, players.updatePlayer);
Router.delete("/:id", authOnly, players.deletePlayer);

module.exports = Router;

//notes api - public / private
