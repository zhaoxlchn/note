# MySQL 服务相关内容

##### 1、MySQL 服务启动与关闭

```shell
service mysqld start
service mysqld stop
```

##### 2、新装 MySQL 会自己默认设置一个密码

```
文件位置： /var/log/mysqld.log temporary password所在那一行
```

##### 3、修改 MySQL 密码， 及新装数据库远程访问设置

```
set password = password('123456');

grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;

flush privileges;

--注释：没法设置短密码时先执行下面方法
set global validate_password_policy=LOW; --指定密码检查级别为最低
set global validate_password_length=6; --指定密码最小长度
```

##### 4、Windows 下 MySQL 服务操作

```
mysqld install （将MySQL添加到服务）
mysqld remove （将MySQL服务移除）
```

##### 5、配置文件相关

```
skip-grant-tables  作用：允许无密码登录（如：忘记密码）
skip-name-resolve  作用：禁止mysql做域名解析（如：连接mysql时，不能使用 localhost连接了，而是要使用IP地址的）
```

##### 6、Windows 下压缩包安装方式初始化

```
mysqld --initialize
```

##### 7、主从配置（从连接主）

```
查看主机二进制文件参数：show master status;
建立连接：change master to master_host='192.168.0.101', master_user='root', master_password='123456',master_log_file='mysql-bin.000001', master_log_pos=154;
开始同步：start slave;
查看状态：show slave status \G;
```

##### 8、全局修改设置 SET GLOBAL

```
例如修改sql_mode：set global sql_mode = 'STRICT_TRANS_TABLES';
```

##### 9、查看设置

```
查看所有
show global variables;
查看指定设置 select @@
例如：select @@sql_mode
```
