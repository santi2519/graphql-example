const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLNonNull, GraphQLInt } = require("graphql");
const { UserModel } = require("../models/UserModel");
const UserController = require("../../../controllers/UserController");

const RootUserQuery = new GraphQLObjectType({
    name: "RootUserQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserModel),
            resolve: async () => {
                return await UserController.getUsers()
            }
        },
        user: {
            type: UserModel,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: async (parent, args) => {
                return await UserController.getUserById(args.id)
            }
        }
    }
});

const UserSchema = new GraphQLSchema({
    query: RootUserQuery
});

module.exports = UserSchema;