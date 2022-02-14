import { Request, Response } from "express";

export type MyContext = {
  req: Request;
  res: Response;
};

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

export type AuthTokenPayload = {
  userId?: number;
  userEmail?: string;
};
