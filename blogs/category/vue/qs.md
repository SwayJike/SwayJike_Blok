---
title: qs记录一个坑
date: 20121-12-20
tags:
- qs记录一个坑
categories:
-  vue
---

### 对象数组要加参数,不然后台springmvc解析失败

```
qs.stringify(this.update_user,{arrayFormat: 'indices',allowDots: true})
```
