const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const bodyParser  = require("body-parser");
const mongoose = require("mongoose");



const  graphqlSchema = require("./graphql/schema/index");
const graphqlResolver = require("./graphql/resolver/index")

const app = express();
app.use(bodyParser.json());

app.use("/graphql",
        graphqlHTTP({
            schema: graphqlSchema ,
            rootValue:graphqlResolver  ,       
             graphiql : true
    })
);

const port = 2021;

mongoose.connect("mongodb+srv://logincred:passwd@cluster0.slvqd.mongodb.net/HRMS?retryWrites=true&w=majority",
{useNewUrlParser:true, useUnifiedTopology:true}).then(res =>{
    app.listen(port, ()=>{
        console.log("server is up:/")
    })
}).catch(err =>{
    console.log("err")
})

