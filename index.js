module.exports = {
  "extends": [
    "airbnb-base",
    "./base"
  ].map(require.resolve),
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
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
