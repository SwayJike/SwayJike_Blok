---
title: JS特效
date: 2021-12-20
tags:
- JS特效
categories:
-  javascript
---

### 图片切换

```
1.获取事件源 需要的标签
2.监听按钮的点击 
在事件中更改图片地址(一般是更改索引)
```

```
<img src="images/image01.jpg" id="flower" width="200" height="200">
<br>
<button id="prev">上一张</button>
<button id="next">下一张</button>
<script type="text/javascript">
   // 1.获取事件源 需要的标签
   var flower = document.getElementById('flower');
   var nextBtn = document.getElementById('next');
   var prevBtn  = document.getElementById('prev');

   var minIndex = 1,maxIndex = 4; currentIndex = minIndex;
   // 2.监听按钮的点击
   nextBtn.onclick = function(){
      if(currentIndex === maxIndex){
         currentIndex = minIndex;
      }else{
         currentIndex++;
      }
     flower.setAttribute('src',`images/image0${currentIndex}.jpg`)
   }
   prevBtn.onclick = function(){
      if(currentIndex === minIndex){
         currentIndex = maxIndex;
      }else{
         currentIndex--;
      }
     flower.setAttribute('src',`images/image0${currentIndex}.jpg`)
   }
</script>
```

### 显示和隐藏图片

```
1.获取事件源
2.绑定事件
3.事件驱动程序
通过按钮点击事件修改图片的display属性 (none,block)
```

### 衣服相册

```
1.获取事件源
2. 遍历集合，给每个img标签添加事件
3.1 在悬浮到每个li标签之前，先把所有的li标签的类名都置为空值
目的是清除原来的样式,后面3.3会再添加样式
3.2修改大图的src属性值
3.3 给鼠标悬浮的img标签的父标签添加类
```

### 关闭小广告

```
var closeSpan = document.getElementById('close');
var qe_code = document.getElementById('qe_code');
closeSpan.onclick = function(){
   qe_code.style.display = 'none';
}
```

### 复选框选择

```
function $(id){
			return typeof id === 'string' ? document.getElementById(id) : null;
		}
1.获取所有的复选框
var inputs = document.getElementsByTagName('input');
2.全选
$('allSelect').onclick = function(){
			for(var i = 0; i < inputs.length; i ++){
				inputs[i].checked = true;
			}
		}
3.取消选中
$('cancelSelect').onclick = function(){
			for(var i = 0; i < inputs.length; i ++){
				inputs[i].checked = false;
			}
		}
4.反选
$('reverseSelect').onclick = function(){
			for(var i = 0; i < inputs.length; i ++){
				inputs[i].checked  =  !inputs[i].checked;
			}
		}
```

### 表单验证

```
input输入框失去焦点
1.获取输入的内容
2.验证
```

### 上传图片验证

```js
// jpg png gif jpeg
window.onload = function(){
   // 1.获取标签
   var file = document.getElementById('file');
   // 2.监听图片选择的变化
   file.onchange = function(){
      // 2.1 获取上传的图片路径
      var path = this.value;
      //C:\fakepath\01.gif
      // 2.2 获取.在路径字符串中占的位置
      var loc = path.lastIndexOf('.');

      // 2.3 截图 文件路径的后缀名
      var suffix = path.substr(loc);
      // 2.4统一转小写
      var lower_suffix = suffix.toLowerCase();
      // 2.5 判断
      if(lower_suffix === '.jpg' ||  lower_suffix === '.png' || lower_suffix === '.jpeg' || lower_suffix === '.gif' ){
         alert('上传图片格式正确');
      }else{
         alert('上传图片格式错误');
      }

   }
}
```

### 形变

```
el.style.transform = `translate(${index * 100}px,${index * 50}px) rotate(${index * 10}deg) scale(${index * 1.3})`;
```
