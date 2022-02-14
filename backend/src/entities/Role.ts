import { UserRole, UserRoleCode } from "../types";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Role extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column({ type: "enum", enum: ["SA", "CA", "EM"] })
  code: UserRoleCode;

  @Field()
  @Column({ type: "enum", enum: ["Super Admin", "Company Admin", "Employee"] })
  name: UserRole;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
