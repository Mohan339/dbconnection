const mongoose = require("mongoose")

const Schema = mongoose.Schema


const employeeSchema= new Schema({
   
                EmployeeId: {
                    type:String,
                    required: true
                },
                Employee_name : {
                    type:String,
                    required: true
                },  
                Date_of_birth: {
                    type:String,
                    required: true
                },
                Date_of_joining:{
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
                Email_ID: {
                    type:String,
                },
                PAN_card_number: {
                    type:String,
                },
                Department_looking_for_Freshers: {
                    type:String,
                },
                Company_name : {
                    type:String,
                },
                Related_files: {
                    type:String,
                },
                No_of_years : {
                    type:String,
                },
                Technology : {
                    type:String,
                },
                
                Expiry_date_of_passport: {
                    type:String,
                },
                current_salary: {
                    type:String,
                },
                createdEmployees: {
                    type: Schema.Types.ObjectId,
                    ref: 'onandgotrainee'
                },
                employe_Image:{
                    type:String
                },
                designation:{
                    type:String,
                },
                description:{
                    type:String,
                },
                Aadhar_Number:{
                    type: Number
                },
                passportNumber:{
                        type:Number
                },
                resume:{
                    type: String
                }
},        {timestamps:true},     
    
);
module.exports=mongoose.model("onandgoemployee", employeeSchema)