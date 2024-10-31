const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.schema({
    nama : {type : String, required : true},
    tempat :{type : String, required : true},
    wisata :[{type : string, required : true}]
});

Module.exports = mongoose.model("pariwisata", pariwisataSchema );