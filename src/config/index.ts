import path from "path";
import dotenv from "dotenv";

const envRootPath = path.resolve(process.cwd(), ".env");
dotenv.config({ path: `${envRootPath}` });

export default {
  port: process.env.PORT,
  host: process.env.HOST,
  basePath: process.env.BASE_PATH,
  mongoUri: process.env.MONGO_URI
};
