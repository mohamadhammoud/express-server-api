import { User } from "../models/user"; // Import your User entity

import DatabaseLoader from "../loaders/database";
class AuthController {
  private databaseLoader;
  private dataSource;

  constructor() {
    this.databaseLoader = DatabaseLoader.getInstance();
    this.dataSource = this.databaseLoader.getDataSource();
  }

  async login() {
    const user = await this.dataSource.manager.findOneBy(User, {
      id: 1,
    });

    if (user != null) {
      user!.firstName = "Umed";
    }

    await this.dataSource.manager.save(user);
  }
}

export default new AuthController();
