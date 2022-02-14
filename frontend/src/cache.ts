import { InMemoryCache, makeVar } from "@apollo/client";

const cache: InMemoryCache = new InMemoryCache({
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

const userRole = makeVar<string>(localStorage.getItem("role") || "EM");

export { cache, userRole };
