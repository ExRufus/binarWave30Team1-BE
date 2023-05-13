const GameRouter = require("express").Router();


GameRouter.get("/", (req, res) => {
    res.send("tempat game controller");
  });

module.exports = GameRouter;