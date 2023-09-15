import { User } from "../models/user"; // Import your User entity

import DatabaseLoader from "../loaders/database";

class UserController {
  private databaseLoader;
  private dataSource;

  constructor() {
    this.databaseLoader = DatabaseLoader.getInstance();
    this.dataSource = this.databaseLoader.getDataSource();
  }

  async getUsers() {
    const users = await this.dataSource.manager.find(User);

    return users;
  }
}

export default new UserController();
