import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import dbConfig from "../config/database";
import environment from "./environment";

export { dbConfig, environment };
