---
title: Dom对象
date: 2021-12-20
tags:
- Dom对象
categories:
-  javascript
---

### 认识Dom对象

```
  1.var domElement = document.getElementById() 单个对象
 2.document.getElementsByTagName()  获取出来的是一个节点对象集合
 // 3.document.getElementsByClassName('item');获取出来的是一个节点对象集合
 获取属性值 有一个必需的参数，这个节点对象的名字
 domElement.getAttribute('title')
 // 设置属性值  setAttribute(name,value)
 domElement.setAttribute('id', 'box');
```

### 节点

~~~
<!-- 节点类型：
   1.元素节点 document.getElementById
   2.属性节点 el.attributes[0]
   HTML内容(<div>我是一个文本节点<!--我是注释--></div>)
   3.文本节点 el.childNodes[0] 我是一个文本节点
   8.注释节点 el.childNodes[1] 我是注释
   9.文档节点 document.nodeType
 -->
 
 <!-- 
		动态的操作节点
		1.创建节点  createElement()
		2.插入节点 appendChild()
		// 第一个参数是新插入的节点，第二个参数是参考的节点
		insertBefore(newNode,node)
	         3.删除节点 removeChild(childNode)
	         4.替换节点 replaceChild(newNode,node)
	         5.创建文本节点 createTextNode()
	 -->
~~~

### 动态操作样式

~~~
1、直接操作样式属性
		console.log(para.style);
		para.style.color = 'white';
		para.style.backgroundColor = 'black';
		para.style.width = '250px';
		para.style.height = '250px';
		para.style.textAlign = 'center';
		para.style.lineHeight  = '250px';
		para.style.fontSize  = '30px';
		
2、通过控制属性的类名来控制样式
		para.setAttribute('class', 'xxx');
~~~

### 事件

```
点击事件       onclick
鼠标滑过事件   onmouseover
鼠标移开事件	 onmouseout	 
光标聚焦       onfocus
失焦事件 	   onblur
内容选中事件    onselect
内容改变事件    onchange
内容输入事件    oninput
窗口加载事件    window.onload
```
