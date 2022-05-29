const Game = require("../model/game");
exports.getAllGames = async (req, res, next) => {
  const game = await Game.find({});
  res.status(200).json({ "message": "Success...", "All Games": game });
};
