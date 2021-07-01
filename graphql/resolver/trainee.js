const Traineeschema = require("../../models/trainee") ;



const traineeResolvers = {
    Query:{
    traineeDetails: () =>{
        return Traineeschema.find().then(traineeDetails => {
            return traineeDetails.map(trainee => {
                return { ...trainee._doc };
            });
        })
        .catch(err=>{
            console.log(err);
        });
        },

    },



    Mutation:{

        createTrainee: (parent, args) => {
            const trainee = new Traineeschema({
            TraineeId: args.traineeInput.TraineeId,
            Trainee_name:args.traineeInput.Trainee_name,
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
            trainee_Image:args.traineeInput.trainee_Image
            });
            return trainee.save().then(result => {
                console.log(result);
                return {...result._doc};
            }).catch(err=> {
                console.log(err);
                throw err;
            });
        },
    },
}
module.exports = {traineeResolvers}