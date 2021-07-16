const express = require("express");

// Middlewares
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

class GraphQLExampleServer {

    constructor(config) {
        this.config = config;
        this.app = null;
    }

    init() {
        this.app = express();

        this.configureMiddlewares();
        this.configureCors();
        this.configureErrorHandling();
        this.configureGraphs();
    }

    /**
     * Start app server
     */
    start() {
        /**
         * listen to server.
         */
        let port = process.env.PORT || this.config.port;
        this.app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`App listening at http//[::]:${port} in ${process.env.NODE_ENV}`);
        });
    }

    /**
     * * Configurate cors
     */
    configureCors() {
        this.app.use(cors({
            methods: ["GET", "PUT", "POST", "DELETE"],
            preflightContinue: true,
            origin: true,
            credentials: false
        }));
    }

    /**
     * Configure middlewares
     */
    configureMiddlewares() {
        this.app.use(compression());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(morgan("common"));
        this.app.use(helmet());
    }

    /**
     * Configure api graphs
     */
    configureGraphs() {
        // Get graphs
        const userGraph = require("./graphs/UserGraph");
        const carGraph = require("./graphs/CarGraph");

        this.app.use(`${this.config.baseApi}/users`, userGraph);
        this.app.use(`${this.config.baseApi}/cars`, carGraph);
    }

    /**
     * Configure api errors
     */
    configureErrorHandling() {
        this.app.use(function (err, req, res, next) {
            res.status(500).send({ message: err.message });
        });
    }
}

module.exports = GraphQLExampleServer;