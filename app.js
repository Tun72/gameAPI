const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Own files
const game = require("./routes/game")



const app = express();

const MONGO_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.yfufg.mongodb.net/${process.env.DB_NAME}`;

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/game/api', game)

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  });
