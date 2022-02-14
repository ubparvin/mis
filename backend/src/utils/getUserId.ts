import { ApolloError, ForbiddenError } from "apollo-server-core";
import jwt from "jsonwebtoken";
import { AuthTokenPayload, MyContext } from "../types";

export const getUserId = async (context: MyContext) => {
  const authorization = context.req.headers.authorization;
  if (!authorization) {
    throw new ForbiddenError("Authorization token not found!");
  }
  let userId;
  const token = authorization.replace("Bearer ", "");
  try {
    const payload = jwt.verify(
      token,
      process.env.APP_SECRET
    ) as AuthTokenPayload;

    userId = payload.userId;
  } catch (err) {
    throw new ApolloError("Internal server error!");
  }
  return userId;
};
