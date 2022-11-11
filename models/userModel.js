const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String ,require:true},
  phone: { type: Number, maxLength: 10 },
  dob: { type: String, required: true},
  role: { type: mongoose.Schema.Types.ObjectId, ref: "role" },
});

const user = mongoose.model("user", userSchema);
module.exports = user;