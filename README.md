# Webpack and Babel Starter
A starting foundation for your webpack and babel projects :star:

> Install babel-upgrade first before running install to update all the packages and run
```
# npx lets you run babel-upgrade without installing it locally 
npx babel-upgrade --write
 
# or install globally and run 
npm install babel-upgrade -g
babel-upgrade --write
```

## Install 
```
npm install
```

## Build Dev Version
```
npm run dev
```

## Build Production Version
```
npm run build
```

## Run Dev Server
```
npm run start
```

## Current Features
* ES6 Support with [Babel 7](https://babeljs.io/docs/en/v7-migration)
* Babel update script with [babel-upgrade](https://www.npmjs.com/package/babel-upgrade)

### Webpack Packages
* Webpack: 4.17.2
* Webpack-cli: 3.1.0
* Webpack-dev-server: 3.1.8

### Current Babel Versions
* @babel/core: 7.0.0
* @babel/preset-env: 7.0.0
* babel-loader: 8.0.0

> The dist folder will be automatically created when you run webpack
