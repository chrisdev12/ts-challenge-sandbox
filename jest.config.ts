import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  moduleFileExtensions: ["ts", "js"],
  verbose: true,
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },

  rootDir: "src",
  testMatch: ["**/*.test.ts", "/**/*.spec.ts"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
};

export default config;
