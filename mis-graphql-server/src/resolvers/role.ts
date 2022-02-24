import { Role } from "../entities/Role";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { UserRole, UserRoleCode } from "../types";

@InputType()
export class RoleInputType {
  @Field()
  code: UserRoleCode;

  @Field()
  name: UserRole;
}

@Resolver(Role)
export class RoleResolver {
  @Query(() => [Role])
  async roles() {
    return Role.find();
  }

  @Mutation(() => Role)
  async createRole(@Arg("options") options: RoleInputType): Promise<Role> {
    return Role.create({
      code: options.code,
      name: options.name,
    }).save();
  }
}
