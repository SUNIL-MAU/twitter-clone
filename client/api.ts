import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () =>
      window.localStorage.getItem("__twitter_token__")
        ? {
            Authorization: isClient
              ? `Bearer ${window.localStorage.getItem("__twitter_token__")}`
              : "",
          }
        : { Authorization: "" },
  }
);
