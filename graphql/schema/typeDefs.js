
const {gql} = require("apollo-server-express")
const  {GraphQLUpload} = require("graphql-upload");


const typeDefs = gql`

            type Trainee {
                TraineeId: String!
                Trainee_name: String!
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
                trainee_Image:String
               }

            type Employee {
                EmployeeId: String!
                Employee_name: String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Department_looking_for_Freshers: String 
                Company_name: String
                Related_files: String
                No_of_years: String
                Technology: String
                Expiry_date_of_passport:String
                current_salary: String 
                employe_Image: String 
                designation:String
                description: String
                Aadhar_Number: Int
                passportNumber:Int
                resume: String  
            }
            type Project{
                id: String
                projectName: String
                clientName: String
                selectType: String
                startDate: String
                EndDate: String
                selectPriority: String
                selectTeamLead: String
                selectRate:String
                selectTeam: String
            }

            input ProjectInput{
                id: String
                projectName: String
                clientName: String
                selectType: String
                startDate: String
                EndDate: String
                selectPriority: String
                selectTeamLead: String
                selectRate:String
                selectTeam: String
                   }   


            input EmployeeInput{
                EmployeeId: String!
                Employee_name: String!
                Date_of_birth: String!
                Date_of_joining: String
                Date_off_course_end: String
                Education: String
                Phone_number: String
                Email_ID: String
                PAN_card_number: String
                Department_looking_for_Freshers: String
                Company_name: String
                Related_files: String
                No_of_years: String
                Technology: String
                Expiry_date_of_passport:String
                current_salary: String
                employe_Image:String
                designation:String
                description: String
                Aadhar_Number: Int
                passportNumber:Int
                resume: String
               
            }

            input TraineeInput{
                TraineeId: String!
                Trainee_name: String!
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
                trainee_Image:String
                }           
                type projectStatus{
                    id:String,
                    message: String,
                    success: Boolean

                }

            type Query {               
                traineeDetails: [Trainee]   
                employeeDetails: [Employee]
                projectDetails: [Project]
                projectHead(selectTeamLead:String):[Project]
                info:String
               
            },
            scalar Upload,
            type Mutation {  
                            
                createTrainee(traineeInput: TraineeInput): Trainee
                createEmployee(employeeInput: EmployeeInput): Employee
                createProject(pInput: ProjectInput): Project
                editByprojectID(updateproject: ProjectInput, id:String):Project
                deleteproject(id:String):projectStatus
                imgaeUploader(file:Upload):String
                }
             
        `;
module.exports = {typeDefs};


