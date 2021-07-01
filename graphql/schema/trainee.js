const {gql} = require("apollo-server-express")


const TraineeType = gql`

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

                type Status{
                   name: String
                    message: String
                    success: Boolean

                }


                type Query {               
                traineeDetails: [Trainee]   

                }
                type Mutation {              
                createTrainee(traineeInput: TraineeInput): Trainee

                }
`
module.exports = {TraineeType}