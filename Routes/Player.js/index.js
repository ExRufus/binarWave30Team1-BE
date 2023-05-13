const PlayerRouter = require("express").Router();


PlayerRouter.get("/", (req, res) => {
    res.send("tempat player controller");
  });

module.exports = PlayerRouter;