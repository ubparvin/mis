export type Gender = "Male" | "Female";

export type UserRole = "Super Admin" | "Company Admin" | "Employee";

export type CivilStatus =
  | "Single"
  | "Married"
  | "Divorced"
  | "Separated"
  | "Widowed";

export type RelationToEmployee = "Spouse" | "Child";

export type UserRoleCode = "SA" | "CA" | "EM";

export type Beneficiary = {
  name: string;
  dateOfBirth: string;
  relationToEmployee: RelationToEmployee;
};

export type User = {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  email: string;
  telephone: string;
  mobile: string;
  homeAddress: string;
  provincialAddress: string;
  gender: Gender;
  civilStatus: CivilStatus;
  dateOfBirth: string;
  placeOfBirth: string;
  position: string;
  dateHired: string;
  contactPerson: string;
  contactPersonNumber: string;
  SSS: string;
  philHealth: string;
  HDMF: string;
  TIN: string;
  role: UserRoleCode;
  beneficiaries: Beneficiary[];
};
