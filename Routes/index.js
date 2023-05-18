const login = require("../Controllers/Login.controller.js");
const authOnly = require("../middlewares/auth.js");
const GameRouter = require("./game.js");
const PlayerRouter = require("./player.js");
const app = require("express");
const router = app.Router();

router.use("/players", PlayerRouter);
router.use("/games", authOnly, GameRouter);

// login handler
router.get("/auth/login", login);
module.exports = router;
