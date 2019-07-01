# vue-webpack-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

notes:
1、error message ： [Vue warn] Avoid using non-primitive value as key, use string/number value instead.
  原因：for 循环时:key 指定的值不对。 :key相当于是索引的作用，提高循环性能，如果循环量较小，不写也可以的。
  <li v-for="item in productList" :key="item.productId">
2、渲染图片：v-bind:src
   img v-bind:src="item.productImage" alt="烟"
 
 3、ESLint:提供插件化的JavaScript代码检查工具。
 优先级则是按照以下顺序（.eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json）
 规则的等级："off" 或者 0 ：关闭规则 ;
 "warn" 或者 1 ：打开规则，并且作为一个警告（不影响exit code）; "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）



 