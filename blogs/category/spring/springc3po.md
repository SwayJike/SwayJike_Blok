---
title: Spring 连接池C3P0配置
date: 20121-12-20
tags:
- Spring 连接池C3P0配置
categories:
-  spring
---

### 相关依赖

~~~xml
<!-- category 框架坐标依赖添加 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.2.4.RELEASE</version>
</dependency>
<!-- junit单元测试 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
<!-- category 测试环境 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.2.4.RELEASE</version>
</dependency>
<!-- category-jdbc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.2.4.RELEASE</version>
</dependency>
<!-- MySQL 连接驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
</dependency>
<!-- c3p0 连接池-->
<dependency>
    <groupId>com.mchange</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.5.2</version>
</dependency>

~~~



~~~xml
<!--加载properties配置,可以读取jdbc.properties配置文件中的数据-->
    <!--<context:property-placeholder location="jdbc.properties"/>-->

    <!-- 1.配置C3P0数据源 -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <!-- 数据库驱动 -->
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <!-- 连接数据库的URL -->
        <property name="jdbcUrl" value="jdbc:mysql://localhost/myschool"/>
        <!-- 连接数据库的用户名 -->
        <property name="user" value="root"/>
        <!-- 连接数据库的密码 -->
        <property name="password" value="root"></property>
    </bean>
    <!-- 2.配置JDBC模版 -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!-- 默认必须使用数据源 -->
        <property name="dataSource" ref="dataSource"></property>
    </bean>
~~~

