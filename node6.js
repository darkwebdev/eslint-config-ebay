module.exports = {
  "extends": [
    "airbnb-base",
    "./base"
  ].map(require.resolve),
  "parserOptions": {
    "ecmaVersion": 2016
  },
  "rules": {
    "node/no-unsupported-features": [ "error", {
      "version": 6
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
