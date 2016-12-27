# eslint-config-ebay-common
eBay Javascript linting configs for ESLint

## Installation
- `yarn global add eslint` (or `npm i -g eslint`)
- `yarn add --dev eslint-config-ebay-common` (or `npm i --save-dev eslint-config-ebay-common`)

## Configuration
Create `.eslintrc.json` file with the following content:
```
{
  "extends": [ "eslint-config-ebay-common" ],
  "rules": {
    your additional rules here
  }
}
```

## Run
```eslint .```

## Available configs to extend
- `eslint-config-ebay-common` (Latest ES8/2017 support)
- `eslint-config-ebay-common/node6` (ES7/2016 support)
- `eslint-config-ebay-common/node4` (~50% of ES6/2015 support)
- `eslint-config-ebay-common/legacy` (ES5 support)
