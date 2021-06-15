
const express = require("express");
const {ApolloServer, makeExecutableSchema,} = require("apollo-server-express");
const{applyMiddleware} = require("graphql-middleware");
const bodyParser = require("body-parser")
const cors  = require("cors")




const mongoose = require("mongoose")

const {typeDefs} = require("./graphql/schema/typeDefs");
const {resolvers}= require("./graphql/resolver/resolvers")


const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer(
   {typeDefs, resolvers}

    );
const corsOption ={
    origin:"http://localhost:3000", 
    Crendentials: true
}
server.applyMiddleware({app, cors: false});
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb+srv://logincred:passwd@cluster0.slvqd.mongodb.net/HRMS?retryWrites=true&w=majority",
{useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex:true,
useFindAndModify:false})
const port = 4000;
app.listen(port, () =>{
        console.log("serve is up")
    })  


