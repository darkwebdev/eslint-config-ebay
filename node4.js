module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
    "./base"
  ].map(require.resolve),
  "parserOptions": {
    "ecmaVersion": 2015
  },
  "rules": {
    "node/no-unsupported-features": [ "error", {
      "version": 4
    }],

    "import/no-extraneous-dependencies": [ "error", {
      "devDependencies": [
        "test/**"
      ]
    }],
    "object-shorthand": "warn",
    "prefer-arrow-callback": [ "warn", {
      "allowNamedFunctions": true
    }],
    "prefer-const": [ "warn" ]
  }
};
