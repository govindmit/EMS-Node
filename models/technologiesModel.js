const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechnologiesSchema = new Schema({
    techTitle : { type : String, required : true }
})

module.exports = mongoose.model("Technologies", TechnologiesSchema);
