const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PreCLientSchema = new Schema({
    PreClientId:{
        type: String,
        required: true
    },
    Contactname:{
        type: String,
        required: true
    },
    CompanyName:{
        type: String,
        required: true
    },
    Designation:{
        type: String,
    },
    PhoneNoCC:{
        type: Number,
    },
    EmailId:{
        type: String,
        required: true
    },
    ClientURL:{
        type: String, 
    },
    Description:{
        type: String, 
    },
    Country:{
        type: String, 
    },
    PreclientImage:{
        type: String,   
    }

});

module.exports = mongoose.model("onandgoPreclient", PreCLientSchema);