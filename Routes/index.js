const GameRouter = require("./Game.js/index.js");
const PlayerRouter = require("./Player.js");
const apiRouter = require("express").Router();

apiRouter.use("/users", PlayerRouter);
apiRouter.use("/games", GameRouter);

module.exports = apiRouter;
