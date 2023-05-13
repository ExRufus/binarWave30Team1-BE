const GameRouter = require("express").Router();


GameRouter.get("/", (req, res) => {
    res.send("tempat game controller");
  });
GameRouter.get("")
module.exports = GameRouter;