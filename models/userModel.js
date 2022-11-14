const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "please enter a first name"] },
  lastName: { type: String, required: [true, "please enter a last name"] },
  email: {
    type: String,
    require: [true, "please enter a email"],
    undefined: [true, "please enter a valid email"],
  },
  password: { type: String, require: [true, "please enter a password"] },
  phone: {
    type: Number,
    maxLength: 10,
    require: [true, "please enter a phone number"],
  },
  dob: { type: String, required: [true, "please enter a dob"] },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "role",
    require: [true, "please enter a role"],
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "department",
    require: [true, "please enter a department"],
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
