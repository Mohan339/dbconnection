const Projectschema = require("../../models/projects");
const Employeeschema = require("../../models/employee");
const Traineeschema = require("../../models/trainee") ;
const ClientSchema = require("../../models/client");
const PreClientSchema = require("../../models/pre-client");
const {_} = require("lodash")
const {join, parse} = require("path")
const {createWriteStream}=  require("fs")
const moongose = require("mongoose");
const { Stream } = require("stream");
const {GraphQLUpload} = require("graphql-upload");

const EventSchema = require("../../models/events")


// custom resolvers defind vijay
const employee = (employee_name)=>{
    return Employeeschema.find(employee_name)
    .then((employee) => {
        return {...employee._doc,
            Employee_name: employee.employee_name,
             clients: client.bind(this, employee._doc.createdEvents)}
    })
    .catch(err => {
        throw err;
    })
}

const client = (employee_name) =>{
    return ClientSchema.find(employee_name)
    .then((client) => {
        return client.map(cli=>{
            return {...cli._doc,
                Employee_name: cli.employee_name, 
                employees : employee.bind(this, cli.employees )
            };
        }) ;
    })
    .catch(err => {
        throw err;
    })
}


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

    employeeDetails:async()=>{
        let emp = await Employeeschema.find()
        return emp
    },
    // employeeDetails: ()=> {
    //     return Employeeschema.find()
    //         .then(employeeDetails => {
    //         return employeeDetails.map(employee => {
    //             return { ...employee._doc, 
    //                 Employee_name: employee.Employee_name, 
    //                 clients: client.bind(this, employee._doc.clients) };
    //         });
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     });
    // },
     
    projectDetails: () => {
    
             return Projectschema.find()
           
            .then(projectDetails =>{
               return projectDetails.map(x => {
                  return { ...x._doc,                           
                  };
                 });
                })
            .catch(err =>{
             console.log(err);
         });
         },
         
    projectHead:async(parent,{selectTeamLead}) => {
             let project= await Projectschema.find({selectTeamLead})
             return project
        },

        // project:async(parent,{projectName})=>{
        //     let name = await Projectschema.findOne({projectName})
        //     return name
           
        // },
    info :() =>{
             return "im image uploader"
         }, 
         
    clientDetails: ()=>{
             return ClientSchema.find()
         },
        preClientDetails: ()=>{
            return PreClientSchema.find()
        },
     
        client:async(parent,{Clientname})=>{
                let name = await ClientSchema.findOne({Clientname})
                return name
        },
        project:async(parent,{projectName} )=>{
                let pname= await Projectschema.findOne({projectName})
                return pname
        },
        projectRelClient:async(parent,{clientName})=>{
            let cname = await Projectschema.find({clientName})
            return cname
        },
        clientRelProject:async(parent,{ProjectsName})=>{
            let pname = await ClientSchema.findOne({ProjectsName})
            return pname
        },
        getEvents:async(parent,{Date})=>{
            let eventname = await EventSchema.find({Date})
            return eventname
    }
       
    },
   

    Upload:GraphQLUpload,


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
            current_salary: args.employeeInput.current_salary,
            employe_Image:args.employeeInput.employe_Image,
            designation:args.employeeInput.designation,
            description: args.employeeInput.description,
            Aadhar_Number: args.employeeInput.Aadhar_Number,
            passportNumber:args.employeeInput.passportNumber,
            resume: args.employeeInput.resume,
            clients : "vijay kumar"              
           
        });
        let createdEmp;
        return employee.save()
         .then(result => {
          
            console.log(result);
            createdEmp = {...result._doc}
            return ClientSchema.find("vijay kumar")
        })
        .then(client => {
            client.employees.push(employee);
            return client.save(); 
        })
        .then(result =>{ 
                return createdEmp  
            }
        ).catch(err=> {
            console.log(err);
            throw err;
        });
        
    } ,
    
        // createEmployee:async(parent, args)=>{
        //     let result = await Employeeschema.create(args.employeeInput)
        //     return result
        // },

        createProject: async(parent,args) => {
            let result = await Projectschema.create(args.pInput)            
            return result
        },

        editTraineeById: async(parent, {UpdateTrainee,TraineeId})=>{
            const query = {TraineeId:TraineeId}
            let editTraine = await Traineeschema.findOneAndUpdate(query,{...UpdateTrainee})
            return editTraine
        },
        deleteTraineeById:async(parent,{TraineeId})=>{
         
            let deleteTraine = await Traineeschema.findOneAndDelete({TraineeId:TraineeId})
            return{
                name:deleteTraine.TraineeId,
                message:"deleted Trainee successfully",
                success:true }
         
        },
        editEmployeeByID: async(parent,{updateEmployee,Employee_name})=>{
            let query = {Employee_name:Employee_name}
                let empEdit= await Employeeschema.findOneAndUpdate(query,
                    {...updateEmployee, new:true})
                return empEdit
                },
        deleteEmployeeByID:async(parent,{Employee_name})=>{
                let deleteemp = await Employeeschema.findOneAndDelete({Employee_name:Employee_name})
                return {
                    name: deleteemp.Employee_name,
                    message:"successfull deleted employee",
                    success: true
                }
        },
        editByprojectID : async(parent, {updateproject,id})=>{
            let query = {id:id}
            let edit = await Projectschema.findOneAndUpdate(query,{...updateproject})
            return edit
        },
        
         
        deleteproject :async(parent, {id} ) =>{
            let deleteone = await Projectschema.findOneAndDelete({id:id})
            return{
                id: deleteone.id,
                message:"succesfully deleted one project",
                success: true
                  }
        },
        
        imageUploader :async(parent, {file})=>{
            let {filename, createReadStream} = await file
            let stream = createReadStream();
            
            let {ext,name, }=parse(filename);

            name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ','_')
            let serverFile = join(__dirname, `../../uploads/${name}-${Date.now()}${ext}`)

            let writeStream = await createWriteStream(serverFile);
            await stream.pipe(writeStream);

            let url ="http://localhost:4000"
            serverFile =`${url}/${serverFile.split('uploads')[1]}`
            console.log(serverFile)
            return serverFile
       
        },

        createClient:  async(parent,args) => {
            let result = await ClientSchema.create(args.clientInput)
            return result     
        },

        createPreClient:  async(parent,args) => {
            let result = await PreClientSchema.create(args.pCInput)
            return result     
        },

        createEvent: async(parent, args)=>{
            let eventresult =  new EventSchema({
                Title: args.eventInput.Title,
                Description: args.eventInput.Description, 
                StartTime: args.eventInput.StartTime,
                EndTime: args.eventInput.EndTime,
                Creator: args.eventInput.Creator,
                Date: new Date().toISOString()
            });
            return eventresult.save().then(result=>{
                    return{...result._doc}
                }
            ).catch(err =>{
                throw err
            })
        }, 
            
},


// custom resolver 

        Project:{
            client(parent){
                return  ClientSchema.findOne({Clientname:parent.clientName}) 
        
        },
    },
        Client: {                        
            projects(parent,args){
                
            //    let ProjectsName =args
                let result = Projectschema.find({projectName:parent.ProjectsName})
                
                // let x =()=>{ 
                //    return x.ProjectsName.includes(parent.projectName)
                // }
                // let resultproject = ClientSchema
                // .filter(x)
                return result
            
            }
        },





}

module.exports = {resolvers};