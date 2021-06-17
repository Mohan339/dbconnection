
const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const {  graphqlUploadExpress } = require('graphql-upload');
const cors  = require("cors")
const {join} = require("path")
const mongoose = require("mongoose")


const {typeDefs} = require("./graphql/schema/typeDefs");
const {resolvers}= require("./graphql/resolver/resolvers");


const corsOption ={
    origin:"http://localhost:3000", 
    Crendentials: true
}

const app = express();




app.use(cors());



const server = new ApolloServer(
   {    uploads:false,
       typeDefs, resolvers}

    );
app.use(graphqlUploadExpress())
app.use(express.static(join(__dirname,'./uploads' )))

server.applyMiddleware({app,cors:false});

mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb+srv://logincred:passwd@cluster0.slvqd.mongodb.net/HRMS?retryWrites=true&w=majority",
{useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex:true,
useFindAndModify:false})

app.listen({port:4000}, () =>{
        console.log(`serve is ready at http://localhost:4000`)
    })  


