const mongoose = require("mongoose");
const data = mongoose.Schema({
  Player: String,
  table_url: String,
  line_graph_url:String,
  bar_graph_url:String,
  
});

module.exports = mongoose.model("all_rounder_bowler", data);