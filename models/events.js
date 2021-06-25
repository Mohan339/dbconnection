const mongoose = require("mongoose")

const Schema = mongoose.Schema

const eventSchema = new Schema({
    Title :[{
        type: String,
        required: true
    }],
    Description:{
        type:String
    },
    StartTime:{
        type:String
    },
    EndTime:{
        type: String
    },
    Creator:{
        type:String
    },
    Date:{
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("Events", eventSchema)