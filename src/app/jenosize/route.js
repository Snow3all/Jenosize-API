const express = require("express");
const { searchPlace } = require("../jenosize/searchPlace/controller");
const { game24 } = require("../jenosize/game24/controller");
const { ticTacTorBot } = require("../jenosize/ticTacTor/controller");
const router = express.Router();

router.route("/searchPlace").post(searchPlace);

router.route("/game24").post(game24);

router.route("/ticTacTor").post(ticTacTorBot);

module.exports = router;
