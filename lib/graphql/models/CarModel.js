const { GraphQLObjectType, GraphQLString } = require('graphql');

const CarModel = new GraphQLObjectType({
    name: 'Car',
    fields: {
        color: {
            type: GraphQLString
        },
    }
});

module.exports.CarModel = CarModel;