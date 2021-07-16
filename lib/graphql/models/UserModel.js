const {  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { CarModel } = require("./CarModel");

const UserModel = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { 
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        cars: { 
            type: new GraphQLList(CarModel)
        },
    }
});

module.exports.UserModel = UserModel;