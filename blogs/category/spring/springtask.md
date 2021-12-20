---
title: Spring 任务调度
date: 20121-12-20
tags:
- Spring 任务调度
categories:
-  spring
---

### 开启任务调度

第一个任务表示程序启动5s后调用voiceFileClearJob类中的execute方法，然后每隔一个小时再调用execute一次

第三个任务表示每天的23点59分调用statJob类中的statLgj方法

```
<task:scheduled-tasks>  
    <task:scheduled ref="voiceFileClearJob" method="execute" initial-delay="5000" fixed-delay="3600000"/>
	<task:scheduled ref="versionListenJob" method="execute" initial-delay="5000" fixed-delay="5000"/>
	<task:scheduled ref="statJob" method="statLgj" cron="0 59 23 * * ?"/>
	<task:scheduled ref="statJob" method="statBadNameAndQQ" cron="23 28 20 * * ?"/>
</task:scheduled-tasks>
```

ref是工作类

method是工作类中要执行的方法

initial-delay是任务第一次被调用前的延时，单位毫秒

fixed-delay是上一个调用完成后再次调用的延时

fixed-rate是上一个调用开始后再次调用的延时（不用等待上一次调用完成）

cron是表达式，表示在什么时候进行任务调度。

```
<task:annotation-driven scheduler="scheduler" executor="executor" proxy-target-class="true"/>
```

