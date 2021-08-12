/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
// https://stackoverflow.com/questions/13607732/in-memory-mongodb-for-test
// Extend the default timeout so MongoDB binaries can download
jest.setTimeout(60000);

const opts = { useNewUrlParser: true };
// List your collection names here
const COLLECTIONS = [];

class DBManager {
  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer();
    this.connection = null;
  }

  async start() {
    const mongoUri = await this.server.getUri();
    this.db = await mongoose.connect(mongoUri, opts, (err) => {
    if (err) console.error(err);
  });
  }

  async stop() {
    await mongoose.disconnect();
    this.db = undefined;
    await this.server.stop();
  }

  cleanup() {
    return Promise.all(COLLECTIONS.map(c => this.db.collection(c).remove({})));
  }
}

module.exports = DBManager;