import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

import database from "./database";

console.log("Hello World");

new database();
