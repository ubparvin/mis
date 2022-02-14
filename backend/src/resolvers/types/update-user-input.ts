import { CivilStatus, Gender, UserRoleCode } from "../../types";
import { InputType, Field } from "type-graphql";
import { BeneficiaryInput } from "./beneficiary-input";

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  suffix?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  telephone?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  homeAddress: string;

  @Field({ nullable: true })
  provincialAddress?: string;

  @Field({ nullable: true })
  gender?: Gender;

  @Field({ nullable: true })
  civiStatus?: CivilStatus;

  @Field({ nullable: true })
  dateOfBirth?: Date;

  @Field({ nullable: true })
  placeOfBirth?: string;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  dateHired?: Date;

  @Field({ nullable: true })
  contactPerson?: string;

  @Field({ nullable: true })
  contactPersonNumber?: string;

  @Field({ nullable: true })
  SSS?: string;

  @Field({ nullable: true })
  philHealth?: string;

  @Field({ nullable: true })
  HDMF?: string;

  @Field({ nullable: true })
  TIN?: string;

  @Field({ nullable: true })
  role?: UserRoleCode;

  @Field(() => [BeneficiaryInput], { nullable: true })
  beneficiaries?: BeneficiaryInput[];
}
