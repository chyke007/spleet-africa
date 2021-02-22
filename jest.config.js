module.exports = {
    collectCoverageFrom: [
      "server/**/*.ts",
      "!server/**/*.test.ts",
      "!/node_modules/",
    ],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "**/test/**/*.test.(ts|js)"
    ]
  };
  