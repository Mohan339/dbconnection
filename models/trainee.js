const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const traineeSchema= new Schema({

            TraineeId: {
                type:String,
                required: true
            },
            Trainee_name : {
                type:String,
                required: true
            },
            Date_of_birth: {
                type:String,
                required: true
            },
            Date_of_joining: {
                type:String,
            },
            Date_off_course_end: {
                type:String,
            },
            Education: {
                type:String,
            },
            Phone_number: {
                type:String,
            },
            Email_ID:{
                type:String,
            },
            PAN_card_number: {
                type:String,
            },
            Aadhar_number: {
                type:String,
            },
            Address: {
                type:String,
            },
            Passport_number: {
                type:String,
            },
            Technology: {
                type:String
            },
            Course_fees: {
                type:Number,
            },
            createdTrainees: {
                    type: Schema.Types.ObjectId,
                    ref: 'Employees'
            }
},{timestamps:true})
module.exports=mongoose.model("trainees dbs", traineeSchema)