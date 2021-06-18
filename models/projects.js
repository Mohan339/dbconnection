const mongoose = require("mongoose")

const Schema = mongoose.Schema

const projectschema =  new Schema({

    projectName:{
        type:String
        
    },
    id:{
        type:String
    },    
    clientName:{
        type:String 
     },
    selectType:{
        type:String
    },
    startDate:{
        type:String
    },
    EndDate:{
        type:String
    },
    selectPriority:{
        type:String
    },
    selectTeamLead:{
        type:String, 
        required: true
    },
    selectRate:{
        type:String},
    selectTeam:{
        type:String
    },
    ClientDetials:{
        type: Schema.Types.String,
        ref:  "onandgoclients"
    }
}, {timestamps:true})
module.exports = mongoose.model("onandgoprojects", projectschema)