import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://alert-eagle-45.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false}),
  headers: {
    "x-hasura-admin-secret":
      "643zyQRW9uqWdcQZnRyXDt20gepiv6wH3E2O1WE0yo9gFxkGogKSHPua7GlzSYLM",
  },
});
