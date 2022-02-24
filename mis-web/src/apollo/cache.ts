import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userRole: {
          read() {
            return userRole();
          },
        },
      },
    },
  },
});

export const userRole = makeVar<string>(localStorage.getItem("role") || "EM");
