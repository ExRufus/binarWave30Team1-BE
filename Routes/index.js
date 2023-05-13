const GameRouter = require("./Game.js/index.js");
const PlayerRouter = require("./Player.js");
const apiRouter = require("express").Router();

apiRouter.use("/User", PlayerRouter);
apiRouter.use("/Game", GameRouter);

module.exports = apiRouter;