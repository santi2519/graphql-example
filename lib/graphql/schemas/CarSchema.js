const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLNonNull, GraphQLString } = require("graphql");
const { CarModel } = require("../models/CarModel");
const CarController = require("../../../controllers/CarController");

const RootCarQuery = new GraphQLObjectType({
    name: "RootCarQueryType",
    fields: {
        cars: {
            type: new GraphQLList(CarModel),
            resolve: async () => {
                return await CarController.getCars()
            }
        },
        car: {
            type: CarModel,
            args: {
                color: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: async (parent, args) => {
                console.log(args)
                return await CarController.getCarByColor(args.color)
            }
        }
    }
});

const CarSchema = new GraphQLSchema({
    query: RootCarQuery
});

module.exports = CarSchema;