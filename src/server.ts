/* eslint-disable @typescript-eslint/no-explicit-any */
import Hapi from "@hapi/hapi";
import routes from "./routes";
import plugins from "./plugins";
import config from "./config";
import { connect } from "./util/mongodb";
import logger from "./util/logger";

const server = async () => {
    const server = new Hapi.Server({
        port: config.port,
        host: config.host,
        "routes": {
            "cors": {
                "origin": ["http://localhost:3000"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });
    server.realm.modifiers.route.prefix = "/api";
    server.route(routes);
    await server.register(plugins as any);
    await server.start();
    console.info("INFO: Server running on %s/documentation", server.info.uri);
    connect();
};

process.on("unhandledRejection", (error) => {
    console.log(error);
    logger.error(error);
    process.exit(1);
});
server();
export default server;
