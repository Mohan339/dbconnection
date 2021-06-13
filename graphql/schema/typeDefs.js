
const {gql} = require("apollo-server-express")



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
            }
            type Project{
                projectName: String!
                clientName: String!
                selectType: String!
                startDate: String!
                EndDate: String!
                selectPriority: String!
                selectTeamLead: String!
                selectRate:String!
                selectTeam: String!
            }

            input ProjectInput{
                projectName: String!
                clientName: String!
                selectType: String!
                startDate: String!
                EndDate: String!
                selectPriority: String!
                selectTeamLead: String!
                selectRate:String!
                selectTeam: String!
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
                }           


            type Query {               
                traineeDetails: [Trainee]              
                employeeDetails: [Employee]
                projectDetails: [Project]
            }

            type Mutation {                
                createTrainee(traineeInput: TraineeInput): Trainee
                createEmployee(employeeInput: EmployeeInput): Employee
                createProject(pInput: ProjectInput): Project
                }
             
        `;
module.exports = {typeDefs};