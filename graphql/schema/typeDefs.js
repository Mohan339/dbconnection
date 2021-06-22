
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
                clients: Client!
               
            }
            type Project{
                client: Client
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
                ClientDetials: Client         #for fetching single client details
              
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
            type Status{
                   name: String
                    message: String
                    success: Boolean

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
                    id:String
                    message: String
                    success: Boolean

                }
               type Client{
                projects:[Project]
                ClientId: String!
                Clientname: String!
                CompanyName: String!
                Designation: String
                PhoneNoCC: Int
                EmailId: String!
                PanCardNo: String
                GstNo: String                           
                ClientURL: String
                Description: String
                PINcode: String 
                ClientImage: String
                Employee_name: String 
                employees: Employee
                ProjectsName:[String]            #common name b/w cl and project
                WorkingProject:[Project]         #for fetching project details
               }
               input ClientInput{
                ClientId: String!
                Clientname: String!
                CompanyName: String!
                Designation: String
                PhoneNoCC: Int
                EmailId: String!
                PanCardNo: String
                GstNo: String                           
                ClientURL: String
                Description: String
                PINcode: String 
                ClientImage: String
                Employee_name:String
                ProjectsName:[String] 
               }
               
               type PreClient{
                PreClientId: String!
                Contactname: String!
                CompanyName: String
                Designation: String
                PhoneNoCC: Int
                EmailId: String!         
                ClientURL: String
                Description: String
                Country: String
                PreclientImage: String 
               }
               input PreClientInput{
                PreClientId: String!
                Contactname: String!
                CompanyName: String
                Designation: String
                PhoneNoCC: Int
                EmailId: String!         
                ClientURL: String
                Description: String
                Country: String
                PreclientImage: String
               }


            type Query {               
                traineeDetails: [Trainee]   
                employeeDetails: [Employee]
                projectDetails: [Project]
                projectHead(selectTeamLead:String):[Project]
                info:String
                clientDetails:[Client]
                preClientDetails: [PreClient]
                
                client(Clientname: String):Client          #209 and 210 see this , realtion
                project(projectName: String):Project
                projectRelClient(clientName: String): Project
                clientRelProject(ProjectsName:String):Client
               
            },
            scalar Upload,
            type Mutation {              
                createTrainee(traineeInput: TraineeInput): Trainee
                editTraineeById(UpdateTrainee: TraineeInput,TraineeId:String): Trainee
                deleteTraineeById(TraineeId:String):Status   

                createEmployee(employeeInput: EmployeeInput): Employee
                editEmployeeByID(updateEmployee: EmployeeInput, Employee_name:String):Employee
                deleteEmployeeByID(Employee_name:String):Status

                createProject(pInput: ProjectInput): Project
                editByprojectID(updateproject: ProjectInput, id:String):Project
                deleteproject(id:String):projectStatus

                imageUploader(file:Upload):String
                
                createClient(clientInput: ClientInput): Client                      
                createPreClient(pCInput: PreClientInput):PreClient
                }
             
        `;
module.exports = {typeDefs};


