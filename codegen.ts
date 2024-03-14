import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: "**/*.{tsx,ts}",
  generates: {
    "./gql/": {
      preset: "client",
    },
  },
};

export default config;
