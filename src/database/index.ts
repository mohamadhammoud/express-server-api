import { DataSource } from "typeorm";

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

type DatabaseCredentials = {
  type: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};
class Database {
  public AppDataSource: DataSource;

  constructor({
    type,
    host,
    port,
    username,
    password,
    database,
  }: DatabaseCredentials) {
    this.AppDataSource = new DataSource({
      type,
      host,
      port,
      username,
      password,
      database,
    });

    this.initialize();
  }

  async initialize() {
    try {
      await this.AppDataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }
}

export default Database;
