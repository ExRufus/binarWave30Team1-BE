const { getPlayer } = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();


PlayerRouter.get("/", getPlayer)

module.exports = PlayerRouter;