const GameRouter = require("./game.js");
const PlayerRouter = require("./player.js");
const app = require("express");
const router = app.Router();

router.use("/players", PlayerRouter);
router.use("/games", GameRouter);

// login handler
router.get("/auth/login", (req, res) => res.json({ msg: "oke" }));
module.exports = router;
