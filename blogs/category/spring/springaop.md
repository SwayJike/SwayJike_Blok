---
title: Spring AOP配置
date: 2021-12-20
tags:
- Spring AOP配置
categories:
-  spring
---

# 代理模式



两个设计原则

		1. 委托类和代理类有共同行为
		2. 代理类能够增强委托类的行为

常用代理模式

1. 静态代理
2. 动态代理

## 静态代理

### 代理三要素

1. 有共同的行为   ----定义接口

2. 目标角色/真实角色（新人）----实现接口

3. 代理角色 （将目标角色作为成员变量，并在构造函数初始化）----实现接口 增强用户行为

   

### 静态代理的特点

1. 目标角色固定
2. 在运行程序之前就得知目标角色
3. 代理对象会增强目标对象的行为
4. 有可能存在多个代理存在类爆炸



##  动态代理

根据需要，通过反射机制在程序运行期动态的为目标对象产生代理对象

静态代理有的它都有，静态代理没有的，它也有！

- 可以使得我们的真实角色更加纯粹 . 不再去关注一些公共的事情 .
- 公共的业务由代理来完成 . 实现了业务的分工 ,
- 公共业务发生扩展时变得更加集中和方便 .
- 一个动态代理 , 一般代理某一类业务
- 一个动态代理可以代理多个类，代理的是接口！

动态代理两种实现方式

1. JDK动态代理
2. CGLIB动态代理

### 动态代理的特点

1. 目标对象不固定
2. 在程序执行时动态创建目标对象
3. 代理对象会增强目标行为

### JDK动态代理

​		注：JDK动态代理的目标对象必须有接口实现



### CGLIB动态代理

#### 相关依赖

~~~
<!-- cglib -->
<dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib</artifactId>
    <version>2.2.2</version>
</dependency>

~~~



#### 定义类

实现MethodInterceptor接口

~~~
//目标对象
    private Object target;
    //通过构造器传入目标对象
    public CglibInterceptor(Object target) {
        this.target = target;
    }

    /**
     * 获取代理对象
     * @return 返回代理对象
     */
    public Object getProxy(){
        //通过Enhancer对象中的create方法生成一个类，用于生成代理对象
        Enhancer enhancer = new Enhancer();
        //设置父类（将目标对象作为代理类的父类）
        enhancer.setSuperclass(target.getClass());
        //设置拦截器，回调对象为本身对象
        enhancer.setCallback(this);
        //生成代理类对象，并返回给调用者
        return enhancer.create();
    }

    /**
     * 拦截器
     *    1.目标对象的方法调用
     *    2.行为增强
     * @param o cglib动态生成的代理类的实例
     * @param method 实体类所调用的方法都被代理的方法引用
     * @param objects 参数列表
     * @param methodProxy 生成的代理类对方法的代理引用
     * @return 所调用的方法的返回值
     * @throws Throwable
     */
    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        //行为加强
        System.out.println("行为加强");
        //调用目标类中的方法
        Object object = methodProxy.invoke(target, objects);
        //行为加强
        System.out.println("行为加强");
        //返回所调用的方法的返回值
        return object;
    }
~~~



# Spring AOP



面向切面编程，考虑的是一种面到面的切入，即层与层之间的一种切入。



## AOP能做什么

主要应用于日志记录，性能统计，安全控制，事务处理等方面，实现公共功能性的重复使用

## AOP的特点

1. 降低模块与模块之间的耦合度，提高业务代码的聚合度。（高内聚低耦合）
2. 提高代码的复用性
3. 提高系统的扩展性。（高版本兼容低版本）
4. 可以在不影响原有功能基础上添加新的功能

## AOP底层实现

动态代理（JDK+CGLIB）

## AOP基本概念 

![20200613182135382](E:\Note\Spring相关笔记\images\20200613182135382.png)

1. Join point（连接点）

   被拦截到的 每个点，spring中指被拦截到每一个方法，Spring AOP一个连接点即代表一个方法的执行。

2. Pointcut (切入点)

   对连接点进行拦截的定义 （匹配规则定义  规定拦截哪些方法，对哪些方法进行处理），spring有专门的表达式语言定义。

3. Advice （通知）

   拦截到每一个连接点（每一个方法）后所要做的操作

   1. 前置通知 （前置增强）——before() 执行方法前通知
   2. 异常抛出通知 （异常抛出增强）——afterThrow()
   3. 最终通知 ——after 无论方法是否发生异常，均会执行该通知
   4. 返回通知 （返回增强）——afterReturn 方法正常结束返回后的通知
   5. 环绕通知  ——around 包围一个连接点（join point) 的通知，如方法调用，这是最强大的一种通知类型。环绕通知可以在方法调用前后完成自定义的行为。它也会选择是否继续执行连接点或直接返回自己的返回值或抛出异常来结束执行。

4. Aspect （切面）

   切入点与通知的结合，解决了切面的定义，切入点定义了要拦截哪些方法，通知则定义了拦截过方法后要做什么，切面则是横切关注点的抽象，与类相似，类是对物体特征的抽象，切面则是横切关注点抽象

5. Target（目标对象）

   被代理的目标对象

6. Weave（织入）

   将切面应用到目标对象并生成代理对象的这个过程即为织入

7. Introduction  （引入）

   在不修改原有应用程序代码的情况下，在程序运行期为类动态添加方法或者字段的过程称为引入

   ![20200613182141599](E:\Note\Spring相关笔记\images\20200613182141599.png)

   

   SpringAOP中，通过Advice定义横切逻辑，Spring中支持5种类型的Advice:

   ![20200613182147344](E:\Note\Spring相关笔记\images\20200613182147344.png)
   
   # Spring AOP的实现
   
   1. Spring  AOP环境搭建
   
   ~~~
   <!-- aop -->
   <dependency>
       <groupId>org.aspectj</groupId>
       <artifactId>aspectjweaver</artifactId>
       <version>1.9.6</version>
   </dependency>
   ~~~
   
   
   
   2. 添加Spring.xml的配置
   
   ~~~
   <!--开启自动化扫描-->
       <context:component-scan base-package="com.xxxx.*"/>
   
       <!--配置AOP自动代理-->
       <aop:aspectj-autoproxy/>
       
       <!--aop相关配置-->
       <aop:config>
           <!--aop相关配置-->
           <aop:aspect ref="logCut">
               <!--定义aop切入点-->
               <aop:pointcut id="cut" expression="execution(* com.xxxx.service..*.*(..))"/>
               <!--配置前置通知 指定前置通知方法名 并引用切入点定义-->
               <aop:before method="before" pointcut-ref="cut"/>
               <!--配置异常通知 指定异常通知方法名 并引用切入点定义-->
               <aop:after-throwing method="afterThrow" pointcut-ref="cut"/>
               <!--配置最终通知 指定最终通知方法名 并引用切入点定义-->
               <aop:after method="after" pointcut-ref="cut"/>
               <!--配置返回通知 指定返回通知方法名 并引用切入点定义-->
               <aop:after-returning method="afterReturn" pointcut-ref="cut"/>
               <!--配置环绕通知 指定环绕通知方法名 并引用切入点定义-->
               <aop:around method="around" pointcut-ref="cut"/>
           </aop:aspect>
       </aop:config>
   ~~~
   
   
   
   基于注解实现（需配置AOP自动代理）
   
   ~~~java
   package com.xxxx.aspect;
   
   import org.aspectj.lang.ProceedingJoinPoint;
   import org.aspectj.lang.annotation.*;
   import org.springframework.stereotype.Component;
   
   /**
    * 切面
    *      切入点和通知的抽象
    *      定义切入点 和 通知
    *          切入点：定义要拦截哪些类的哪些方法
    *          通知：定义了拦截之后方法要做什么
    */
   @Component
   @Aspect
   public class LogCut {
   
       /**
        * 切入点
        *     要拦截哪些类的哪些方法
        *     匹配规则，拦截什么方法
        *     定义切入点
        *     AOP切入点表达式
        *          1.执行所有的公共方法
        *              execution(public *(..))
        *          表达式中的第一个*代表的是方法的修饰范围
        *          2.执行任意的set方法
        *              execution(* set*(..))
        *          3.设置指定包及子包下的任意类的任意方法
        *              execution(* com.xxxx.service.*.*(..))
        *          4.设置指定包下的任意类的任意方法
        *              execution(* com.xxxx.service..*.*(..))
        */
       @Pointcut("execution(* com.xxxx.service..*.*(..))")
       public void cut(){
   
       }
   
       /**
        * 前置通知
        */
       @Before(value = "cut()")
       public void before(){
           System.out.println("LogCut.before");
       }
   
       /**
        * 返回通知
        */
       @AfterReturning(value = "cut()")
       public void afterReturn(){
           System.out.println("LogCut.afterReturn");
       }
   
       /**
        * 最终通知
        */
       @After(value = "cut()")
       public void after(){
           System.out.println("LogCut.after");
       }
   
       /**
        * 异常通知
        */
       @AfterThrowing(value = "cut()")
       public void afterThrow(){
           System.out.println("LogCut.afterThrow");
       }
   
       /**
        * 环绕通知
        * @param pgp
        * @return
        */
       @Around(value = "cut()")
       public Object around(ProceedingJoinPoint pgp){
           System.out.println("LogCut.around");
           Object object=null;
           try {
               //显示调用对应的方法
              object = pgp.proceed();
               System.out.println(pgp.getTarget());
           }catch (Throwable throwable){
               System.out.println("LogCut.around---Throwable");
           }finally {
               System.out.println("LogCut.around---finally");
           }
           return object;
       }
   }
   
   ~~~
   
   
   
   在Spring配置文件中，注册bean，并增加支持注解的配置
   
   ```
   <!--第三种方式:注解实现-->
   <bean id="annotationPointcut" class="com.kuang.config.AnnotationPointcut"/>
   <aop:aspectj-autoproxy/>
   ```
   
   aop:aspectj-autoproxy：说明
   
   ```
   通过aop命名空间的<aop:aspectj-autoproxy />声明自动为spring容器中那些配置@aspectJ切面的bean创建代理，织入切面。当然，spring 在内部依旧采用AnnotationAwareAspectJAutoProxyCreator进行自动代理的创建工作，但具体实现的细节已经被<aop:aspectj-autoproxy />隐藏起来了
   
   <aop:aspectj-autoproxy />有一个proxy-target-class属性，默认为false，表示使用jdk动态代理织入增强，当配为<aop:aspectj-autoproxy  poxy-target-class="true"/>时，表示使用CGLib动态代理技术织入增强。不过即使proxy-target-class设置为false，如果目标类没有声明接口，则spring将自动使用CGLib动态代理。
   ```
   
   

