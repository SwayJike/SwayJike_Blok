---
title: offset、client、scroll家族
date: 2021-12-20
tags:
- offset、client、scroll家族
categories:
-  javascript
---

### offset家族



#### 定位父级offsetParent

```
offsetParent定义:与当前元素最近的经过定位的父级元素
1.元素自身有定位，offsetParent是null 
2.元素自身无定位，offsetParent是body
3.元素自身无定位,父级元素存在定位,offsetParent 是以最近的经过定位的父级元素
4. body元素的offsetParent是null
```

#### offsetWidth

```
offsetWidth = width + border-left-width + border-right-width + padding-left-width + padding-right-width
```

#### offsetHeight

~~~
offsetHeight = height + border-top-width + border-bottom-width + padding-top-width + padding-bottom-width
~~~

```
offsetWidth和offsetHeight 它们是只读
```

#### offsetTop

```
当前元素的上边框到offsetParent元素的上边框的距离
```

#### offsetLeft

```
当前元素的左边框到offsetParent元素的左边框的距离
```

```
总结: 相对于父元素(看父元素是否有定位，如果有定位，以父元素为基准，如果没有则往上寻找，如果一直找不到，则以body为准)的上边距和下边距
```

#### 如何求出当前元素在页面的偏移量

```
function getElementLeft(obj) {
   // 1.获取当前元素的左偏移量
   var actualLeft = obj.offsetLeft;
   // 2.求出定位父级
   var parent = obj.offsetParent;
   // 3.循环
   while (parent != null) {
      // 3.1 求出当前的左方偏移量
      actualLeft = actualLeft + parent.clientLeft + parent.offsetLeft;
      // 3.2 更新定位父级
      parent = parent.offsetParent;

   }
   return actualLeft + 'px';
}
```

```
function getElementTop(obj) {
   // 1.获取当前元素的上偏移量
   var actualTop = obj.offsetTop;
   // 2.求出定位父级
   var parent = obj.offsetParent;
   // 3.循环
   while (parent != null) {
      // 3.1 求出当前的上方偏移量
      actualTop = actualTop + parent.clientTop + parent.offsetTop;
      // 3.2 更新定位父级
      parent = parent.offsetParent;

   }
   return actualTop + 'px';
}
```

### Client家族

```
client 客户端大小 :指的是当前元素内容到内边距占据的空间大小
// 不包含border
clientWidth  = width + padding-left + padding-right
clientHeight  = height + padding-top + padding-bottom
clientLeft  左边框的大小
clientTop   上边框的大小

获取页面的大小
document.documentElement.clientWidth
document.documentElement.clientHeight


```

#### 注意

```
1.所有client属性都是只读的
2.如果给元素设置display:none; 客户端client属性都为0
3.尽量避免重复访问这些属性(耗时)
console.time('time');
			var b = box.clientHeight;
			for(var i = 0; i < 100000; i++){
				var a = b;
			}
			console.timeEnd('time');//time: 2.357177734375ms
```

### Scroll家族

#### scrollHeight

```
scrollHeight 表示元素的总高度,包含由于溢出而无法在网页上的不可见部分
```

#### scrollWidth

```
scrollWidth 表示元素的总宽度,包含由于溢出而无法在网页上的不可见部分
```

```
无滚动条时候,scrollHeight跟clientHeight属性结果是相等的
```

#### scrollTop

```
scrollTop  元素被卷起的高度
当滚动条滚动到内容底部时,符合以下公式
scrollHeight = clientHeight + scrollTop;
scrollTop是可读写的
```

~~~
回到顶部
document.body.scrollTop = document.documentElement.scrollTop = 0;
window.scrollTo(0,0)
~~~

