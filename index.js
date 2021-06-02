const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {buildSchema} = require("graphql");
const bodyParser  = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


const Login = require("./models/login");

const app = express();
app.use(bodyParser.json());

app.use("/graphql",
        graphqlHTTP({
            schema: buildSchema(`
            type User {
                email: String!
                password: String
            }

            input UserInput {
                email: String!
                password: String!
            }

            type RootQuery {
                userId: [User]
            }

            type Mutation {
                createUser(userInput: UserInput) : User
            }

            schema {
                query: RootQuery
                mutation: Mutation
            }

            `),
            rootValue:{
                userId: () => {
                    return Login.find().then(userId => {
                        return userId.map(login => {
                        return {...login._doc,
                            password: null,
                                   _id:login.id};
                        })
                    })
                    .catch(err => {
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
            },       
        graphiql : true
    })
);

const port = 2021;

mongoose.connect("mongodb+srv://logincred:passwd@cluster0.slvqd.mongodb.net/HRMS?retryWrites=true&w=majority",
{useNewUrlParser:true, useUnifiedTopology:true}).then(res =>{
    app.listen(port, ()=>{
        console.log("vk is sad beacuse of dawg corrected my aal :/")
    })
}).catch(err =>{
    console.log("err")
})

