# 安装 redis 服务

## 1、安装 redis 服务

### 1、安装命令

```shell
wget http://download.redis.io/releases/redis-5.0.3.tar.gz && tar -zxf redis-5.0.3.tar.gz //下载源码并解压

cd redis-5.0.3 //进入目录

make //编译

make install PREFIX=/usr/local/redis //安装到指定目录

cp redis.conf /usr/local/redis/bin/ //复制生成的配置文件到应用目录
```

### 2、修改配置文件、并复制到安装目录

```
1、以守护进程运行
    daemonize yes
2、数据备份文件保存目录修改
    dir /usr/local/redis/bin/
3、添加访问密码
    requirepass 123456
```

### 3、管理命令（命令不存在时到安装目录执行）

```
1、开启服务
    注：配置文件daemonize改为yes，才是以守护进程模式运行
    redis-server redis.conf //使用指定命令运行
2、命令行
    redis-cli -a 123456
```

## 2、安装 redis 扩展

```shell
wget http://pecl.php.net/get/redis-5.3.2.tgz && tar -zxf redis-5.3.2.tgz && cd redis-5.3.2/

phpize

./configure --with-php-config=/usr/local/php/bin/php-config

make && make install

vim /usr/local/php/etc/php.ini //修改配置文件，加入扩展
extension = redis

php -m
```
