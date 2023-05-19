const login = require("../Controllers/Login.controller.js");
const GameRouter = require("./game.js");
const PlayerRouter = require("./player.js");
const app = require("express");
const router = app.Router();

router.use("/players", PlayerRouter);
router.use("/games", GameRouter);

// login handler
router.post("/auth/login", login);
module.exports = router;
