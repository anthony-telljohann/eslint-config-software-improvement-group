module.exports = {
  extends: ["./rules/software-improvement-group"].map(require.resolve),
  rules: {
    "max-statements": "error",
    "max-statements-per-line": "error",
    complexity: "error",
    "max-params": "error",
    "no-empty": "error",
    "no-extra-semi": "error",
    "no-unused-expressions": "error",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: [],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "all",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        caughtErrors: "none",
      },
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignore: [0, 1],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
  },
};
