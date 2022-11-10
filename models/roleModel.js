var mongoose = require("mongoose");

const role = mongoose.Schema({
  name: { type: String },
});

var Role = mongoose.model("role", role);
module.exports = Role;