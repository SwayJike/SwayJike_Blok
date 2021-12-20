---
title: Vue安装lodash插件
date: 2021-12-20
tags:
- Vue安装lodash插件
categories:
-  vue
---

```
npm install lodash@4.16.1 --save
```

```
npm install lodash-webpack-plugin babel-plugin-lodash --save-dev
```

vue.config.js

```
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("lodashReplace").use(new LodashModuleReplacementPlugin())
  }
}
```

babel.config.js

```
module.exports = {
  plugins: ["lodash"]
}
```

main.js引入

```
import {debounce} from 'lodash';
```

