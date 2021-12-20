---
title: Spring 测试相关
date: 20121-12-20
tags:
- Spring 测试相关
categories:
-  spring
---

### 相关依赖

~~~
 <!-- junit 4 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>

  <!-- spring 测试环境 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>5.2.4.RELEASE</version>
            <scope>test</scope>
        </dependency>
~~~



### spring 测试环境相关注解

~~~
@ContextConfiguration(locations = "classpath:spring.xml")
@RunWith(SpringJUnit4ClassRunner.class)
~~~

