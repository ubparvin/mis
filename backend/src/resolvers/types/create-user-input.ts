import { CivilStatus, Gender, UserRoleCode } from "../../types";
import { InputType, Field } from "type-graphql";
import { BeneficiaryInput } from "./beneficiary-input";

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  middleName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  suffix: string;

  @Field()
  email: string;

  @Field()
  telephone: string;

  @Field()
  mobile: string;

  @Field()
  homeAddress: string;

  @Field()
  provincialAddress: string;

  @Field()
  gender: Gender;

  @Field()
  civiStatus: CivilStatus;

  @Field()
  dateOfBirth: Date;

  @Field()
  placeOfBirth: string;

  @Field()
  position: string;

  @Field()
  dateHired: Date;

  @Field()
  contactPerson: string;

  @Field()
  contactPersonNumber: string;

  @Field()
  SSS: string;

  @Field()
  philHealth: string;

  @Field()
  HDMF: string;

  @Field()
  TIN: string;

  @Field()
  role: UserRoleCode;

  @Field(() => [BeneficiaryInput])
  beneficiaries: BeneficiaryInput[];
}
