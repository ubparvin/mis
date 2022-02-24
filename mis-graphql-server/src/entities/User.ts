import { Gender, CivilStatus } from "../types";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Beneficiary } from "./Beneficiary";
import { Role } from "./Role";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  middleName: string;

  @Field()
  @Column()
  lastName: string;

  @Field({ nullable: true })
  @Column()
  suffix: string;

  @Field()
  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: false })
  isLock: boolean;

  @Column({ default: 0 })
  loginAttempts: number;

  @Column()
  @Field()
  @Column({ nullable: true })
  telephone: string;

  @Field()
  @Column({ nullable: true })
  mobile: string;

  @Field()
  @Column()
  homeAddress: string;

  @Field()
  @Column()
  provincialAddress: string;

  @Field()
  @Column({ type: "enum", enum: ["Male", "Female"] })
  gender: Gender;

  @Field()
  @Column({
    type: "enum",
    enum: ["Single", "Married", "Divorced", "Separated", "Widowed"],
  })
  civilStatus: CivilStatus;

  @Field()
  @Column({ type: "datetime" })
  dateOfBirth: Date;

  @Field()
  @Column()
  placeOfBirth: string;

  @Field()
  @Column()
  position: string;

  @Field()
  @Column({ type: "datetime" })
  dateHired: Date;

  @Field()
  @Column()
  contactPerson: string;

  @Field()
  @Column()
  contactPersonNumber: string;

  @Field()
  @Column()
  SSS: string;

  @Field()
  @Column()
  philHealth: string;

  @Field()
  @Column()
  HDMF: string;

  @Field()
  @Column()
  TIN: string;

  @Field(() => Role)
  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @Field(() => [Beneficiary])
  @OneToMany(() => Beneficiary, (beneficiary) => beneficiary.user)
  beneficiaries: Beneficiary[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
