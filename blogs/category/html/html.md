---
title: html基础
date: 2021-12-20
tags:
- html基础
categories:
-  html
---

#### HTML常用标签 

[comment]: <> (- <strong> 强调文字 <b>)

[comment]: <> (- <ins> 下划线 <u>)

[comment]: <> (- <sup>      <sub>)

[comment]: <> (- <em>  <i>)

[comment]: <> (- <del>)

[comment]: <> (- )

  ```html
  	<ol type="A" reversed="reversed">
  		<li></li>
  		<li></li>
  	</ol>
  
  	<dl>
  		<dt></dt>
  		<dd></dd>
  	</dl>
  
  	<table border="1" cellspacing="0" cellpadding="0">
  		<caption>TiTle</caption>
  		<tr><th>Header</th></tr>
  		<tr><td colspan="1">Data</td></tr>
  		<tr><td rowspan="1">Data</td></tr>
  		<!--<thead>表头</thead>
  		<tbody>表主体</tbody>
  		<tfoot>表底部</tfoot>-->
  	</table>
  	
  	<!--视频-->
  	<video width="800" height="" controls="controls" autoplay="autoplay" loop="loop">
  		<source src="myvideo.mp4" type="video/mp4"></source>
  		<source src="myvideo.ogv" type="video/ogg"></source>
  		<source src="myvideo.webm" type="video/webm"></source>
  		<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
  			<param name="movie" value="myvideo.swf" />
  			<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
  		</object>
  
  	</video>
  	
  	<!--音频-->
  	<audio></audio>
  	
  	<header>网页头部</header>
  	<nav>导航</nav>
  	<section>网页主体</section>
  	<article>网页主体</article>
  	<footer>网页尾部</footer>
  	<asider>边栏</asider>
  	<frame />框架
  	
  	<form action="index.html" method="post" name="表单名">
  		<input type="text" name="" id="" value="" disabled="disabled" maxlength="输入最大字符"/>
  		<!--text/radio/submit/checkbox-->
  		<label for="用于单选聚焦(绑定id)"></label>
  		<input type="reset" name="取消"/>
  		<input type="submit" name="提交"/>
  		<input type="image" name="图片按钮"/>
  		<input type="number" name="数字输入框" />
  		<input type="range" name="滑块" hidden="hidden" />
  		<!--hidden="hidden"  隐藏-->
  		<input type="search" name="查找" placeholder="默认文本且不可修改" readonly="readonly"/>
  		<input required="required" pattern="^1[]\d{}"/>
  		<!--required="required"  请求检测(正则表达式生成器)-->
  		<marquee direction="right">滚动</marquee>
  	</form>
  	
  	<select name="下拉列表">
  		<option value="值"></option>
  	</select>
  	
  	<textarea name="文本域" rows="5" cols="5"></textarea>
  ```




#### CSS常用属性



- 就近原则

  ~~~css
  /*margin: auto;
  padding: initial;
  display: block;
  border: solid red 1px;
  text-decoration: underline;
  font-style: italic;
  font-weight: 100;
  text-align: center;
  text-indent: 2em;
  letter-spacing: normal;//字符间距
  word-spacing:initial;//字间距
  font-family: "微软雅黑";
  color: red;
  direction: left;//设置文本方向
  line-height: 18px;
  text-transform: lowercase;//控制元素中的字母(capitalize 首字大写)
  font-size: 18px;
  background-color: red;
  background-image: inherit;
  background-repeat: repeat-x;
  background-position: bottom;//起始位置
  list-style-type: disc;//disc/none/circle/square/decimal
  list-style-image: none;//图像标记
  list-style-position: outside;//何处放置标记
  border-radius:calc() ;//控制圆角,大于等于宽高的一半都是圆*/
  				
  ~~~

  

#### 伪类选择器

- 

  ~~~css
  /*a:before//after/first-line(首行)/first-letter(首字)/first-child(元素的第一个子元素(看自己))/
  a:first-child{}//向第一个子元素(其父元素的第一个a)添加样式
  ul em{}//后代选择器
  ul>li{}//子代选择器
  ul+ol{}//相邻兄弟选择器
  div~span{}//通用兄弟选择器
  //a:link/hover/active/visitied
  //focus想拥有键盘输入焦点的元素添加样式
  //odd 偶数 even 奇数*/
  ~~~

  

#### 防止父类塌陷的4个方法

1. 浮动元素后加空 div

2. 设置父元素的高度

3. 父级添加overflow属性

   hidden 隐藏多余的内容

   visible  默认值,内容会溢出

   scroll    隐藏多余内容,但是会出现滚条

   auto     自适应

4. 父级添加伪类 after

   ~~~css
   .clear:after{
   		     content: '';//内容为空
   		     display: block;//转换为块
   		     clear: both;//清除两侧浮动
   		    }
   ~~~




#### 字体颜色渐变

~~~css
/*
background-image:
      -webkit-gradient( linear, left top, right top, color-stop(0, #f22),
      color-stop(0.15, #f2f),
      color-stop(0.3, #22f),
      color-stop(0.45, #2ff),
      color-stop(0.6, #0bce8a),
      color-stop(0.75, #2b54b6),
      color-stop(0.9, #ff2),
      color-stop(1, #f22) );
    color: transparent;
    -webkit-background-clip: text;
    -ms-background-clip: text;*/

~~~









