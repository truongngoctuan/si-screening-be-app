import Inert from "inert";
import Vision from "vision";
import HapiSwagger from "hapi-swagger";
import config from "../config";

export default [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      basePath: config.basePath,
      info: {
        title: "template title",
        version: "1.0.0",
      },
      securityDefinitions: {
        jwt: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
  }
];
