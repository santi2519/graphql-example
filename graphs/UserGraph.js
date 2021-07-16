const { graphqlHTTP } = require('express-graphql');

const UserSchema = require("../lib/graphql/schemas/UserSchema");

const userGraphHttp = graphqlHTTP({
    schema: UserSchema,
    graphiql: true
});

module.exports = userGraphHttp;