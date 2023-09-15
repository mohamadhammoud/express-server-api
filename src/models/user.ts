import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Company } from "./company";

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

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Company, (company) => company.users, { nullable: true })
  company: Company | null;
}
