import { User } from "../models/user"; // Import your User entity

import DatabaseLoader from "../loaders/database";
class AuthController {
  private databaseLoader;
  private dataSource;

  constructor() {
    this.databaseLoader = DatabaseLoader.getInstance();
    this.dataSource = this.databaseLoader.getDataSource();
  }

  async signup({ firstName, lastName, email, password, role, company }: any) {
    const user = await this.dataSource.manager.create(User, {
      firstName,
      lastName,
      email,
      password,
      role,
      company,
    });

    await this.dataSource.manager.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.dataSource.manager.findOneBy(User, {
      email,
      password,
    });

    if (user != null) {
      user!.firstName = "Umed";
    }

    await this.dataSource.manager.save(user);
  }
}

export default new AuthController();
