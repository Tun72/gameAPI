const express = require("express")

const Router = express.Router()

const gameControl = require('../controller/gameControl')

Router.get("/all", gameControl.getAllGames)

module.exports = Router