import { DataSource } from "typeorm";

import dbConfig from "../config/database";

type SupportedDatabaseType =
  | "postgres"
  | "mysql"
  | "mariadb"
  | "cockroachdb"
  | "sqlite"
  | "mssql"
  | "sap"
  | "oracle"
  | "cordova"
  | "nativescript"
  | "react-native"
  | "sqljs"
  | "mongodb"
  | "aurora-mysql"
  | "spanner";

class Database {
  constructor() {
    const AppDataSource = new DataSource({
      type: dbConfig.development.dialect as any,
      host: dbConfig.development.host,
      port: dbConfig.development.port,
      username: dbConfig.development.username,
      password: dbConfig.development.password,
      database: dbConfig.development.database,
    });

    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }
}

export default Database;
