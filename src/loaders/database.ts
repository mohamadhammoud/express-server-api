import { dbConfig } from "../config";
import Database from "../database";
import { User } from "../models/user";

class DatabaseLoader {
  constructor() {
    new Database({
      type: dbConfig.development.dialect,
      host: dbConfig.development.host,
      port: dbConfig.development.port,
      username: dbConfig.development.username,
      password: dbConfig.development.password,
      database: dbConfig.development.database,
      entities: [User],
    });
  }
}

export default DatabaseLoader;
