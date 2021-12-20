---
title: mysql笔记
date: 20121-12-20
tags:
- mysql笔记
categories:
-  mysql
---

## 常用SQL命令

```mysql
#显示所有数据库
show databases ;
#使用数据库
use myschool;
#显示所有表
show tables ;
#查看表的结构
desc student;
describe student;
#查看建表语句
show create table student;

#修改表结构
use mytest1;
#修改表名
#语法  alter table 表名 rename 新表名;
alter table student rename `employee`;

desc employee;
#添加字段
alter table employee add `address` varchar(20) not null ;

#修改字段名称和字段类型
#语法 alter table 表名 change 旧字段名 新字段名 字段类型;
alter table employee change id eid int;
alter table employee change phone phone char(13);

#删除字段
#语法 alter table 表名 drop 字段名;
alter table employee drop address;

#删除主键
alter table employee drop primary key ;
#删除外键
alter table employee drop foreign key FK_gradeid;

#添加主键
#语法 alter table 表名 add constraint 主键名称 primary key [表名](列名);
alter table employee add constraint `PK_eid` primary key (eid);

#添加外键
alter table employee add constraint `FK_gradeid_id` foreign key (gradeid) references grade(id);
```

## 模糊查询

### like :     

* %:任意0到多个字符

* _: 任意1个字符

* []：任意范围内的一个字符

* [^]:任意范围外的一个字符

### regext：

* 限定位置：   ^ 开头     $ 结尾
* 限制字符范围：   . 任意非空白字符  []：限定范围内的1个字符   [^] 任意范围外的一个字符 
* 限制数量的：     *  任意0到多个字符    + 任意1到多个字符  ？ 0到1

### between：

 ```mysql
select * from 表名 where 字段名 between 小数 and 大数
 ```

等价于

```mysql
select * from 表名 where 字段名>=小数 and 字段名<=大数
```



### in:

```mysql
select * from 表名 where 字段名 in (1,2,3);
```

等价于

```mysql
select * from 表名 where 字段名=1 or 字段名=2 or 字段名=3
```

## Distinct  去重

```mysql
select distinct sex from student;
```

注：一旦对某一列去得，就不能继续查询其它列的内容，就是只能单独使用

## Where 条件过滤

## Group by 分组

```mysql
select GradeId,count(*) from student group by GradeId;
```

注：一旦对某一列分组，就只能查这一列，和聚和函数

可以对多列进行分组

```mysql
select GradeId,sex,count(*) from student group by GradeId,Sex;
```

## Order by 排序

可以对多列进行排序，默认是升序 Asc，降序后面加  Desc

```mysql
select  * from  result order by StudentResult,SubjectId
```

## 聚和函数

```mysql
count(列名) 求列的非空总行数
sum(列名)  求该列非空值加在一起的总和
max(列名)  求该列的最大值
min(列名)  求该列的最小值
avg(列名)  求该列的平均值
```

## Having : 对聚和函数的结果进行条件判断

```mysql
select count(*),GradeId from student  group by GradeId having count(*) >20;
```

## Limit 偏移量,显示行数   限制最终显示的行数

```mysql
select * from student limit 10;
```



关键字出现顺序

```mysql
select * from 表名 > where >  group by > having > order by > limit
```



