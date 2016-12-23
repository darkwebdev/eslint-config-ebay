# eslint-ebay
eBay Javascript linting configs for ESLint

## Installation
- `yarn global add eslint` (or `npm i -g eslint`)
- `yarn add --dev eslint-ebay` (or `npm i --save-dev eslint-ebay`)

## Configuration
Create `.eslintrc.json` file with the following content:
```
{
  "extends": [ "eslint-ebay" ],
  "rules": {
    your additional rules here
  }
}
```

## Run
```eslint .```

## Available configs to extend
- `eslint-ebay` (Latest ES8/2017 support)
- `eslint-ebay/node6` (ES7/2016 support)
- `eslint-ebay/node4` (~50% of ES6/2015 support)
- `eslint-ebay/legacy` (ES5 support)
