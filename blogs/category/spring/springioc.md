---
title: Spring IOC配置
date: 20121-12-20
tags:
- Spring IOC配置
categories:
-  spring
---

### 相关依赖

~~~xml
        <spring.version>5.2.15.RELEASE</spring.version>

		<!-- category 框架坐标依赖添加 -->
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-core</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-beans</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-expression</artifactId>
                <version>${spring.version}</version>
            </dependency>
~~~



### 开启注解扫描

~~~xml
<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context-3.0.xsd">

    <context:component-scan base-package="com.xxxx"/>

</beans>
~~~



### 相关注解

~~~tex
使用注解很方便，在配置问价中指定扫描的包路径或者类路径后，另交给IOC管理的类上直接添加注解@Component

**Spring中提供的4中注解来标注bean
@Component 通用的标注的注解
@Repository 对dao层实现类进行标注
@Service 对service层实现类进行标注
@Controller 对Controller层实现类进行标注**

@Component 是spring提供的通用的组件注解
@Repository、@Service 、@Controller都是有其衍生出来，功能都是一样的，可以互换，
主要是为了区分被注解的类处在不同的业务层，使逻辑更加清晰
~~~



### 别名

alias 设置别名 , 为bean设置别名 , 可以设置多个别名

~~~
<!--设置别名：在获取Bean的时候可以使用别名获取-->
<alias name="userT" alias="userNew"/>
~~~



### Bean的配置

~~~
<!--bean就是java对象,由Spring创建和管理-->

<!--
   id 是bean的标识符,要唯一,如果没有配置id,name就是默认标识符
   如果配置id,又配置了name,那么name是别名
   name可以设置多个别名,可以用逗号,分号,空格隔开
   如果不配置id和name,可以根据applicationContext.getBean(.class)获取对象;

class是bean的全限定名=包名+类名
-->
<bean id="hello" name="hello2,h2,h3;h4" class="com.kuang.pojo.Hello">
   <property name="name" value="Spring"/>
</bean>
~~~



### import

~~~
团队的合作通过import来实现
<import resource="{path}/beans.xml"/>
~~~



### 依赖注入（Dependency Injection）

#### 概念

- 依赖注入（Dependency Injection,DI）。
- 依赖 : 指Bean对象的创建依赖于容器 . Bean对象的依赖资源 .
- 注入 : 指Bean对象所依赖的资源 , 由容器来设置和装配 .



####  构造器注入

#### Set 注入 （重点）

要求被注入的属性 , 必须有set方法 , set方法的方法名由set + 属性首字母大写 , 如果属性是boolean类型 , 没有set方法 , 是 is .

#### 扩展的注入

##### 常量注入

~~~
 <bean id="student" class="com.kuang.pojo.Student">
     <property name="name" value="小明"/>
 </bean>
~~~

##### Bean注入

注意点：这里的值是一个引用，ref

~~~
 <bean id="addr" class="com.kuang.pojo.Address">
     <property name="address" value="重庆"/>
 </bean>
 
 <bean id="student" class="com.kuang.pojo.Student">
     <property name="name" value="小明"/>
     <property name="address" ref="addr"/>
 </bean>
~~~

##### 数组注入

~~~
 <bean id="student" class="com.kuang.pojo.Student">
     <property name="name" value="小明"/>
     <property name="address" ref="addr"/>
     <property name="books">
         <array>
             <value>西游记</value>
             <value>红楼梦</value>
             <value>水浒传</value>
         </array>
     </property>
 </bean>
~~~

##### **List注入**

~~~
 <property name="hobbys">
     <list>
         <value>听歌</value>
         <value>看电影</value>
         <value>爬山</value>
     </list>
 </property>
~~~

##### **Map注入**

~~~
 <property name="card">
     <map>
         <entry key="中国邮政" value="456456456465456"/>
         <entry key="建设" value="1456682255511"/>
     </map>
 </property>
~~~

##### **set注入**

~~~
 <property name="games">
     <set>
         <value>LOL</value>
         <value>BOB</value>
         <value>COC</value>
     </set>
 </property>
~~~

##### **Null注入**

~~~
 <property name="wife"><null/></property>
~~~

##### **Properties注入**

~~~
 <property name="info">
     <props>
         <prop key="学号">20190604</prop>
         <prop key="性别">男</prop>
         <prop key="姓名">小明</prop>
     </props>
 </property>
~~~

##### p命名和c命名注入

1. P命名空间注入 : 需要在头文件中加入约束文件

   ~~~
    导入约束 : xmlns:p="http://www.springframework.org/schema/p"
    
    <!--P(属性: properties)命名空间 , 直接注入属性-->
    <bean id="user" class="com.kuang.pojo.User" p:name="狂神" p:age="18"/>
   ~~~

   

2. c 命名空间注入 : 需要在头文件中加入约束文件

   ~~~
    导入约束 : xmlns:c="http://www.springframework.org/schema/c"
    <!--C(构造: Constructor)命名空间 , 使用构造器注入-->
    <bean id="user" class="com.kuang.pojo.User" c:name="狂神" c:age="18"/>
   ~~~

   

#### Bean的作用域

在Spring中，那些组成应用程序的主体及由Spring IoC容器所管理的对象，被称之为bean。简单地讲，bean就是由IoC容器初始化、装配及管理的对象 .

![20200613181958988](E:\Note\Spring相关笔记\images\20200613181958988.png)

几种作用域中，request、session作用域仅在基于web的应用中使用（不必关心你所采用的是什么web应用框架），只能用在基于web的Spring ApplicationContext环境。

1. #### Singleton(单例模式)

   ~~~
    <bean id="ServiceImpl" class="cn.csdn.service.ServiceImpl" scope="singleton">
   ~~~

   

2. #### Prototype(原型模式)

   ~~~
    <bean id="account" class="com.foo.DefaultAccount" scope="prototype"/>  
     或者
    <bean id="account" class="com.foo.DefaultAccount" singleton="false"/>
   ~~~

   

3. #### Request

   ~~~
    <bean id="loginAction" class=cn.csdn.LoginAction" scope="request"/>
   ~~~

   

4. #### Session

   ~~~
    <bean id="userPreferences" class="com.foo.UserPreferences" scope="session"/>
   ~~~

   

### Bean的自动装配

自动装配说明

- 自动装配是使用spring满足bean依赖的一种方法
- spring会在应用上下文中为某个bean寻找其依赖的bean。

Spring中bean有三种装配机制，分别是：

1. 在xml中显式配置；
2. 在java中显式配置；
3. 隐式的bean发现机制和自动装配。

这里我们主要讲第三种：自动化的装配bean。

Spring的自动装配需要从两个角度来实现，或者说是两个操作：

1. 组件扫描(component scanning)：spring会自动发现应用上下文中所创建的bean；
2. 自动装配(autowiring)：spring自动满足bean之间的依赖，也就是我们说的IoC/DI；

组件扫描和自动装配组合发挥巨大威力，使得显示的配置降低到最少。

**推荐不使用自动装配xml配置 , 而使用注解 .**

#### byName

**autowire byName (按名称自动装配)**

1. 修改bean配置，增加一个属性 autowire=“byName”

   ~~~
   <bean id="user" class="com.kuang.pojo.User" autowire="byName">
      <property name="str" value="qinjiang"/>
   </bean>
   ~~~

##### **小结：**

当一个bean节点带有 autowire byName的属性时。

1. 将查找其类中所有的set方法名，例如setCat，获得将set去掉并且首字母小写的字符串，即cat。
2. 去spring容器中寻找是否有此字符串名称id的对象。
3. 如果有，就取出注入；如果没有，就报空指针异常。



#### byType

**autowire byType (按类型自动装配)**

使用autowire byType首先需要保证：同一类型的对象，在spring容器中唯一。如果不唯一，会报不唯一的异常。NoUniqueBeanDefinitionException

1. 将user的bean配置修改一下 ： autowire=“byType”

   ~~~
   <bean id="dog" class="com.kuang.pojo.Dog"/>
   <bean id="cat" class="com.kuang.pojo.Cat"/>
   <bean id="cat2" class="com.kuang.pojo.Cat"/>
   
   <bean id="user" class="com.kuang.pojo.User" autowire="byType">
      <property name="str" value="qinjiang"/>
   </bean>
   ~~~

   测试，报错：NoUniqueBeanDefinitionException

   删掉cat2，将cat的bean名称改掉！测试！因为是按类型装配，所以并不会报异常，也不影响最后的结果。甚至将id属性去掉，也不影响结果

这就是按照类型自动装配！

#### 使用注解

jdk1.5开始支持注解，spring2.5开始全面支持注解。

准备工作：利用注解的方式注入属性。

1、在spring配置文件中引入context文件头

```
xmlns:context="http://www.springframework.org/schema/context"

http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd
```

2、开启属性注解支持！

```
<context:annotation-config/>
```

##### @Autowired

- @Autowired是按类型自动转配的，不支持id匹配。
- 需要导入 spring-aop的包！

@Autowired(required=false) 说明：false，对象可以为null；true，对象必须存对象，不能为null。

```
//如果允许对象为null，设置required = false,默认为true
@Autowired(required = false)
private Cat cat;
```

##### @Qualifier

- @Autowired是根据类型自动装配的，加上@Qualifier则可以根据byName的方式自动装配
- @Qualifier不能单独使用。

~~~
@Autowired
@Qualifier(value = "cat2")
private Cat cat;
@Autowired
@Qualifier(value = "dog2")
private Dog dog;
~~~

##### @Resource

- @Resource如有指定的name属性，先按该属性进行byName方式查找装配；
- 其次再进行默认的byName方式进行装配；
- 如果以上都不成功，则按byType的方式自动装配。
- 都不成功，则报异常。

~~~
public class User {
   //如果允许对象为null，设置required = false,默认为true
   @Resource(name = "cat2")
   private Cat cat;
   @Resource
   private Dog dog;
   private String str;
}
~~~

结论：先进行byName查找，失败；再进行byType查找，成功。

#### 小结

@Autowired与@Resource异同：

1、@Autowired与@Resource都可以用来装配bean。都可以写在字段上，或写在setter方法上。

2、@Autowired默认按类型装配（属于spring规范），默认情况下必须要求依赖对象必须存在，如果要允许null 值，可以设置它的required属性为false，如：@Autowired(required=false) ，如果我们想使用名称装配可以结合@Qualifier注解进行使用

3、@Resource（属于J2EE复返），默认按照名称进行装配，名称可以通过name属性进行指定。如果没有指定name属性，当注解写在字段上时，默认取字段名进行按照名称查找，如果注解写在setter方法上默认取属性名进行装配。当找不到与名称匹配的bean时才按照类型进行装配。但是需要注意的是，如果name属性一旦指定，就只会按照名称进行装配。

它们的作用相同都是用注解方式注入对象，但执行顺序不同。@Autowired先byType，@Resource先byName。

### 使用注解开发

在spring4之后，想要使用注解形式，必须得要引入aop的包

在配置文件当中，还得要引入一个context约束

~~~
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context"
      xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd">

</beans>
~~~

#### Bean的实现

我们之前都是使用 bean 的标签进行bean注入，但是实际开发中，我们一般都会使用注解！

1. #### 配置扫描哪些包下的注解

   ~~~
   <!--指定注解扫描包-->
   <context:component-scan base-package="com.kuang.pojo"/>
   ~~~

2. 在指定包下编写类，增加注解

   ~~~
   @Component("user")
   // 相当于配置文件中 <bean id="user" class="当前注解的类"/>
   public class User {
      public String name = "秦疆";
   }
   ~~~

3. 测试

   ~~~
   @Test
   public void test(){
      ApplicationContext applicationContext =
          new ClassPathXmlApplicationContext("beans.xml");
      User user = (User) applicationContext.getBean("user");
      System.out.println(user.name);
   }
   ~~~

#### 属性注入

使用注解注入属性

1. 可以不用提供set方法，直接在直接名上添加@value(“值”)

   ~~~
   @Component("user")
   // 相当于配置文件中 <bean id="user" class="当前注解的类"/>
   public class User {
      @Value("秦疆")
      // 相当于配置文件中 <property name="name" value="秦疆"/>
      public String name;
   }
   ~~~

2. 如果提供了set方法，在set方法上添加@value(“值”);

   ~~~
   @Component("user")
   public class User {
   
      public String name;
   
      @Value("秦疆")
      public void setName(String name) {
          this.name = name;
     }
   }
   ~~~

#### 衍生注解

我们这些注解，就是替代了在配置文件当中配置步骤而已！更加的方便快捷

##### **@Component三个衍生注解**

为了更好的进行分层，Spring可以使用其它三个注解，功能一样，目前使用哪一个功能都一样。

- @Controller：controller层
- @Service：service层
- @Repository：dao层

写上这些注解，就相当于将这个类交给Spring管理装配了！

#### 自动装配注解

#### 作用域

##### @scope

- singleton：默认的，Spring会采用单例模式创建这个对象。关闭工厂 ，所有的对象都会销毁。
- prototype：多例模式。关闭工厂 ，所有的对象不会销毁。内部的垃圾回收机制会回收

```
@Controller("user")
@Scope("prototype")
public class User {
   @Value("秦疆")
   public String name;
}
```

#### 小结

**XML与注解比较**

- XML可以适用任何场景 ，结构清晰，维护方便
- 注解不是自己提供的类使用不了，开发简单方便

**xml与注解整合开发** ：推荐最佳实践

- xml管理Bean
- 注解完成属性注入
- 使用过程中， 可以不用扫描，扫描是为了类上的注解

```
<context:annotation-config/>  
```

作用：

- 进行注解驱动注册，从而使注解生效
- 用于激活那些已经在spring容器里注册过的bean上面的注解，也就是显示的向Spring注册
- 如果不扫描包，就需要手动配置bean
- 如果不加注解驱动，则注入的值为null！

### 基于Java类进行配置

JavaConfig 原来是 Spring 的一个子项目，它通过 Java 类的方式提供 Bean 的定义信息，在 Spring4 的版本， JavaConfig 已正式成为 Spring4 的核心功能 。

1. 编写一个实体类，Dog

   ~~~
   @Component  //将这个类标注为Spring的一个组件，放到容器中！
   public class Dog {
      public String name = "dog";
   }
   ~~~

2. 新建一个config配置包，编写一个MyConfig配置类

   ~~~
   @Configuration  //代表这是一个配置类
   public class MyConfig {
   
      @Bean //通过方法注册一个bean，这里的返回值就Bean的类型，方法名就是bean的id！
      public Dog dog(){
          return new Dog();
     }
   
   }
   ~~~

3. 测试

   ~~~
   @Test
   public void test2(){
      ApplicationContext applicationContext =
              new AnnotationConfigApplicationContext(MyConfig.class);
      Dog dog = (Dog) applicationContext.getBean("dog");
      System.out.println(dog.name);
   }
   ~~~

   

   #### 导入其他配置如何做呢

   1. 我们再编写一个配置类！

      ~~~
      @Configuration  //代表这是一个配置类
      public class MyConfig2 {
      }
      ~~~

   2. 在之前的配置类中我们来选择导入这个配置类

      ~~~
      @Configuration
      @Import(MyConfig2.class)  //导入合并其他配置类，类似于配置文件中的 inculde 标签
      public class MyConfig {
      
         @Bean
         public Dog dog(){
             return new Dog();
        }
      
      }
      ~~~

      



