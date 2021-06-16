const mongoose = require("mongoose")



const projectschema = mongoose.Schema({

    projectName:{
        type:String
        
    },
    id:{
        type:String
    },    
    clientName:{
        type:String  },
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
    }
}, {timestamps:true})
module.exports = mongoose.model("onandgoprojects", projectschema)