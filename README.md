# eslint-config-marko-tester
Marko-tester Javascript linting configs for ESLint

## Installation
```
yarn add --dev eslint eslint-config-marko-tester
```
or
```
npm i --save-dev eslint eslint-config-marko-tester
```

## Configuration
Create `.eslintrc.json` file with the following content:
```
{
  "extends": [ "marko-tester" ],
  "rules": {
    your additional rules here
  }
}
```

## Run
```
eslint .
```

## Available configs to extend
- `marko-tester` (Latest ES8/2017 support)
- `marko-tester/node6` (ES7/2016 support)
- `marko-tester/node4` (~50% of ES6/2015 support)
- `marko-tester/legacy` (ES5 support)
