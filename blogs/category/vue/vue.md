---
title: vue笔记
date: 20121-12-20
tags:
- vue笔记
categories:
-  vue
---

1. npm config ls

2. ```
   npm config set prefix"D:\nodejs\node_modules\npm\node_global_modules"
   npm config set cache"D:\nodejs\node_modules\npm\node_cache"
   ```

3. npm install --global --production windows-build-tools 解决报错 find python......

4. 安装cnpm 淘宝镜像

   > npm install -g cnpm  --registry=https://registry.npm.taobao.org

5. 安装vue 脚手架 
   cnpm install -g @vue/cli --force

6. 查看信息
   vue -h

7. 启动vue ui
   vue ui

8. 创建项目
   选择目录->自定义插件（vuerouter,vuex)

9. 安装elementui
   旧版：

   ```js
   cnpm install element-ui --save
   import ElementUI from 'element-ui';
   import 'element-ui/lib/theme-chalk/index.css';
   Vue.use(ElementUI);
   ```

    新版：

   ```js
   cnpm install element-plus --save
   import ElementPlus from 'element-plus';
   import 'element-plus/lib/theme-chalk/index.css';
   createApp(App).use(ElementPlus)
   ```

   

10. 安装Axios : 基于promise 的Http工具库

   ```powershell
   cnpm install axios --save
   ```

   旧版：

   ```js
   import axios from "axios"
   Vue.prototype.$axios=axios;
   ```

   

   新版：

   创建 src/plugins/axios.js

   ```javascript
   "use strict"
   
   import axios from "axios"
   
   // Full config:  https://github.com/axios/axios#request-config
   // axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
   // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
   // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
   
   let config = {
       // baseURL: "http://127.0.0.1:8081"
       // timeout: 60 * 1000, // Timeout
       // withCredentials: true, // Check cross-site Access-Control
   };
   
   // 创建Axios对象
   const Axios = axios.create(config)
   
   // 请求拦截器
   Axios.interceptors.request.use(
       function (config) {
           // Do something before request is sent
           return config
       },
       function (error) {
           // Do something with request error
           return Promise.reject(error)
       }
   );
   
   // 响应拦截器
   Axios.interceptors.response.use(
       function (response) {
           // Do something with response data
           return response
       },
       function (error) {
           // Do something with response error
           return Promise.reject(error)
       }
   );
   
   export default (app) => {
       // 挂载axios到Vue对象
       app.config.globalProperties.$http = Axios
   }
   ```

   main.js中引入

   ```js
   import installAxios from './plugins/axios'
   const app=createApp(App)
   installAxios(app)
   ```

   

11. 安装QS ：查询参数序列化和解析库

    ```
    cnpm install qs --save
    ```

12. 安装Mockjs: 随机生成数据

    ```
    cnpm install mockjs --save-dev
    ```

