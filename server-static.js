process.env.NODE_CONFIG_DIR = __dirname + "/lib/config/";

const config = require("config");
const GraphQLExampleServer = require("./server");

const server = new GraphQLExampleServer(config);

server.init(config);
server.start(config);