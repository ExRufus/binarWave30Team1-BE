const {
  getPlayer,
  getPlayerById,
  deletePlayer,
  updateUser,
  createUser
} = require("../../Controllers/User.controller");
const express = require("express");
const api = express.Router();

// Endpoint For get Data Dashboard
api.use("/v1/user", getPlayer); // localhost:<port>/api/v1/user
api.get("/", getPlayer);
api.get("/:id", getPlayerById);
api.post("/", createUser);
api.delete("/:id", deletePlayer);
api.put("/:id", updateUser);

module.exports = api;