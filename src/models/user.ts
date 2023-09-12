import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  INVESTOR = "investor",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { length: 50 })
  firstName: string;

  @Column("varchar", { length: 50 })
  lastName: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.INVESTOR,
  })
  role: UserRole;

  @Column()
  isActive: boolean;
}
