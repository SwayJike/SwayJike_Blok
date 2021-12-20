---
title: Bom对象
date: 2021-12-20
tags:
- Bom对象
categories:
-  javascript
---

### 浏览器对象模型  BOM

```js
1.window
   alert()
   confirm()
   prompt()

   setInterval()
   setTimeout()
2.location
   href
   hash
   url
   ...
   reload()
3.screen
4.history
   go()
```

### window常用方法

```
window.alert('mjj');
var a = window.confirm('你确定要离开网站?');
console.log(a);
var name = window.prompt('请输入你早晨吃了什么?','mjj');
console.log(name);
```

### 定时器方法

```js
var timer = null;
timer = setInterval(function(){
   num++;
   if (num > 5) {
       //清除定时器
      clearInterval(timer);
      return;
   }
   console.log('num:'+ num);
},1000);
```

### location对象

```
location.host
location.href
location.search
location.replace()
location.reload()
```

### navigator对象

```
navigator.plugins
```

### history对象

```
history.go()
```
