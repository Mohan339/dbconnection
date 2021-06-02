const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {buildSchema} = require("graphql");
const bodyParser  = require("body-parser");
const mongoose = require("mongoose")

const Employeeschema = require("./models/employee")
const Traineeschema = require("./models/trainee")
const app = express();

app.use(bodyParser.json());

app.use("/graphql", 
        graphqlHTTP({
        schema: buildSchema(`
            type Trainee {
                TraineeId: String!
                Trainee_name : String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Aadhar_number: String
                Address: String
                Passport_number: String
                Technology: String
                Course_fees: Float
               }

            type Employee {
                EmployeeId: String!
                Employee_name : String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Department_looking_for_Freshers: String 
                Company_name : String
                Related_files: String
                No_of_years : String
                Technology : String
                Expiry_date_of_passport :String
                current_salary: String
                
            }

            input EmployeeInput{
                EmployeeId: String!
                Employee_name : String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Department_looking_for_Freshers: String
                Company_name : String
                Related_files: String
                No_of_years : String
                Technology : String
                Expiry_date_of_passport :String
                current_salary: String
               
            }

            input TraineeInput{
                TraineeId: String!
                Trainee_name : String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Aadhar_number: String
                Address: String
                Passport_number: String
                Technology: String
                Course_fees: Float
                }


            type RootQuery {
                traineeDetails: [Trainee]
                employeeDetails: [Employee]
                
            }

            type Mutation {
                createTrainee(traineeInput: TraineeInput): Trainee
                createEmployee(employeeInput: EmployeeInput): Employee

                    }
            schema {
                query: RootQuery
                mutation: Mutation
            }
        `),
        rootValue: {
            traineeDetails: () =>{
                return Traineeschema.find().then(traineeDetails => {
                    return traineeDetails.map(trainee => {
                        return { ...trainee._doc };
                    });
                })
                .catch(err=>{
                    console.log("err");
                });
            },
            employeeDetails: ()=> {
                return Employeeschema.find()
                    .then(employeeDetails => {
                    return employeeDetails.map(employee => {
                        return { ...employee._doc };
                    });
                })
                .catch(err=>{
                    console.log("err");
                });;
            },
            createTrainee: (args) => {
                const trainee = new Traineeschema({
                    TraineeId:args.traineeInput.TraineeId,
                Trainee_name :args.traineeInput.Trainee_name,
                Date_of_birth: args.traineeInput.Date_of_birth,
                Date_of_joining: args.traineeInput.Date_of_joining,
                Date_off_course_end:args.traineeInput. Date_off_course_end,
                Education: args.traineeInput.Education,
                Phone_number: args.traineeInput.Phone_number,
                Email_ID: args.traineeInput.Email_ID,
                PAN_card_number:args.traineeInput.PAN_card_number,
                Aadhar_number: args.traineeInput.Aadhar_number,
                Address: args.traineeInput.Address,
                Passport_number: args.traineeInput.Passport_number,
                Technology: args.traineeInput.Technology,
                Course_fees: args.traineeInput.Course_fees,
                } );
                return trainee.save().then(result => {
                    console.log(result);
                    return {...result._doc};
                }).catch(err=> {
                    console.log(err);
                    throw err;
                });
            },
            createEmployee: (args) => {
                const employee = new Employeeschema({
                    EmployeeId: args.employeeInput.EmployeeId,
                    Employee_name : args.employeeInput.Employee_name,
                    Date_of_birth:args.employeeInput.Date_of_birth,
                    Date_of_joining: args.employeeInput. Date_of_joining,
                    Date_off_course_end: args.employeeInput.Date_off_course_end,
                    Education: args.employeeInput.Education,
                    Phone_number: args.employeeInput.Phone_number,
                    Email_ID: args.employeeInput.Email_ID,
                    PAN_card_number: args.employeeInput.PAN_card_number,
                    Department_looking_for_Freshers:args.employeeInput.Department_looking_for_Freshers, 
                    Company_name :args.employeeInput.Company_name,
                    Related_files: args.employeeInput.Related_files,
                    No_of_years : args.employeeInput.No_of_years,
                    Technology : args.employeeInput.Technology,
                    Expiry_date_of_passport :args.employeeInput.Expiry_date_of_passport,
                    current_salary: args.employeeInput.current_salary
                   
                });
                 return employee.save().then(result => {
                    console.log(result);
                    return {...result._doc};
                }).catch(err=> {
                    console.log(err);
                    throw err;
                });
                
            }        
        },
        graphiql:true
    })
);
// ///.connect("mongodb+srv://logincred:passwd@cluster0.slvqd.mongodb.net/HRMS?retryWrites=true&w=majority",
// {useNewUrlParser : true, useUnifiedTopology : true}).then(res => {
//     const port = 2021;
//     app.listen(port, () =>{
//         console.log("serve is up")
//     })  
// }).catch(err => {
//     console.log("error")
// })


