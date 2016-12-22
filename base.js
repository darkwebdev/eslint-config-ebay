module.exports = {
  "plugins": [
    "mocha",
    "node"
  ],
  "parserOptions": {
    "sourceType": "commonjs"
  },
  "env": {
    "mocha": true,
    "node": true
  },
  "rules": {
    "node/no-deprecated-api": "warn",

    "array-bracket-spacing": 0,
    "comma-dangle": [ "error", "never" ],
    "complexity": [ "warn", 8 ],
    "func-names": 0,
    "global-require": 0,
    "no-console": [ "error", {
      "allow": [ "warn", "error" ]
    }],
    "no-param-reassign": [ "warn", {
      "props": true
    }],
    "no-use-before-define": [ "error", "nofunc" ],
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "vars-on-top": 0,

    "mocha/no-exclusive-tests": "error",
    "mocha/no-skipped-tests": "warn",
    "mocha/no-pending-tests": "warn",
    "mocha/handle-done-callback": "error",
    "mocha/no-synchronous-tests": 0,
    "mocha/no-global-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/valid-test-description": "error",
    "mocha/valid-suite-description": "error",
    "mocha/no-sibling-hooks": "error",
    "mocha/no-identical-title": "error",
    "mocha/max-top-level-suites": "warn",
    "mocha/no-nested-tests": "error"
  }
};
