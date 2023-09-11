import { dbConfig } from "./config";
import database from "./database";

new database({
  type: dbConfig.development.dialect,
  host: dbConfig.development.host,
  port: dbConfig.development.port,
  username: dbConfig.development.username,
  password: dbConfig.development.password,
  database: dbConfig.development.database,
});
