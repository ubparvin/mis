import cryto from "crypto";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import mailer from "../utils/mailer";
import { User } from "../entities/User";
import { CreateUserInput } from "./types/create-user-input";
import { Role } from "../entities/Role";
import { Beneficiary } from "../entities/Beneficiary";
import { UserResponse } from "./types/user-response";
import { AuthTokenPayload, MyContext } from "../types";
import { UpdateUserInput } from "./types/update-user-input";
import { getUserId } from "../utils/getUserId";
import { AuthenticationError } from "apollo-server-core";
import { ForgotPasswordResponse } from "./types/forgot-password-response";
import { getUserEmail } from "../utils/getUserEmail";

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.headers.authorization) {
      return null;
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let authPayload;
    try {
      authPayload = jwt.verify(
        token,
        process.env.APP_SECRET
      ) as AuthTokenPayload;
    } catch (error) {
      console.log(error);
    }

    if (!authPayload?.userId) {
      return null;
    }

    return User.findOne(authPayload?.userId, {
      relations: ["role", "beneficiaries"],
    });
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("options") options: CreateUserInput
  ): Promise<UserResponse> {
    let user;
    try {
      const role = await Role.findOne({ where: { code: options.role } });
      const randomHex = cryto.randomBytes(8).toString("hex");
      const password = await argon2.hash(randomHex);

      let beneficiaries: Beneficiary[] = [];

      await Promise.all(
        options.beneficiaries.map(async (beneficiary) => {
          const newBeneficiary = await Beneficiary.create({
            ...beneficiary,
          }).save();
          return beneficiaries.push(newBeneficiary);
        })
      );

      user = await User.create({
        ...options,
        password,
        role,
        beneficiaries,
      }).save();

      await mailer({
        to: options.email,
        subject: "Welcome To TechByte",
        template: "welcome",
        templateVars: {
          signinLink: `${process.env.WEB_APP_HOST}`,
          email: options.email,
          password: randomHex,
        },
      });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return {
          errors: [
            {
              field: "email",
              message: "email is already in use",
            },
          ],
        };
      }
    }

    return {
      user,
    };
  }

  @Mutation(() => UserResponse)
  async signin(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    try {
      const user = await User.findOne({
        where: { email },
        relations: ["role", "beneficiaries"],
      });

      if (user?.isLock) {
        return {
          errors: [
            {
              field: "password",
              message:
                "Your account has been lock. Please contact your administrator.",
            },
          ],
        };
      }

      if (!user) {
        return {
          errors: [
            {
              field: "email",
              message: "Account not available",
            },
          ],
        };
      }

      const passwordMatch = await argon2.verify(user.password, password);

      if (!passwordMatch) {
        if (user.loginAttempts + 1 > 2) {
          user.isLock = true;
          user.loginAttempts = user.loginAttempts + 1;

          await user.save();
          return {
            errors: [
              {
                field: "password",
                message:
                  "Your account has been lock. Please contact your administrator.",
              },
            ],
          };
        }

        user.loginAttempts = user.loginAttempts + 1;

        await user.save();

        return {
          errors: [
            {
              field: "password",
              message: "Invalid password. Click here to reset your password",
            },
          ],
        };
      }

      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
        expiresIn: "24h",
      });

      return {
        user,
        token,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("options") options: UpdateUserInput,
    @Ctx() context: MyContext
  ): Promise<User> {
    const userId = await getUserId(context);
    const user = await User.findOne(userId, {
      relations: ["role", "beneficiaries"],
    });

    if (!user) {
      throw new AuthenticationError("User not found!");
    }

    for (const [updateKey, updateValue] of Object.entries(options)) {
      (user as any)[updateKey] = updateValue;
    }

    await user.save();

    return user;
  }

  @Mutation(() => ForgotPasswordResponse)
  async forgotPassword(
    @Arg("email") email: string
  ): Promise<ForgotPasswordResponse> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message: "Email is incorrect",
          },
        ],
        success: false,
      };
    }

    const token = jwt.sign({ userEmail: user.email }, process.env.APP_SECRET, {
      expiresIn: "24h",
    });

    await mailer({
      to: email,
      subject: "Password Reset Requested for your TechByte Account",
      template: "forgot-password",
      templateVars: {
        resetPasswordLink: `${process.env.WEB_APP_HOST}/reset-password/${token}`,
      },
    });

    return {
      success: true,
    };
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("newPassword") newPassword: string,
    @Ctx() context: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length < 8) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "Password length must be greater than or equal to 8",
          },
        ],
      };
    }

    const userEmail = await getUserEmail(context);
    const user = await User.findOne({
      where: { email: userEmail },
      relations: ["role", "beneficiaries"],
    });

    if (!user) {
      throw new AuthenticationError("Invalid token!");
    }

    user.password = await argon2.hash(newPassword);

    await user.save();

    return {
      user,
    };
  }
}
