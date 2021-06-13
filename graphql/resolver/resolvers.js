const Projectschema = require("../../models/projects");
const Employeeschema = require("../../models/employee");
const Traineeschema = require("../../models/trainee") ;


const resolvers = {
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
 
    employeeDetails: ()=> {
        return Employeeschema.find()
            .then(employeeDetails => {
            return employeeDetails.map(employee => {
                return { ...employee._doc };
            });
        })
        .catch(err=>{
            console.log(err);
        });
    },
     projectDetails: () => {
    
             return Projectschema.find().then(projectDetails =>{
               return projectDetails.map(x => {
                 return { ...x._doc };
             });
            })
         .catch(err =>{
             console.log(err);
         });
         }
        
        
           
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
        });
        return trainee.save().then(result => {
            console.log(result);
            return {...result._doc};
        }).catch(err=> {
            console.log(err);
            throw err;
        });
    },
    createEmployee: (parent, args) => {
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
        
    } ,



    createProject: (parent,args) => {

        console.log( args)
        const project = new Projectschema({
               projectName: args.pInput.projectName,
                clientName: args.pInput.clientName,
                selectType: args.pInput.selectType,
                startDate: args.pInput.startDate,
                EndDate: args.pInput.EndDate,
                selectPriority: args.pInput.selectPriority,
                selectTeamLead: args.pInput.selectTeamLead,
                selectRate:args.pInput.selectRate,
                selectTeam: args.pInput.selectTeam
        });
        return project.save().then(result =>{
            console.log(result)
            return {...result._doc};
        }).catch(err =>{
            throw err;
        })
        }



},       
};
module.exports = {resolvers};