const {buildSchema} = require("graphql");

module.exports = buildSchema(`
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

            `)