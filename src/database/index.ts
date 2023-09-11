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
      if (this.AppDataSource) {
        await this.AppDataSource?.initialize();
      }

      if (this.AppDataSource?.isInitialized) {
        console.log("Data Source has been initialized!");
      }
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }

  async destroy() {
    try {
      if (this.AppDataSource?.isInitialized) {
        await this.AppDataSource.destroy();
        console.log("Data Source has been destroyed!");
      }
    } catch (err) {
      console.error("Error during Data Source destroying", err);
    }
  }
}

export default Database;
