import { DataSource } from "typeorm";
import { User } from "../models/user"; // Import your User entity

class AuthController {
  async login() {
    // const myDataSource = new DataSource();
    // const user = await myDataSource.manager.findOneBy(User, {
    //   id: 1,
    // });
    // user?.firstName = "Umed";
    // await myDataSource.manager.save(user);
  }
}

export default new AuthController();
