const GameRouter = require("./game/index.js");
const PlayerRouter = require("./player/index.js");
const api = require("./api/api.js");
const apiRouter = require("express").Router();

apiRouter.use("/players", PlayerRouter);
apiRouter.use("/games", GameRouter);
apiRouter.use("/api", api)

module.exports = apiRouter;


//Route - notes - 