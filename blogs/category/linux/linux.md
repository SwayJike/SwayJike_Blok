---
title: linux笔记
date: 2021-12-20
tags:
- linux笔记
categories:
-  linux
---
## 1、vi 和 vim编辑器

### 1.1、简介

所有的Linux系统都会内建vi文本编辑器。

vim具有程序编辑的能力，可以看做是vi的增强版本，可以主动的以字体颜色辨别语法的正确性，方便程序设计。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

### 1.2、vi和vim常用的三种模式

#### 1.2.1、正常模式

以vim打开一个档案就直接进入一般模式了（这是默认的模式）。在这个模式种，你可以使用【上下左右】按键移动光标，你可以使用【删除字符】或【删除整行】来处理档案内容，也可以使用【复制、贴上】来处理你的文件数据。（在正常模式下，我们可以使用快捷键。）

#### 1.2.2、插入模式/编辑模式

在这个模式下，程序员可以输入内容。

按下【i,I,o,O,a,A,r,R】等任何一个字母之后才会进入编辑模式，一般来说按i即可。

#### 1.2.3、命令行模式

在这个模式种，可以提供你相关指令，完成读取、存盘、替换、离开vim、显示行号等的动作则是在此模式中达成的。

#### 1.2.4、在vi和vim模式下的命令

i		#进入输入模式
a		#进入输入模式 光标前进一位
ESC		#退出输入模式
wq		#保存并退出
q		#退出
q!		#强制退出

### 1.3、vi和vim快捷键

#### 1.3.1、复制

#复制
yy(正常模式)			#拷贝当前行   
p(正常模式)			#粘贴
5yy(正常模式)			#拷贝当前行向下5行


#### 1.3.2、删除

#删除
dd(正常模式)			#删除一行
5dd(正常模式)			#删除当前行向下的5行


#### 1.3.3、查找

#查找
/hello + 回车(正常模式)   #查找关键字hello
n(正常模式)			#查找下一个
1
2
3

#### 1.3.4、行号

#文件的行号
:set nu(命令模式)		#设置行号
:set nonu(命令模式)	#取消行号


#### 1.3.5、行首/行末

#跳转到最末行
G(正常模式)
#跳转到最首行
gg(正常模式)


#### 1.3.6、撤销

#撤销
u(正常模式)


#### 1.3.7、将光标移到第n行

#将光标移到第10行
#1、显示行号   :set nu  (命令模式)
#2、输入10	（正常模式）
#3、输入shift+g	（正常模式）

## 2、实用指令

pwd			#查看当前所在目录


### 2.1、关机&重启

shutdown -h now				#立刻进行关机
shutdown -h 1				#"hello,1分钟后会关机了"
shutdown -r now				#现在重新启动计算机
halt						#关机，作用和上面一样
reboot						#现在重新启动计算机
sync						#把内存的数据同步到磁盘（把没保存的东西保存，关机之前使用这个命令）


### 2.2、用户的注销

#注销   此指令在图形运行级别无效  此命令在普通用户下无效
logout

exit    #用户退出登录
Ctrl + D  #用户退出登录



### 2.3、用户管理


说明：

1、Linux系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

2、Linux的用户至少要属于一个用户组。

#### 2.3.1、添加用户

useradd [选项] 用户名    #[选择]是参数

useradd -d 新的用户名     #给新创建的用户指定家目录  ConterOS
useradd -m 新的用户名	 #给新创建的用户指定家目录  Unbutu

#比如：
useradd -m yangxinhu	#创建了一个用户   并且home下会自动生成一个yangxinhu的目录

当创建用户成功后，会自动的创建和用户同名的家目录

#### 2.3.2、删除用户

userdel 用户名   #删除用户  但是保存用户家目录
userdel -r 用户名	#删除用户  同时删除用户家目录

删除用户时，一般不将用户家目录删除

#### 2.3.3、设置密码

passwd 用户名


#### 2.3.4、查看用户

w     #查看用户列表

id 用户名	#查看指定用户信息

whoami		#查看当前用户名

who am i	#查看当前登录用户名


#### 2.3.5、切换用户

su - 用户名


### 2.4、用户组

介绍：类似于角色，系统可以对有共性的多个用户进行统一的管理。

#### 2.4.1、新增组

groupadd 组名

useradd -g 用户组 用户名   #增加一个用户的时候直接将他指定到一个组


#### 2.4.2、删除组

groupdel 组名


#### 2.4.3、修改用户的组

usermod -g 用户组 用户名


#### 2.4.4、用户和组的相关文件

##### 2.4.4.1、用户配置文件（用户信息）/etc/passwd

用户（user）的配置文件，记录用户的各种信息

每行的含义：用户名：口令：用户标识号：组标识号：注释性描述：主目录：登录Shell

##### 2.4.4.2、组配置文件（组信息）/etc/group

组（group）的配置文件，记录Linux包含的组的信息

每行含义：组名：口令：组标识号：组内用户列表

##### 2.4.4.3、口令配置文件（密码和登录信息，是加密）/etc/shadow

口令的配置文件

每行的含义：登录名：加密口令：最后一次修改时间：最小时间间隔：最大时间间隔：警告时间：不活动时间：失效时间：标志

### 2.5、指定运行级别


运行级别说明：

0：关机

1：单用户【找回丢失密码】

2：多用户状态无网络服务

3：多用户状态有网络服务

4：系统未使用保留给用户

5：图形界面

6：系统重启

常用运行级别是3和5，要修改默认的运行级别可改文件/etc/inittab的id:5:initdefault:这一行中的数字

命令：

init[0123456]   #切换到制定运行级别的指令  如：切换到5   init 5


### 2.6、进入单用户找回密码

注意：只有在装有Linux系统的主机上操作，才可以进入单用户修改密码（云服务器另有提供方式）。

#### 2.6.1、

启动Ubuntu18操作系统并长按【Shift】键进入选项，选择 Advanced options for Ubuntu 这一项 按回车【Enter】键
注意：这个界面是可能出现的，如果没有出现，直接跳过这一步。



#### 2.6.2、

选中Ubuntu,with Linux xxxx-generic（recovery mode）按【E】键，不要按回车

#### 2.6.3、

使用上下左右键，找到recovery nomodeset，并将其删除

#### 2.6.4、

然后在这一行的最后添加：
quiet splash rw init=/bin/bash

#### 2.6.5、

按ctrl+x或F10启动系统就可以进入single模式而不需要密码了。

### 2.7、帮助指令

当我们对某个指令不熟悉时，我们可以使用Linux提供的帮助指令来了解这个指令的使用方法。

#### 2.7.1、man

man [命令或配置文件]   #获得帮助信息

#案例：查看ls命令的帮助信息
man ls


#### 2.7.2、help

#实例：查看cd的用法
help cd   #获得shell内置命令的帮助信息


### 2.8、文件目录类

#### 2.8.1、pwd

pwd		#显示当前工作目录的绝对路径


#### 2.8.2、ls

ls [选择] [目录或是文件]	#显示当前目录下的目录和文件
#-a 显示当前目录所有的文件和目录，包括影藏的
#-l 以列表的方式显示信息
#-h 显示更人性化


#### 2.8.3、cd

cd [参数]   #切换到指定目录
cd ~ 或者 cd   #回到自己的家目录
cd ..   #回到上一级目录


#### 2.8.4、mkdir

mkdir [选项] 要创建的目录   #用于创建目录

-p 创建多级目录

rmdir 目录  #删除指定目录  这个命令只能删除空的目录
rm -rf 目录  #删除指定目录包括目录下的所有文件和目录

#### 2.8.5、touch

touch 文件名称  #创建一个空文件

#### 2.8.6、cp

cp [选项] source dest  #拷贝  source是源文件  dest是目标路径
#-r 递归复制整个文件夹
#\cp -r sorce dest   强制覆盖，不要提示我

#### 2.8.7、rm

rm  #移除
#-r 递归删除整个文件夹
#-f 强制删除不提示

#### 2.8.8、mv

mv #移动文件与目录或者是重命名
#mv oldNameFile newNameFile (重命名)
#mv /temp/movefile  /targetFolder  (移动)

#### 2.8.9、cat

cat [选项] 文件 #查看文件内容
#-n  显示行号

#### 2.8.10、more

more 文件   #查看文件内容

#### 2.8.11、> & >>

>   #输出重定向  （覆盖写）
>
>   > 		#追加

ls -l>文件    #列表的内容写入文件a.txt中（覆盖写）
ls -al>>文件	#列表的内容追加到文件aa.txt的末尾
cat 文件1>文件2		#将文件1的内容覆盖到文件2  cat /etc/profile > c.txt
echo "内容">>文件  	#将内容写入文件中 

#使用
#1、将/home目录下的文件列表写入到/home/1.txt中
ls -al>>/home/1.txt
#2、将当前日历信息追加到/home/mycal文件中
cal >> /home/mycal

#### 2.8.12、echo

echo [选择] [输出内容]  #输出内容到控制台
#经常使用echo指令输出环境变量   echo $PATH

#### 2.8.13、head

head   #显示文件的开头部分内容，默认情况下head指令显示文件的前10行内容
head 文件   #查看文件头10行内容
head -n 5 文件   #查看文件头5行内容，5可以是任意行数

#### 2.8.14、tail

tail  #显示文件中尾部的内容，默认情况下tail指令显示文件的后10行内容
tail 文件   #查看文件后10行内容
tail -n 5 文件   #查看文件后5行内容，5可以是任意行数
tail -f 文件		#实时追踪该文档的所有更新，工作中经常使用，如实时监控日志文件

#### 2.8.15、ln

#软链接指令  类似于windows里的快捷方式，主要存放了链接其他文件的路径
ln -s [源文件或目录] [软链接名]    #给源文件创建一个软链接（相当于给源文件创建了一个快捷方式）
rm -rf [软链接名]   #删除软链接  在删除软链接目录时，后面不要带/，否则提示资源忙

#### 2.8.16、history

history   #查看已经执行过的历史命令，也可以执行历史指令
history 10   #查看最近使用的10个命令  10这个数字可以改变
！指令编号    #执行第多少条指令   ！178 执行编号为178的指令

### 2.9、时间日期类

#### 2.9.1、date

date		#显示当前时间
date +%Y 	#显示当前年份
date +%m		#显示当前月份
date +%d		#显示当前是哪一天
date "+%Y-%m-%d %H:%M:%S"	#显示年月日时分秒
date -s 字符串时间  #设置系统当前时间  date -s "2019-06-19 10:03:00"

#### 2.9.2、cal

cal		#查看当前日历
cal [选项]   #显示选择的年份的所有日历  cal 2019

### 2.10、搜索查找类

#### 2.10.1、find

#find指令  将从指定目录向下递归的遍历其各个子目录，将满足条件的文件或者目录显示在终端
find [搜索范围] [选项]
#选项说明
#-name <查询方式>   按照指定的文件名查找模式查找文件
#-user <用户名>		查找属于指定用户名所有文件
#-size <文件大小>   按照指定的文件大小查找文件

#按文件名，根据名称查找/home目录下的hello.txt文件
find /home -name hello.txt
#按拥有者，查找/opt目录下，用户名称为root的文件
find /opt -user root
#查找整个linux系统下大于20M的文件（+n 大于    -n 小于    n 等于）
find / -size +20M
#查询根目录下，所有后缀为.txt的文件
find / -name *.txt

#### 2.10.2、locate

#locate指令  可以快速定位文件路径。locate指令利用事先建立的系统中所有文件名称及路径的locate数据库实现快速定位给定的文件。locate指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须顶起更新locate时刻。
locate 搜索文件
#由于locate指令基于数据库进行查询，所以第一次运行前。必须使用updatedb指令创建locate数据库

#使用locate指令快速定位hello.txt文件所在目录
updatedb
locate hello.txt

#### 2.10.3、grep & 管道符号 |

#grep过滤查找
#管道符 "|" ,表示将前一个命令的处理结果，输出传递给后面的命令处理。

grep [选项] 查找内容 源文件

#选项

-n		显示匹配行及行号

-i		忽略字母大小写

#应用实例 ： 请在hello.txt文件中，查找 "yes" 所在行，并且显示行号
cat hello.txt | grep -ni yes
#cat hello.txt  将hello.txt的内容浏览出来

| 是将cat浏览出来的内容交给后面的命令处理

#grep yes  是将 | 交过来的内容进行过滤查找

### 2.11、压缩和解压缩类

#### 2.11.1、gzip & gunzip

#gzip用于压缩
#gunzip用于解压

gzip 文件				#压缩文件，只能将文件压缩为 *.gz 文件
gunzip 文件.gz		#解压缩文件命令

#### 2.11.2、zip & unzip

#zip用于压缩
#unzip用于解压
#在项目打包发布中很有用

zip [选项] xxx.zip 将要压缩的内容	#压缩文件和目录的命令
unzip [选项] xxx.zip				#解压缩文件

#zip常用选项：-r  递归压缩，即压缩目录
#unzip常用选项：-d <目录>   指定解压后文件的存放目录

#### 2.11.3、tar

#打包指令  最后打包后的文件是.tar.gz的文件

tar [选择] xxx.tar.gz 打包的内容	#打包目录，压缩后的文件格式是.tar.gz

#常用选项
#-c 	产生.tar打包文件
#-v 	显示详细信息
#-f		指定压缩后的文件名
#-z		打包同时压缩
#-x		解包.tar文件

#案例
#1、压缩多个文件，将/home/a1.txt和/home/a2.txt压缩成a.tar.gz
tar -zcvf /home/a.tar.gz /home/a1.txt /home/a2.txt
#2、将/home的文件夹压缩成myhome.tar.gz
tar -zcvf myhome.tar.gz /home/
#3、将a.tar.gz解压到当前目录下
tar -zxvf a.tar.gz
#4、将myhome.tar.gz解压到/opt目录下(指定的目录必须是存在的)
tar -zxvf myhome.tar.gz -C /opt/

## 3、组管理和权限管理（难点、重点）

在Linux中的每个用户必须属于一个组，不能独立于组外。

在linux中每个文件有所有者、所在组、其他组的概念。



### 3.1、文件/目录所有者

一般为文件的创建者，谁创建了这个文件，就自然的成为这个文件的所有者。

### 3.1.1、查看文件的所有者

ls -ahl
#实例：创建一个组police,在创建一个用户tom,然后使用tom来创建一个文件，看看情况如何
#-----root用户下
groupadd police
useradd -g police tom
#------切换到tom用户  创建ok.txt
touch ok.txt
#查看所有者
ls -ahl


文件所有者图示



ok.txt的所有者是tom，tom在police组中，ok.txt的所在组是police

一般文件的所在组，是所有者所在的组

#### 3.1.2、修改文件的所有者

chown （change owner改变所有者）

chown 用户名 文件名

chown -R 用户名 目录名
#将目录下的所有目录文件的所有者以递归的方式修改
#详情请参见3.7

#案例：使用root创建一个文件apple.txt,然后将其修改成tom
#------使用root用户  创建apple.txt
touch /home/apple.txt
#查看所有者  apple.txt是属于root的
ls -ahl

#还是在root用户下操作   修改文件的所有者
chown tom /home/apple.txt
#再次查看apple.txt的所有者
ls -ahl


修改文件所有者图示：



文件所有者所在的组，不一定是文件所在组。

### 3.2、文件/目录所在组

#### 3.2.1、查看文件/目录所在组

ls -ahl
#前面已经用到过了


#### 3.2.2、修改文件所在组

chgrp（change group选择组）

chgrp 组名 文件名

chgrp -R 组名 目录名 
#将目录下的所有目录文件的所在组使用递归的方式修改
#详细请参见3.7

#实例：使用root用户创建文件orange.txt,看看当前这个文件属于哪个组，然后将这个文件所在组，修改到police组。
touch /home/orange.txt
ls -ahl

chgrp police /home/orange.txt
ls -ahl

### 3.3、其他组

除文件的所有者和所在组的用户外，系统的其他用户都是文件的其他组。

### 3.4、改变用户所在组

在添加用户时，可以指定将该用户添加到哪个组中，同样的用root的管理权限可以改变某个用户所在的组。

#改变用户所在组
usermod -g 组名 用户名	#改变该用户所在的组
usermod -d 目录名 用户名 #改变该用户登录的初始目录

#实例：创建一个土匪组（bandit），将tom这个用户从原来所在的police组，修改到bandit（土匪）组。
groupadd bandit
usermod -g bandit tom
id tom  #查看用户

### 3.5、权限的基本介绍

进入/home目录 使用命令查看文件

ls -l



以其中第一个apple.txt为例来解读：

-   rw-  r--  r--  1 tom  root  0  Jun 20 00:02  apple.txt
1    2    3    4   5  6    7    8       9          10
#1  文件的类型
#[-：普通文件]
#[d:目录]
#[l:软链接]
#[c:字符设备（键盘，鼠标）]
#[b:快文件，硬盘]

#2  表示文件/目录所有者权限
#3   文件/目录所在组的用户的权限
#4   文件/目录其它组的用户的权限
#-----[r:可读]
#-----[w:可写]
#-----[x:]
#-----[-:没有权限]

#5  
#如果是文件，表示硬链接的数
#如果是目录，表示目录的子目录的个数

#6  文件/目录所在用户
#7  文件/用户所在组
#8  文件的大小，单位：字节，，，如果是目录，显示4096
#9  文件/目录最后的修改时间
#10 文件/目录名

### 3.6、rwx权限详解

#### 3.6.1、rwx作用在文件上

[r] 代表可读（read）：可以读取、查看

[w]代表可写（write）:可以修改，但是不代表可以删除该文件，删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件。

[x]代表可执行（execute）：可以被执行

#### 3.6.2、rwx作用到目录上

[r]代表可读（read）：可以读取，ls查看目录内容

[w]代表可写（write）:可以修改，目录创建+删除+重命名目录

[x]代表可执行（execute）：可以进入该目录

### 3.7、权限的管理

#### 3.7.1、修改权限

通过chmod指令，可以修改文件或者目录的权限。

##### 3.7.1.1、使用+、-、=变更权限

#u:所有者（user）
#g:所有组（group）
#o:其他人（other）
#a:所有人（all）（u、g、o的总和）

chmod u=rwx,g=rx,o=x 文件目录名
#表示给所有者读、写、执行权限 ，给所有组读和执行权限，给其他人执行权限

chmod o+w 文件目录名
#表示给其他人添加写的权限

chmod a-x 文件目录名
#表示给所有人去除执行的权限

#案例
#1、给abc文件的所有者读写执行的权限，给所有组读执行权限，给其他组读执行权限
chmod u=rwx,g=rx,o=rx abc
#2、给abc文件的所有者除去执行的权限，增加所有组写的权限
chmod u-x,g+w abc
#3、给abc文件的所有用户添加读的权限
chmod a+r abc

##### 3.7.1.2、使用数字变更权限

#规则 
r=4   #二进制 100
w=2   #二进制 010
x=1	  #二进制 001
rwx=4+2+1=7 

chmod u=rwx,g=rx,o=x 文件目录名
#相当于
chmod 751 文件目录名

#案例：将/home/abc.txt文件的权限修改成rwxr-xr-x，使用数字的方式实现
chmod 755 /home/abc.txt

#### 3.7.2、修改文件的所有者

chown newowner file    #改变文件的所有者
chown newowner:newgroup file #改变用户的所有者和所有组
-R  #如果是目录  则使其下所有子文件或目录递归生效

#案例
#1、请将/home/abc.txt文件的所有者修改成tom
chown tom abc.txt
#2、请将/home/kkk目录下所有的文件和目录的所有者都修改成tom
chown -R tom kkk/

#### 3.7.3、修改文件所在的组

chgrp newgroup file #改变文件的所有组

#案例
#1、将/home/abc.txt文件的所在组修改成bandit(土匪)
chgrp bandit /home/abc.txt
#2、将/home/kkk 目录下所有的文件和目录的所在组都修改成bandit(土匪)
chgrp -R bandit /home/kkk

#### 3.7.4、最佳实践-警察和土匪游戏

police , bandit

jack,jerry：警察

xh , xq：土匪

#1、创建组
groupadd police
groupadd bandit

#2、创建警察和土匪
useradd -g police -m jack
useradd -g police -m jerry
useradd -g bandit -m xh
useradd -g bandit -m xq
#-----给用户设置密码
passwd 用户名

#3、jack创建一个文件，自己可以读写，本组人可以读，其它组没有任何权限
#---切换到jack用户
touch jack.txt
chmod o-r jack.txt 
#或
chmod 640 jack.txt

#4、jack修改改文件，让其他组人可以读，本组人可以读写
chmod o=r,g=rw jack.txt
#或
chmod 664 jack.txt

#5、xh投靠 警察，看看是否可以读写
#----切换到root用户   改变xh的组
usermod -g police xh

## 4、crond 任务调度

### 4.1、概念

任务调度：是指系统在某个时间执行的特定的命令或程序。

任务调度分类：1、系统工作：有些重要的工作必须周而复始的执行。如病毒扫描等。2、个别用户工作：个别用户可能希望执行某些程序，比如对mysql数据库的备份。



### 4.2、指令

crontab [选项]
#-e  编辑crontab定时任务
#-l  查询crontab任务
#-r  删除当前用户所有的crontab任务

#### 4.2.1、创建定时任务

crontab -e  #然后进行编辑

#### 4.2.2、查看定时任务

crontab -l

#### 4.2.3、删除所有定时任务

crontab -r

#### 4.2.4、重启定时任务

service crond restart [重启任务调度]

### 4.3、快速入门

#### 4.2.1、任务要求

设置任务调度文件：/etc/crontab

设置个人任务调度。执行crontab -e 命令

接着输入任务到调度文件

如：

*/1****ls -l /etc/>/tmp/to.txt
#意思是说每小时的每分钟执行ls -l /etc/ > /tmp/to.txt命令

#### 4.2.2、步骤如下(Ubuntu18)

crontab -e
*/1****ls -l /etc/>/tmp/to.txt


按Ctry + X 退出 ，按 Y 确定退出 ，最后按回车



出现这一句，说明任务调度成功。

#### 4.2.3、5个占位符说明

项目	含义	范围
第一个 *	一小时当中的第几分钟	0-59
第二个 *	一天当中的第几小时	0-23
第三个 *	一个月当中的第几天	1-31
第四个 *	一年当中的第几月	1-12
第五个 *	一周当中的星期几	0-7（0和7都代表星期日）

#### 4.2.4、特殊符号说明

特殊符号	含义

*	代表任何时间。比如第一个"*"就代表一小时中每分钟都执行一次的意思。
,	代表不连续的时间。比如"0 8,12,16 * * * * 命令"，就代表在每天的8点0分、12点0分、16点0分都执行一次命令
-	代表连续的时间范围。比如"0 5 * * 1-6 命令"，代表在周一到周六的凌晨5点0分执行命令
*/n	代表每隔多久执行一次。比如"*/10 * * * * 命令"，代表每个10分钟就执行一次命令
4.2.5、特定时间执行任务案例
时间	含义
45 22 * * * 命令	在22点45分执行命令
01 7 * * 1 命令	每周1的17点0分执行命令
0 5 1,15 * * 命令	每月1号和15号的凌晨5点0分执行命令
40 4 * * 1-5 命令	每周一到周五的凌晨4点40分执行命令
*/10 4 * * * 命令	每天的凌晨4点，每隔10分钟执行一次命令
0 0 1,15 * 1 命令	每月1号和15号，每周1的0点0分都会执行命令。
注意：星期几和几号最好不要同时出现，
因为他们定义的都是天。非常容易让管理员混乱。
4.4、应用实例
4.4.1、案例一
每隔1分钟，就将当前的日期信息，追加到/home/mydate文件中

##### 4.4.1.1、先编写一个文件 mytask1.sh

date >> /home/mydate
ls -l

##### 4.4.1.2、给mytask1.sh一个可执行权限

chmod u+x mytask1.sh

##### 4.4.1.3、crontab -e

##### 4.4.1.4、调用文件

*/1 * * * * /home/mytask1.sh

#### 4.4.2、案例二

每隔1分钟，将当前日期和日历都追加到/home/mycal文件中

##### 4.4.2.1、先编写一个文件 mytask2.sh

date >> /home/mycal
cal >> /home/mycal

##### 4.4.2.2、给mytask2.sh一个可执行权限

chmod u=rwx mytask2.sh

##### 4.4.2.3、crontab -e

##### 4.4.2.4、调用文件

*/1 * * * * /home/mytask2.sh

#### 4.4.3、案例三

每天凌晨2:00将mysql数据库testdb，备份到文件/home/mydb.bak中。

##### 4.4.3.1、先编写一个文件 /home/mytask3.sh

/usr/local/mysql/bin/mysqldump -u root -p a testdb > /home/mydb.bak

##### 4.4.3.2、给mytask3.sh一个可以执行权限

chmod 744 /home/mytask3.sh

##### 4.4.3.3、crontab -e

##### 4.4.3.4、调用文件

*/1 * * * * /home/mytask3.sh

## 5、Linux磁盘分区、挂载

### 5.1、分区基础知识

#### 5.1.1、分区的方式

##### 5.1.1.1、mbr分区

最多支持四个主分区

系统只能安装在主分区

扩展分区要占一个主分区

MBR最大只支持2TB，但拥有最好的兼容性

##### 5.1.1.2、gpt分区

支持无限多个主分区（但操作系统可能限制，比如windows下最多128个分区）

最大支持18EB的容量（1EB=1024PB , 1PB=1024TB）

windows7 64位以后支持gpt



### 5.2、Linux分区

lsblk -f  #ls block    查看系统的分区和挂载的情况。

#### 5.2.1、原理介绍

对于Linux来说无论有几个分区，分给哪一目录使用，它归根结底就只有一个根目录，一个独立且唯一的文件结构，Linux中每个分区都是用来组成整个文件系统的一部分。
Linux采用了一种叫“载入”的处理方法，它的整个文件系统中包含了一整套的文件和目录，且将一个分区和一个目录联系起来。这时要载入的一个分区将使它的存储空间在一个目录下获得。
示意图

#### 5.2.2、硬盘说明

Linux硬盘分为IDE硬盘和SCSI硬盘，目前基本上是SCSI硬盘
对于IDE硬盘，驱动器标识符为“hdx”，其中“hd”表示分区所在设备的类型，这里是指IDE硬盘了。“x”为潘浩（a为基本盘，b为基本从属盘，c为辅助主盘，d为辅助从属盘），“”代表分区，前四个分区用数字1到4表示，它们是主分区或扩展分区，从5开始就是逻辑分区。例：hda3表示为第一个IDE硬盘上的第三个主分区或扩展分区，hdb2表示为第二个IDE硬盘上的第二个主分区或扩展分区。
对于SCSI硬盘则标识为“sdx~”，SCSI硬盘是用“sd”来表示分区所在设备的类型的，其余则和IDE硬盘的表示方法一样。

### 5.3、挂载的经典案例

#### 5.3.1、需求

给我们的Linux系统增加一个新的硬盘，并且挂载到/home/newdisk

#### 5.3.2、实现

1、虚拟机添加硬盘
2、分区
3、格式化
4、挂载
5、设置可以自动挂载

##### 5.3.2.1、虚拟机添加硬盘

在【虚拟机】菜单中，选择【设置】，然后设备列表里添加硬盘，然后一路【下一步】，中间只有选择磁盘大小的地方需要修改，直到完成。然后重启系统（才能识别）！

##### 5.3.2.2、分区

fdisk /dev/sdb
m
n
p
Enter
Enter
w

#m  显示命令列表
#p  显示磁盘分区  同  fdisk -l
#n  新增分区
#d  删除分区
#w  写入并退出

##### 5.3.2.3、格式化

mkfs -t ext4 /dev/sdb1    #ext4 是分区类型

##### 5.3.2.4、挂载

先创建目录

mkdir /home/newdisk

挂载

mount /dev/sdb1 /home/newdisk

#mount 设备名称 挂载目录 -------------挂载
#umount 设备名称或者挂载目录 ----------断开挂载


当能看到这个目录时，就意味着挂载成功了，但是如果重新启动操作系统，那么这个挂载会消失

##### 5.3.2.5、设置可以自动挂载

设置永久挂载，当重启系统时，仍然可以挂载到 /home/newdisk

vim /etc/fstab



这个文件中记录了分区和挂载点的情况。

添加：

/dev/sdb1       /home/newdisk       ext4    defaults   0 0



启动自动挂载：

mount -a   # mount auto

重启操作系统

reboot

发现挂载关系自动成立。

### 5.4、磁盘情况查询

#### 5.4.1、查询系统整体磁盘使用情况

df -h
df -l

#-h 是human  适合人观察的方式展现出来

#### 5.4.2、查询指定目录的磁盘占用情况

du -h /目录
#查询指定目录的磁盘占用情况，默认为当前目录

-s 指定目录占用大小汇总

-h 带计量单位

-a 含文件

--max-depth=1 子目录深度

-c 列出明细的同时，增加汇总值

#实例：查询/opt目录的磁盘占用情况，深度为1
du -ach --max-depth=1 /opt


#### 5.4.3、磁盘情况-工作实用指令

##### 5.4.3.1、统计/home文件夹下文件的个数

ls -l /home | grep "^-" | wc -l   # "^-"  以-开头的是文件


##### 5.4.3.2、统计/home文件夹下目录的个数

ls -l /home | grep "^d" | wc -l   # "^d"  以d开头的是目录


##### 5.4.3.3、统计/home文件夹下文件的个数，包括子文件夹里

ls -lR /home | grep "^-" | wc -l   # "^-"  以-开头的是文件  -R 递归


##### 5.4.3.4、统计/home文件夹下目录的个数，包括子文件夹里

ls -lR /home | grep "^d" | wc -l   # "^d"  以d开头的是目录


##### 5.4.3.5、以树状显示目录结构

tree /home


## 6、网络配置

### 6.1、Linux网络配置原理图

### 6.2、网络IP和网关

#### 6.2.1、查看虚拟网络编辑器

#### 6.2.2、修改IP地址（修改虚拟网卡的IP）

#### 6.2.3、查看网关

#### 6.2.4、查看windows环境中VMnet8网络配置（ipconfig指令）

也可以通过界面查找



### 6.3、Linux网络环境配置

#### 6.3.1、指定固定IP

说明：直接修改配置文件来指定IP，并可以连接到外网（程序员推荐）

编辑：

#vim /etc/sysconfig/network-scripts/ifcfg-eth0   #ConOS
vim /etc/network/interfaces    #Ubuntu

要求：将IP地址配置成静态的，ip地址为192.168.184.130

vim /etc/network/interfaces

#静态分配的配置方法
auto eth0
iface eth0 inet static
address 192.168.0.1
netmask 255.255.255.0
gateway 192.168.0.1
#保存退出

#重启网络服务
service network restart

这地方有问题 以后还要自己研究一下-----------------------------------------------------------------

## 7、进程管理

### 7.1、基本介绍

在Linux中，每个执行的程序（代码）都称为一个进程。每一个进程都分配一个ID号。
每一个进程，都会对应一个父进程，而这个父进程可以复制多个子进程。例如www服务器
每个进程都可能以两种方式存在的。前台与后台（守护进程），所谓前台进程就是用户目前的屏幕上可以进行操作的。后台进程则是实际在操作，但由于屏幕上无法看到的进程，通常使用后台方式执行。
一般系统的服务都是以后台进程的方式存在，而且都会常驻在系统中。知道关机才能结束。

### 7.2、显示系统执行的进程

#### 7.2.1、查看进程的相关指令

ps    #查看目前系统中，有哪些正在执行的进程，以及这些进程执行的情况，可以不加任何参数
ps -a   #显示当前终端的所有进程信息
ps -u   #以用户的格式显示进程信息
ps -x   #显示后台进程运行的参数
ps -aux #查看详细信息  太多可以使用more分页查看  ps -aux | more
ps -aux | grep xxxx   #使用grep 过滤查找   System V展示风格

指令说明
参数	说明
USER	用户名称
PID	进程号
%CPU	进程占用CPU百分比
%MEM	进程占用物理内存百分比
VSZ	进程占用的虚拟内存大小（单位：kb）
RSS	进程占用的物理内存大小（单位：kb）
TT	终端名称，缩写
STAT	进程状态，其中S-睡眠，
S-表示该进程是绘画的先导进程，
N-表示进程拥有比普通优先级更低的优先级，
R-正在运行，
D-短期等待，
Z-僵死进程，
T-被跟踪或者被停止等待
STARTED	进程的启动时间
TIME	CPU时间，即进程使用CPU的总时间
COMMAND	启动进程所用的命令和参数，如果过长会被截断显示

#### 7.2.2、查看父进程的相关指令

ps -ef #查看父进程
ps -ef | more  #分页查看
#-e 显示所有进程
#-f 全格式

ps -ef | grep xxx   #是BSD风格

指令说明

参数	说明
UID	用户ID
PID	进程ID
PPID	父进程ID
C	CPU用于计算执行优先级的因子。数值越大，表名进程是CPU密集型运算，执行优先级会降低；数值越小，表名进程是I/O密集型运算，执行优先级会提高
STIME	进程启动的时间
TTY	完成的终端名称
TIME	CPU时间
CMD	启动进程所用的命令和参数

### 7.3、终止进程kill和killall

介绍：若是某个进程执行一般需要停止时，或是已消耗了很大的系统资源时，此时可以考虑停止该进程。使用kill命令来完成此项任务。

kill [选项] 进程号     #通过进程号杀死进程
killall 进程名称       #通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用
#常用选项 -9 表示强迫进程立即停止

### 7.4、进程的监控

top [选项]
#-d 秒数   指定top命令每隔几秒更新。默认是3秒在top命令的交互模式当中可以执行的命令
#-i       使top不显示任何闲置或者僵死的进程。
#-p	      通过指定监控进程ID来仅仅监控某个进程的状态
#交互操作：
#u 回车，再输入用户名-----------------专门监控某个用户
#k 回车，再输入要结束的进程ID号--------终止指定的进程
#P  以CPU使用率排序，默认就是此项
#M  以内存的使用率排序
#N  以PID排序
#q  退出top

netstat [选项]  #查看网络情况
#-an   按一定顺序排列输出
#-p    显示哪个进程在调用
netstat -anp | more   #查看所有的网络服务



## 8、服务(Service)管理

### 8.1、介绍

服务(Service)本质就是进程，但是是运行在后台的，通常都会监听某个端口，等待其他程序的请求，比如（mysql,sshd防火墙等），因此我们又称为守护进程，是Linux中非常重要的知识点。【原理图】



### 8.2、service管理指令

#service 服务名 [start | stop | restart | reload | status]
systemctl 服务名 [start | stop | restart | reload | status]

#实例1：查看当前防火墙的情况，关闭防火墙和重启防火墙
service iptables status  #ContOS
service iptables restart #ContOS

这地方还是有问题  稍后自行研究.............................

### 8.3、查看linux提供的服务

ls -l /etc/init.d

### 8.4、给服务的各个运行级别设置自 启动/关闭

chkconfig

chkconfig --list | grep xxx   #查看服务  ContOS
chkconfig 服务名 --list
chkconfig --level 5 服务名 on/off

## 9、Shell编程

### 9.1、为什么要学习Shell编程

Linux运维工程师在进行服务器集群管理时，需要编写Shell程序来进行服务器管理
对于JavaEE和python程序员来说，工作的需要，你的老大会要求你编写一些Shell脚本进行程序或者是服务器的维护，比如编写一个定时备份数据库的脚本。
对于大数据程序员来说，需要编写Shell程序来管理集群。

### 9.2、Shell是什么

Shell是一个命令行解释器， 它为用户提供了一个向Linux内核发送请求以便运行程序的界面系统级程序，用户可以用Shell来启动、挂起、停止甚至是编写一些程序。



### 9.3、Shell脚本的执行方式（fast start）

多行注释

:<<!  .....    !

脚本以 #!/bin/bash 开头(指定用什么进行解析)

脚本的编写：

vim hello.sh  #创建一个shell脚本   脚本的后缀是什么都可以，没有也行，一般为.sh
#编辑
#!/bin/bash           #指定使用bash解析
echo "hello world!"   #输出hello world

#保存并退出

脚本的执行

第一种方式：

sh hello.sh
sh ./hello.sh
sh /home/hello.sh

第二种方式：

先给hello.sh脚本加可执行权限，然后再直接执行

chmod u+x hello.sh
./hello.sh   #相对路径
#或 
/home/hello.sh  #绝对路径

### 9.4、Shell变量

#### 9.4.1、Shell的变量的介绍

Linux Shell 中的变量分为，系统变量和用户自定义变量。

系统变量：H O M E 、 HOME 、HOME、PWD、S H E L L 、 SHELL、SHELL、USER等等

比如：echo $HOME 等用法

显示当前shell中所有的变量: set

#### 9.4.2、shell变量的定义

##### 9.4.2.1、规则

变量=值        #定义变量  注意：中间不能用空格隔开
unset 变量       #撤销变量
readonly 变量    #声明静态变量  注意：静态变量不能unset

变量名称可以由字母、数字和下划线组成，但是不能以数字开头。
等号两侧不能有空格
变量名称一般习惯为大写

##### 9.4.2.2、普通变量

##定义变量
#!/bin/bash
a=11						#定义变量a
echo "a = $a"				#输出a

unset a						#撤销变量a
echo "unset a = $a"			#输出a
结果：



##### 9.4.2.3、静态变量

##声明静态变量
#!/bin/bash
readonly A=12
echo "readonly A = $A"

unset A
echo "readonly A2 = $A"

结果：



##### 9.4.2.4、将命令的返回值赋值给变量（重点）

A=`ls -la`    #反引号，运行里面的命令，并把结果返回给变量A
A=$(ls -la)   #等价于反引号

###实例
#!/bin/bash
A=`date`
echo "A = $A"

echo "----------------"

B=$(date)
echo "B = $B"

结果：



#### 9.4.3、设置环境变量

export 变量名=变量值     #将shell变量输出为环境变量
source 配置文件         #让修改后的配置信息立即生效
echo $变量名			 #查询环境变量的值

###实例
#1、在/home/shell/tomcat.sh文件中定义TOMCAT_HOME环境变量
#!/bin/bash
export TOMCAT_HOME="hello,my name is tomcat!"

#2、查看环境变量TOMCAT_HOME的值
source /home/shell/tomcat.sh
echo $TOMCAT_HOME

#3、在另外一个shell程序（/home/shell/usetomcat.sh）中使用TOMCAT_HOME
#!/bin/bash
A=$TOMCAT_HOME
echo "A = $A"

#### 9.4.4、位置参数变量

##### 9.4.4.1、介绍

当我们执行一个shell脚本时，如果希望获取到命令行的参数信息，就可以使用到位置参数变量

比如：

./myshell.sh 100 200  
#这个就是一个执行shell的命令行，可以在myshell脚本中获取到参数信息，类似于python的cmd传参


##### 9.4.4.2、基本语法

$n  #n为数字，$0代表命令本身，$1-$9代表第一到第九个参数，十以上的参数需要用大括号包含，如{10}
$*  #这个变量代表命令行中所有的参数，$*把所有的参数看成一个整体
$@  #这个变量也代表命令行中所有的参数，不过$@把每个参数区分对待
$#  #这个变量代表命令行中所有参数的个数

#实例：写一个脚本  打印出传递进去的11个参数及详细
#!/bin/bash
echo "param[0] ----  $0"
echo "param[1] ----  $1"
echo "param[2] ----  $2"
echo "param[3] ----  $3"
echo "param[4] ----  $4"
echo "param[5] ----  $5"
echo "param[6] ----  $6"
echo "param[7] ----  $7"
echo "param[8] ----  $8"
echo "param[9] ----  $9"
echo "param[10] ----  ${10}"
echo "param[11] ----  ${11}"

echo "param count is $#"
echo "param  -----------  $@"
echo "param  ===========  $*"

结果：



#### 9.4.5、预定义变量

就是shell设计者实现一键定义好的变量，可以直接在shell脚本中使用

$$   #当前进程的进程号（PID）
$!   #当前运行的最后一个进程的进程号(PID)
$?   #最后一次执行的命令的返回状态。如果这个变量的值为0，证明上一个命令正确执行；如果这个变量的值为非0（具体是哪个数，由命令自己来决定），则证明上一个命令执行不正确了。

应用实例:在一个shell脚本中简单使用一下预定义变量

#!/bin/bash
echo "当前进程的进程号 = $$"
#后台的方式运行tomcat.sh
./tomcat.sh &   #后台运行

echo "当前运行的最后一个进程的进程号 = $!"
echo "最后一次执行的命令的返回状态 = $?"

结果：



### 9.5、运算符

$((运算式))
#或
$[运算式]

expr m + n   #加
expr m - n	 #减
expr \*		 #乘
expr /		 #除
expr %		 #取余

案例1：

#!/bin/bash
M=100
N=5

echo "M + N = $((M + N))"

echo "M - N = $[M - N]"
MN1=`expr $M \* $N`
echo "M * N = $MN1"

C=`expr $M / $N`
echo "M / N = $C"

D=`expr $M % $N`
echo "M % N = $D"


结果：



案例二：求出命令行输入两个参数的和

#!/bin/bash
A=$1
B=$2
SUM=$[A+B]
echo "sum = $SUM"

结果：



### 9.6、条件判断

[ condition ]    #非空返回true   可使用$?严重（0位true，>1为false）   注意：condition前后要有空格

常用判断条件

两个整数的比较
符号	说明
=	字符串比较
-lt	小于
-le	小于等于
-eq	等于
-gt	大于
-ge	大于等于
-ne	不等于
按照文件权限进行判断
符号	说明
-r	有读的权限
-w	有写的权限
-x	有执行的权限
按照文件类型进行判断
符号	说明
-f	文件存在并且是一个常规的文件
-e	文件存在
-d	文件存在并是一个目录
##判断 "ok"和"ok"是否相等
#!/bin/bash
if [ "ok" = "ok" ]
then
        echo "equal"
fi

##23是否大于22
if [ 23 -gt 22 ]
then
        echo "大于"
fi

##判断文件是否存在
if [ -e /home/shell/aaa.txt ]
then
		echo "存在"
fi

### 9.7、流程控制

#### 9.7.1、if

if [ 条件判断式 ];then
    程序
fi

###或者

if [ 条件判断式 ]
then
    程序
elif [ 条件判断式 ]
then
    程序
fi


#编写sh脚本  输入参数，参数>=60,打印"及格了"，参数<60，打印"不及格"
#!/bin/bash
if [ $1 -ge 60 ]
then
        echo "及格了"
elif [ $1 -lt 60 ]
then
        echo "不及格"
fi

#### 9.7.2、case

case $变量名 in
"值1")
程序1
;;
"值2")
程序2
;;
..........
"值n")
程序n
;;
*)
如果变量的值都不是以上的值，则执行此程序
;;
esac

#实例

#!/bin/bash
case $1 in
        1)
                echo "一"
                ;;
        2)      
                echo "二"
                ;;
        3)      
                echo "三"
                ;;
        *)      
                echo "其他"
                ;;
esac 


#### 9.7.3、for循环

#语法一
for 变量 in 值1 值2 ... 值n
do
 程序
done

#实例：打印命令行输入的参数  $* $@
#！/bin/bash
for i in "$*"
do
		echo "the num is $i"
done

echo "-------------------------"

for j in "$@"
do
		echo "the num is $j"
done

#语法二
for((初始值;循环控制条件;变量变化))
do
	程序
done

#实例：从1加到100并输出结果
#！/bin/bash
SUM=0
for((i=1;i<=100;i++))
do
	SUM=$[$SUM+$i]
done
echo "最终结果是：$SUM"

#### 9.7.4、while循环

while [ 条件判断式 ]
do
	程序
done

#案例：从命令行输入一个n，统计从1+...+n的值是多少
#!/bin/bash
SUM=0
i=0
while [ $i -le $1 ]
do
		SUM=$[$SUM+$i]
		i=$[$i+1]
done
echo "sum = $SUM"


### 9.8、read读取控制台输入

read 选项 参数
#-p 指定读取值时的提示符（阻塞）
#-t 指定读取值时等待的时间（秒），如果没有在指定的时间内输入，就不再等待了

#案例1：读取控制台输入一个num值
#!/bin/bash
read -p "请输入一个数：" NUM1
echo "你输入的值是：$NUM1"

#案例2：读取控制台输入一个num值，在10秒内输入。
#!/bin/bash
read -t 10 -p "请输入一个数：" NUM1
echo "你输入的值是：$NUM1"

### 9.9、函数

#### 9.9.1、系统函数

basename [pathname] [suffix]  #返回完整路径最后/的部分，常用于获取文件名
#basename命令会删掉所有的前缀包括最后一个（"/"）字符，然后将字符串显示出来

#案例：请返回/home/shell/hello.sh的"hello.sh"部分
basename /home/shell/hello.sh
#shell脚本中：  echo `basename /home/shell/hello.sh`

#案例：请返回/home/shell/hello.sh的"hello"部分
basename /home/shell/hello.sh .sh
#shell脚本中：  echo `basename /home/shell/hello.sh .sh`

dirname 文件绝对路径 
#返回完整路径最后/的前面的部分，常用于返回路径部分
#从给定的包含绝对路径的文件名中去除文件名（非目录的部分），然后返回剩下的路径（目录的部分）

#实例：请返回/home/shell/hello.sh的/home/shell
dirname /home/shell/hello.sh
#shell脚本中：  echo `dirname /home/shell/hello.sh`

#### 9.9.2、自定义函数

function funname()
{
    Action;
    [return int;]
}

#应用实例：编写一个函数，计算两个参数的和,getSum
function getSum()
{
    SUM=$[$n1+$n2]
    echo "和是：$SUM"
}
read -p "请输入第一个数 n1:" n1
read -p "请输入第二个数 n2:" n2

getSum $n1 $n2

### 9.10、Shell编程综合案例

#### 9.10.1、需求：

每天凌晨2:10备份数据库 kugou 到 /home/mysql/data/db
备份开始和备份结束能够给出相应的提示信息
备份后的文件要求以备份时间为文件名，并打包成.tar.gz的形式，比如：2019-6-15_222222.tar.gz
在备份的同时，检查是否有10天前备份的数据库文件，如果有就将其删除。

#### 9.10.2、实现

##### 9.10.2.1、写脚本

/home/shell/testmysql.sh

#!/bin/bash
#完成数据库的定时备份

echo "=========开始备份=========="

#备份的路径
BACKUP=/home/mysql/data/db          
echo "备份的路径：${BACKUP}"

#获取到当前的时间
DATETIME=$(date +%Y-%m-%d_%H%M%S)  
echo "当前时间：${DATETIME}"

#主机
HOST=localhost
echo "主机：${HOST}"

#用户名
DB_USER=yxh_mysql
echo "用户名：${DB_USER}"

#密码
DB_PWD=a
echo "密码：${DB_PWD}"

#备份数据库名
DATABASE=shelltest
echo "备份数的据库名：${DATABASE}"

#创建备份路径
#如果备份路径存在，就使用，否则就创建
[ ! -d "$BACKUP/$DATETIME" ] && mkdir -p "$BACKUP/$DATETIME"

#执行mysql的备份数据库命令
mysqldump -u${DB_USER} -p$DB_PWD --host=$HOST $DATABASE | gzip > $BACKUP/$DATETIME/$DATETIME.sql.gz

#打包备份文件
cd ${BACKUP}
tar -zcvf $DATETIME.tar.gz $DATETIME

#删除临时目录
rm -rf $BACKUP/$DATETIME

#删除10天前的备份文件
find $BACKUP -mtime +10 -name "*.tar.gz" -exec rm -rf {} \;

echo "=========备份完成========"

9.10.2.2、定时

##### crontab -e

10 2 * * * /home/shell/testmysql.sh

