# eslint-config-ebay
eBay Javascript linting configs for ESLint

## Installation
- `yarn global add eslint` (or `npm i -g eslint`)
- `yarn add --dev eslint-config-ebay` (or `npm i --save-dev eslint-config-ebay`)

## Configuration
Create `.eslintrc.json` file with the following content:
```
{
  "extends": [ "eslint-config-ebay/node6" ],
  "rules": {
    your additional rules here
  }
}
```

## Run
```eslint .```

## Available rulesets
- `eslint-config-ebay/node6` (ES6 support)
- `eslint-config-ebay/node4` (~50% of ES6 support)
- `eslint-config-ebay/legacy` (ES5 support)
