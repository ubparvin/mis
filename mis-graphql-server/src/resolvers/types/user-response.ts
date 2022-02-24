import { User } from "../../entities/User";
import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./field-error";

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  token?: string;
}
