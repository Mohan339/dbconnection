const bcrypt = require("bcryptjs");
const Login = require("../../models/login");

module.exports = {
       userId: () => {
             return Login.find().then(userId => {
             return userId.map(login => {
             return { ...login._doc,
                        password: null,
                        _id:login.id   };
            })
            }).catch(err => {
                            console.log(err);
                        }
                    );
                },
          createUser: args => {
                return Login.findOne({email:args.userInput.email})
                .then(x =>{
                    if(x){
                        throw new Error("User already exists");
                    }                  
                        return bcrypt.hash(args.userInput.password, 12)
                    })                   
                    .then(hashedPassword => {
                        const login = new Login({
                            email: args.userInput.email,
                            password: hashedPassword
                    });
                    return login.save();
                    })
                    .then(result => {
                        return {
                            ...result._doc, password: null ,_id : result.id 
                    };})
                    .catch(err => {
                        throw err;
                    });
                    
                }
            }