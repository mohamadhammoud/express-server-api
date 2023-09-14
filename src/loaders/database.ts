import { DataSource } from "typeorm";
import { dbConfig } from "../config";
import Database from "../database";
import { Company } from "../models/company";
import { User } from "../models/user";

class DatabaseLoader {
  public database: Database;

  constructor() {
    this.database = new Database({
      type: dbConfig.development.dialect,
      host: dbConfig.development.host,
      port: dbConfig.development.port,
      username: dbConfig.development.username,
      password: dbConfig.development.password,
      database: dbConfig.development.database,
      entities: [User, Company],
    });
  }

  getDatabaseSource(): DataSource {
    return this.database.appDataSource;
  }
}

export default DatabaseLoader;
