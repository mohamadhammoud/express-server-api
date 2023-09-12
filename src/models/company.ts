import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { unique: true })
  address: string;

  @OneToMany(() => User, (user) => user.company)
  users: User[];
}
