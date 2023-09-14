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
  entities: any[];
};
class Database {
  public appDataSource: DataSource;

  constructor({
    type,
    host,
    port,
    username,
    password,
    database,
    entities,
  }: DatabaseCredentials) {
    this.appDataSource = new DataSource({
      type,
      host,
      port,
      username,
      password,
      database,
      entities,
      synchronize: true, // Enable schema synchronization
      // logging: true, // Enable query logging
    });

    this.initialize();
  }

  async initialize() {
    try {
      if (this.appDataSource) {
        await this.appDataSource?.initialize();
      }

      if (this.appDataSource?.isInitialized) {
        console.log("Data Source has been initialized!");
      }
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }

  async destroy() {
    try {
      if (this.appDataSource?.isInitialized) {
        await this.appDataSource.destroy();
        console.log("Data Source has been destroyed!");
      }
    } catch (err) {
      console.error("Error during Data Source destroying", err);
    }
  }
}

export default Database;
