/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import config from "../config";

const connect = () => {
  mongoose.Promise = global.Promise;

  mongoose.connect(config.mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10
  }, err => {
    if (err) {
      console.error("ERROR: An error happened whilst connecting to mongodb", {
        err
      });
    } else {
      console.info("INFO: Connect to mongodb successfully.");
    }
  });
};

const disconnect = (done: any) => {
  mongoose.disconnect(done);
};

export {
  connect,
  disconnect
};
