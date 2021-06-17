const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ClientSchema = new Schema({
    ClientId:{
        type: String,
        required: true
    },
    Clientname:{
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
    PanCardNo:{
        type: String,
        
    },
    GstNo:{
        type: String,
       
    },
    ClientURL:{
        type: String,
        
    },
    Description:{
        type: String,
       
    },
    PINcode:{
        type: String,
        
    },
    ClientImage:{
        type: String
    }

});

module.exports = mongoose.model("onandgoclients", ClientSchema)