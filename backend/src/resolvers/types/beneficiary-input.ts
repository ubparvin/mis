import { RelationToEmployee } from "src/types";
import { InputType, Field } from "type-graphql";

@InputType()
export class BeneficiaryInput {
  @Field()
  name: string;

  @Field()
  dateOfBirth: string;

  @Field()
  relationToEmployee: RelationToEmployee;
}
