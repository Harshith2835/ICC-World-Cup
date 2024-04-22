const mongoose = require("mongoose");
const data = mongoose.Schema({
  Player: String,
  Birth_date: String,
  Bats_Bowls:String,
  Role:String,
  Bowling_Type:String
  
});

module.exports = mongoose.model("Player_info", data);