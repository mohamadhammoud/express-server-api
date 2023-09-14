import { DataSource } from "typeorm";
import { dbConfig } from "../config";
import { Company } from "../models/company";
import { User } from "../models/user";

class DatabaseLoader {
  private static instance: DatabaseLoader;
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: dbConfig.development.dialect as any,
      host: dbConfig.development.host,
      port: dbConfig.development.port,
      username: dbConfig.development.username,
      password: dbConfig.development.password,
      database: dbConfig.development.database,
      entities: [User, Company],
      synchronize: true, // Enable schema synchronization
      // logging: true, // Enable query logging
    });

    this.initialize();
  }

  async initialize() {
    try {
      if (this.dataSource) {
        await this.dataSource?.initialize();

        DatabaseLoader.instance = this;
      }

      if (this.dataSource?.isInitialized) {
        console.log("Data Source has been initialized!");
      }
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
  }

  public static getInstance(): DatabaseLoader {
    if (!DatabaseLoader.instance) {
      DatabaseLoader.instance = new DatabaseLoader();
    }
    return DatabaseLoader.instance;
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }
}

export default DatabaseLoader;
