const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  types: [{ required: true, type: String }],
  genres: [{ required: true, type: String }],
  gameUrl: { required: true, type: String },
  imageUrl: { required: true, type: String },
  platforms: [{ required: true, type: String }]
});

const Game = mongoose.model("game", gameSchema);

module.exports = Game;
