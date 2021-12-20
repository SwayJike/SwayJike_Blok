---
title: JavaScript快速入门
date: 20121-12-20
tags:
- JavaScript快速入门
categories:
-  javascript
---

### 1.js文件的引入

```js
<script type="text/javascript">
   // 编写js代码
   alert('我是mjj');
</script>
<!-- 外部的js -->
<script type="text/javascript" src='js/index.js'></script>
```

### 2.变量

```js
//  单行注释
/*
   多行注释
*/
var name = '王聪聪';
		/*
		1.必须使用字母、下划线（_） $开始
		2.多个英文字母 驼峰  myName
		3.不能使用js中关键字 和保留字来进行命名
		4.严格区别大小写
		*/
```

### 3.变量类型

```js
基本的数据类型
Number String  Boolean undefined null
引用的数据类型
Object Array Function

typeof 来检查当前变量的数据类型
```

### 4.运算符-算数运算符

```
+ - * / % 
```

### 5.递增和递减以及赋值运算符

```
++ -- += -= *= /=
```

### 6.字符串

```
var joined = 'hello' +' ' + 'mjj';
```

### 7.数字和字符串

```
// 1.隐式转换 数值转字符串
		var num = 234;
		var myStr = num + "";
// 2.toString() 数值转字符串
		var myStr2 = num.toString();
// 3.字符串转数值
		var myNum = Number(num);
```

### 8.数组Array

```
// 创建
var shopping = ['香蕉','苹果','牛奶','红牛'];
var rand = ['tree','345',[1,2,3]];

// 访问
	var item1 = rand[0];
	var a = rand[2][2];
	
// 访问数组的长度 for
	console.log('数组的长度是:' + rand.length);
```

### 9.条件判断

```
var weather = 'rainyxxxxxx';
if (weather === 'sunny') {
   console.log('天气非常棒,可以出去玩耍');
}else if(weather === 'rainy'){
   console.log('天气下雨了,在家里呆着');
}else if(weather === 'snowing'){
   console.log('天气下雪了,可以出去滑雪');
}else{
   alert('输入的天气有错,重新输入');
}
```

### 10.比较运算符

```
=== 全等 2 === '2' false
!== 不全等
==  2 == '2'  true
!= 
```

### 11.逻辑运算符

```
// && 逻辑与 并且    || 逻辑或 或者   !true
if (weather === 'sunny' && temp > 30) {
			console.log('在家里吹空调,吃西瓜');
		}else if(weather === 'sunny' && temp  <= 30){
			console.log('天气非常棒,可以出去玩耍了')
		}
```

### 12.Switch语句

```
var weather = 'rainy';
switch (weather) {
   case 'sunny':
      alert(1);
      break;
   case 'rainy':
      alert(2);
      // 编写switch语句 小心break,case穿透
   case 'snowing':
      alert(3);
      break;
   default:
      alert(4);
      break;
}
```

### 13.三元运算符

```
// if...else
// (条件) ?  (条件为true)run this code  : (条件为false)run this code;
var isresult = 1 < 2 ?  '真的' : '假的'; //真的
```

### 14.for循环

```
for(初始化条件;结束条件;递增条件){
   //run this code
}
var shopping = ['香蕉','苹果','牛奶','红牛'];

		var j;
		for(j = 0; j < shopping.length; j ++){
		// console.log(shopping[j]);
			var htmlStr = '<h1>'+shopping[j]+'</h1>';
			console.log(htmlStr);
			document.write(htmlStr);
		}
```

### 15.break和continue

```
// break 可以跳出当前循环
// continue 可以跳出本次循环
```

### 16.while循环

```
初始化条件
while(判断循环结束条件){
   // run this code

   递增条件
}
先判断 再执行
		var  sum = 0;
		var i  = 1;
		while (i <= 100) {
			sum = sum + i;
			i ++;
		}

// do-while  先执行一次  再判断
var  sum  = 0;
		var i = 1;
		do{
			sum = sum + i;
			i++;
			console.log(sum);
		}while(i <= 1);
```

### 17.函数

```
//声明
function show(a,b,c) {
  return a+b+c;
}

//调用
show(1,2,3)
```

### 18.函数作用域

```
(function(){
   var name = 'mjj';
   var hello = function (){
      alert('hello ' + name);
   }
   window.first = hello;
})();
```

### 19.object

```
// 对象 (属性和方法)字面量创建  姓名,年龄,性别 ,爱好(动作)
var  person = {
   name : 'mjj',
   age: 18,
   sex:'女',
   fav: function(a){
      alert('爱好姑娘');
      return '姑娘' + a + '岁';
   }
}
console.log(person);
		console.log(person.name);
		console.log(person.fav(18));
```

### 20.数组常用的方法（重要）

```js
toString()
toLocaleString()
join(' ') 分割字符串
push(' ') 往数组的末尾项添加元素,返回添加后的数组长度
pop() 弹出元素(先进后出)也就是数组最后一个
reverse() 数组倒序
sort() 排序 升序 或者降序，参数可传一个比较器
function compare(a,b){
// a位于b之前(降序)
return b - a;	
}
concat() 数组合并
slice(0,1) 数组截取,含头不含尾(尾优先) 用于查
splice(start,deleteCount,items...) 返回删除后的元素数组 用于增删改
1个参数 从start删到最后
2个参数 从start开始删deleteCount个
3个参数 deleteCount为0则从start位置开始添加 items元素
3个参数 deleteCount不为0则从start开始删deleteCount个后再从start位置开始添加items元素

位置方法
indexOf() lastIndexOf() 存在返回索引 ，否则返回-1

迭代方法(熟练掌握)
将数组的元素进行过滤(迭代项，当前迭代项索引，被迭代的数组) 返回符合条件的迭代项
filter(function(item,index,array){
    return true;
})
结果映射
map(function(item,index,array){
    return item*2;
})
数组遍历
forEach(function(item,index){})
```

### 21.字符串的常用方法

```
// 属性
   // length 获取字符串的长度
   // 方法
            charAt() 获取指定的字符
			charCodeAt() 获取指定的字符对应的编码
			concat() 拼接字符串  通常情况 不适用它来做拼接,使用 +来做多个字符的拼接
			
// 第一个参数是起始的位置,第二个参数是结束的位置 顾头不顾尾
			slice()
			substring()
			substr()
			

			indexOf()
			lastIndexOf()
			trim() 清除当前 字符串的前后后格
			
			//常用
			toLowerCase()
			toUpperCase()

			toLocaleLowerCase()
			toLocaleUpperCase()
			indexOf(' ') 返回参数字符串所在索引
```

### 22.Date日期对象

```
// UTC   1970.1.1 到 285616年
1.四种方式创建
		var now = new Date();
		var xmas = new Date('December 25,1995 13:30:00');
		var xmas = new Date(1995,11,25);
		var xmas = new Date(1995,11,25,14,30,0);
		
		
// 常用方法
		console.log(now.getDate()); //获取月份的第几天 (1~31)
		console.log(now.getMonth()); //获取月份 (0~11)
		console.log(now.getFullYear()); //获取年份
		console.log(now.getDay()); //获取一星期中的第几天(0 ~ 6)
		console.log(now.getHours()); //获取小时(0~23);
		console.log(now.getMinutes()); //获取分钟(0~59);
		console.log(now.getSeconds()); //获取秒(0~59);

		// 日期格式化方法
		console.log(now.toDateString()); //星期几  月 日  年
		console.log(now.toTimeString()); //时 分 秒 时区
		// 常用
		console.log(now.toLocaleDateString()); // 
		console.log(now.toLocaleTimeString()); //
		console.log(now.toLocaleString());
		console.log(now.toUTCString());
		
		返回用数字时钟格式的时间
function nowNumTime(){
			var now = new Date();
			var hour  = now.getHours(); //0 ~ 23.   //19
			var minute = now.getMinutes();
			var second = now.getSeconds();
			// 18 > 12  ? 18-12  : 8
			var temp = '' + (hour > 12 ?  hour - 12 : hour);
			if(hour === 0){
				temp = '12';
			}
			temp  = temp +(minute < 10 ?  ':0': ":")+ minute;
			temp  = temp +(second < 10 ?  ':0': ":")+ second;
			temp = temp + (hour >= 12 ?  ' P.M.': " A.M.");
			return temp;
		}
		var nownum = nowNumTime();
		console.log(nownum); // 2:50:41 P.M.
```

### 23.字符串和数值相互转换

```
var str = '13131.9090013';
// 字符串转数值类型
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(typeof parseFloat(str));
var a  = Number(str);
console.log(isNaN(a)); //NaN  

var  num = 1313.179;
// 强制类型转换
console.log(num.toString());
console.log(typeof num.toString());
console.log(String(num));

// 隐式转换
console.log('' + num);
console.log(''.concat(num));
console.log(Number(num.toFixed(2))); //四舍五入
```

### 24.Globle对象

```
// URI
var uri = 'http://www.apeland.cn/web index.html?name=zhangsan';
// encodeURIComponent()编码 使用最多的方法
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));

// 解码 decodeURIComponent()
console.log(decodeURI(encodeURI(uri)));
console.log(decodeURIComponent(encodeURIComponent(uri)));
```

### 25.Math对象

```
// 方法  min() max()
var max = Math.max(3,34,56,21);
var min = Math.min(3,34,56,21);

Math.ceil(num) //天花板函数 向上取整
Math.floor(num) //地板函数 向下取整
Math.round(num) //标准的四舍五入

Math.random() //随机数 [0,1)
```
