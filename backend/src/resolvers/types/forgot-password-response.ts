import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./field-error";

@ObjectType()
export class ForgotPasswordResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field()
  success: boolean;
}
