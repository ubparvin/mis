import { RelationToEmployee } from "src/types";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Beneficiary extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ManyToOne(() => User, (user) => user.beneficiaries)
  user: User;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  dateOfBirth: string;

  @Field()
  @Column({ type: "enum", enum: ["Spouse", "Child"] })
  relationToEmployee: RelationToEmployee;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
