const mongoose = require("mongoose")



const projectschema = mongoose.Schema({

    projectName:{
        type:String,
        required:true
    },
    clientName:{
        type:String, 
        required: true
    },
    selectType:{
        type:String, 
        required: true
    },
    startDate:{
        type:String, 
        required: true
    },
    EndDate:{
        type:String, 
        required: true
    },
    selectPriority:{
        type:String, 
        required: true
    },
    selectTeamLead:{
        type:String, 
        required: true
    },
    selectRate:{
        type:String, 
        required: true
    },
    selectTeam:{
        type:String, 
        required: true
    }
})
module.exports = mongoose.model("projects dbs", projectschema)