var MAXIMUM_STATEMENTS = 15;
var MAXIMUM_STATEMENTS_PER_LINE = 1;
var MAXIMUM_COMPLEXITY = 5;
var MAXIMUM_PARAMETERS = 4;

module.exports = {
  rules: {
    "max-statements": [
      "off",
      {
        max: MAXIMUM_STATEMENTS,
      },
    ],
    "max-statements-per-line": [
      "off",
      {
        max: MAXIMUM_STATEMENTS_PER_LINE,
      },
    ],
    complexity: [
      "off",
      {
        max: MAXIMUM_COMPLEXITY,
      },
    ],
    "max-params": [
      "off",
      {
        max: MAXIMUM_PARAMETERS,
      },
    ],
    "no-empty": [
      "off",
      {
        allowEmptyCatch: false,
      },
    ],
    "no-extra-semi": "off",
    "no-empty-function": [
      "off",
      {
        allow: [],
      },
    ],
    "no-unused-expressions": [
      "off",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    "no-unused-vars": [
      "off",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "all",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        caughtErrors: "none",
      },
    ],
    "no-magic-numbers": [
      "off",
      {
        ignore: [0, 1],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: true,
      },
    ],
  },
};
