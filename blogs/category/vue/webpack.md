---
title: webpack笔记
date: 2021-12-20
tags:
- webpack笔记
categories:
-  vue
---

# webpack 笔记

## 起步

1. 创建空工程

2. 在命令行执行npm命令： -y 表示自动确认不用再手动确认

   ```assembly
   npm init -y
   ```

   

3. 安装webpack

   ```assembly
   npm install webpack webpack-cli --save-dev
   ```

   

4. 创建 src/index.js

   ```js
   import _ from 'lodash'
   function component() {
       const element = document.createElement('div');
   
       // lodash（目前通过一个 script 引入）对于执行这一行是必需的
       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
       return element;
   }
   
   document.body.appendChild(component());
   ```

   

5. 创建dist/index.html

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
   <script src="main.js"></script>
   </body>
   </html>
   ```

   

6. 我们还需要调整 `package.json` 文件，以便确保我们安装包是 `private(私有的)`，并且移除 `main` 入口。这可以防止意外发布你的代码。

   ```yaml
   {
     "name": "untitled6",
     "version": "1.0.0",
     "description": "",
     "private": "true",   //修改此处，移除之前的"main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "build": "webpack"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "devDependencies": {
       "webpack": "^5.61.0",
       "webpack-cli": "^4.9.1"
     },
     "dependencies": {
       "lodash": "^4.17.21"
     }
   }
   
   ```

7. 执行命令进行打包

   ```ba
   $ npx webpack
   ```

   

8. 创建webpack.config.js配置文件
   mode: "development"  开发环境
   mode: "production"  生产环境

   ```js
   const path = require('path');
   
   module.exports = {
       entry: './src/index.js',
       output: {
           filename: 'main.js',
           path: path.resolve(__dirname, 'dist'),
       },
       mode: "development"
   };
   ```

   

9. 执行命令进行打包
   --config webpack.config.js 用来指定自定义名字的配置文件，如果使用的是webpack.config.js名字，则此参数可以省略

   ```bash
   $ npx webpack --config webpack.config.js
   ```

10. 考虑到用 CLI 这种方式来运行本地的 webpack 副本并不是特别方便，我们可以设置一个快捷方式。调整 *package.json* 文件，添加一个 [npm script](https://docs.npmjs.com/misc/scripts)：

    ```yaml
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
      },
    ```

    现在，可以使用 `npm run build` 命令，来替代我们之前使用的 `npx` 命令
    可以通过在 `npm run build` 命令与参数之间添加两个连接符的方式向 webpack 传递自定义参数，例如：`npm run build -- --color`

## 管理资源

### 一、处理CSS资源

1. 为了在 JavaScript 模块中 `import` 一个 CSS 文件，你需要安装 [style-loader](https://webpack.docschina.org/loaders/style-loader) 和 [css-loader](https://webpack.docschina.org/loaders/css-loader)，并在 [`module` 配置](https://webpack.docschina.org/configuration/module) 中添加这些 loader

   ```bash
   	npm install --save-dev style-loader css-loader
   ```

   在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 `npm install --save`。如果你在安装一个用于开发环境的 package 时（例如，linter, 测试库等），你应该使用 `npm install --save-dev`

2. 修改**webpack.config.js**

   ```yaml
   module: {
       rules: [
           {//从下到上，从右到左，依次执行	
               test: /\.css$/i,
               use: [
               //创建style标签，将js中的样式资源插入行，添加到head中生效
               'style-loader',
               //	将css文件变成commonjs模块加载到js中，里面的内容是字符串形式
               'css-loader'
               ],   
           }
       ]
   },
   ```

   模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。最后，webpack 期望链中的最后的 loader 返回 JavaScript。

   应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。

3. 如果想使用Less，先安装loader，然后续添加loader

   ```bash
   >npm install --save-dev less less-loader
   ```

   ```yaml
   {
       test: /\.less$/i,
       //使用多个loader时使用use属性
       use: ['style-loader', 'css-loader','less-loader'],
   }
   ```
   
   

### 二、处理图片资源

1. 添加loader

   ```yaml
   {
       //默认处理不了html模板中的图片，可以使用下面的html-loader处理
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       loader: "url-loader",
       options: {
       //图片大小小于8KB,就会被base64处理
       //优点：减少请求数量，减轻压力
       //缺点：图片体积会增大（文件请求速度会慢）
       //优化方案，对小的图片进行处理，一般是8到12KB
       limit: 10000,
       //全用旧版时会出个问题
       //url-loader默认用es6解析，而html-loader用commonjs解析，这时就会出现个问题
       //图片的src为 [object Module]
       //解决方案：关闭url-loader的es6解析，用commonjs解析
       esModule: false
       //旧版：[hash:10] 取hash值的前10位
       //[ext] 使用文件原来的后缀名
       // name: '[name].[ext]'
       },
       type: 'javascript/auto',
       // type: 'asset/resource',
       generator: {
       filename: 'img/[name][hash:6][ext]'
       }
       },
       {
       test: /\.html/i,
       //处理html中的img图片的（负责引入img，从而能被url-loader处理）
       loader: "html-loader"
    },
   ```

2. 导入图片及使用

   ```js
   import Icon from './aaa.png'
   // 将图像添加到我们已经存在的 div 中。
       const myIcon = new Image();
       myIcon.src = Icon;
       element.appendChild(myIcon);
   ```
   
3. 安装loader


   ```bash
   npm i url-loader file-loader --save-dev
   ```

### 三、处理字休资源

1. 添加loader

   ```yaml
   {
   	test: /\.(woff|woff2|eot|ttf|otf)$/i,
   	type: 'asset/resource',
   },
   ```

2. 导入图片及使用

   ```yaml
   @font-face {
       font-family: 'MyFont';
       src: url('./aaa.woff') format('woff');
       font-weight: 600;
       font-style: normal;
   }
   .hello {
       color: red;
       font-family: 'MyFont';
       background: url('./aaa.png');
   }
   ```

### 四、处理数据资源

### 五、处理HTML资源

1. 安装HtmlWebpackPlugin

   ```bash
   npm install --save-dev html-webpack-plugin
   ```

2. 导入并设置插件
   运行后会发现自动生成了一个index.html文件，默认会创建一个空的HTML文件并自动引入打包输出的所有资源


   ```yaml
   const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
    module.exports = {
      entry: {
        index: './src/index.js',
        print: './src/print.js',
      },
     plugins: [
       new HtmlWebpackPlugin({
         title: '管理输出',
         //可以生成指定模板的html结构
         template: "./src/index.html"
       }),
     ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };
   ```

3. 清理 /dist 文件夹：在output下添加 clean: true 可以生成时自动清除旧文件

   ```yaml
   output: {
   	filename: '[name].bundle.js',
   	path: path.resolve(__dirname, 'dist'),
       clean: true,
   },
   ```

4. manifest
   你可能会很感兴趣，webpack 和 webpack 插件似乎“知道”应该生成哪些文件。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack [`输出`](https://webpack.docschina.org/configuration/output)，了解 manifest 是个好的开始

