const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-valiator");
const { type } = require("os");

const safinaSchema = new mongoose.Schema({
    nama : {type : String, required : true, unique : true},
    tempat : {type: String, required:true}
});

safinaSchema.plungin(uniqueValidator);
module.exports = mongoose.model("safina", safinaSchema);