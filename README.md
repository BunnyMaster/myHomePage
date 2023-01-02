# `webpack`初始化

~~~bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server prettier eslint-plugin-prettier eslint-config-prettier
npm i -g ts-node typescript nodemon
npm install -D tslib @types/node 
npm i -D chalk html-webpack-plugin clean-webpack-plugin webpackbar
npm i -D raw-loader css-loader ts-loader style-loader sass-loader less-loader html-loader sass-loader sass webpack less 
npm i -D typescript ts-loader
~~~

~~~json
{
   "dev": "webpack-dev-server --devtool eval --progress --color --profile --hot --config ./config/02webpack.config.js --open",   
}
~~~

## prettierrc

~~~js
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 180,
  "tabWidth": 2,
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "vueIndentScriptAndStyle": false
}
~~~

## tsconfig.json
