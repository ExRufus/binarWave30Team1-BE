const { getPlayer } = require("../../Controllers/User.controller");
const PlayerRouter = require("express").Router();


PlayerRouter.get("/", getPlayer)

PlayerRouter.put("/user/:id")

module.exports = PlayerRouter;