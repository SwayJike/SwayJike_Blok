---
title: Spring 邮件发送
date: 20121-12-20
tags:
- Spring 邮件发送
categories:
-  Spring 邮件发送
---

## Java Mail概述

常见邮件协议：

1. SMTP：简单邮件传输协议，用于发送电子邮件的传输协议；
2. POP3：用于接收电子邮件的标准协议；
3. IMAP：互联网消息协议，是POP3的替代协议；
4. MIME：多用途互联网邮件扩展。



## Java Mail环境准备

1. 设置邮箱服务

2. 相关依赖

   ~~~
   <!-- javax.mail -->
   <dependency>
       <groupId>com.sun.mail</groupId>
       <artifactId>javax.mail</artifactId>
       <version>1.6.2</version>
   </dependency>
   <!-- javax.mail-api -->
   <dependency>
       <groupId>javax.mail</groupId>
       <artifactId>javax.mail-api</artifactId>
       <version>1.6.2</version>
   </dependency>
   
   
   ~~~

   

   ### 发送普通文本的邮件

   ~~~
   package com.xxxx;
   
   import javax.mail.Message;
   import javax.mail.Session;
   import javax.mail.Transport;
   import javax.mail.internet.InternetAddress;
   import javax.mail.internet.MimeMessage;
   import java.util.Date;
   import java.util.Properties;
   
   /**
    * 发送普通文本的邮件
    *    使用JavaMail发送邮件的步骤
    *       1.创建session对象，加载properties对象
    *       2.通过session对象得到transport对象
    *       3.使用邮箱的用户名和密码连接邮箱服务器
    *       4.设置message邮件对象
    *       5.发送邮件
    */
   public class App {
       public static void main(String[] args) throws Exception {
           //设置邮箱服务器的相关配置
           Properties properties = new Properties();
           //设置邮箱服务器的host
           properties.setProperty("mail.smtp.host","smtp.163.com");
           //设置邮箱服务器的port
           properties.setProperty("mail.smtp.port","25");
           //设置邮箱服务器是否需要身份认证（true表示需要）
           properties.setProperty("mail.smtp.auth","true");
           //创建session对象，加载properties对象
           Session session=Session.getInstance(properties);
           session.setDebug(true);
           //通过session对象得到transport对象
           Transport transport = session.getTransport();
           //使用邮箱的用户名和密码连接邮箱服务器
           transport.connect("smtp.163.com","SwayJike_520","DABLHSCHFHVCKNKM");
           //设置message邮件对象
           Message message=createSimpleMail(session);
           //发送邮件
           transport.sendMessage(message, message.getAllRecipients());
           //关闭transport对象
           transport.close();
       }
   
       /**
        * 普通文本邮件
        *      创建一封普通文本的邮件
        * @param session
        * @return
        * @throws Exception
        */
       private static Message createSimpleMail(Session session) throws Exception{
           //创建邮件对象
           MimeMessage message=new MimeMessage(session);
           message.setFrom("SwayJike_520@163.com");
           message.setRecipient(Message.RecipientType.TO,new InternetAddress("SwayJike_520@163.com"));
           message.setSubject("测试文本邮件");
           message.setSentDate(new Date());
           message.setText("你好，这是普通文本的邮件");
           //返回封装好的邮件对象
           return message;
       }
   }
   
   ~~~

   

   

