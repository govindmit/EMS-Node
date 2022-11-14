const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "please enter a department name"],
  },
});
const department = mongoose.model("department", departmentSchema);
module.exports = department;
