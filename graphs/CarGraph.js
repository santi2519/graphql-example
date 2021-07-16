const { graphqlHTTP } = require('express-graphql');

const CarSchema = require("../lib/graphql/schemas/CarSchema");

const carGraphHttp = graphqlHTTP({
    schema: CarSchema,
    graphiql: true
});

module.exports = carGraphHttp;