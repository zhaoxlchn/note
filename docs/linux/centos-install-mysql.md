# CentOS 安装 MySQL、nginx、PHP(PHP-FPM)

## 【CentOS 安装 MySQL】

1. wget http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
2. rpm -ivh mysql57-community-release-el7-11.noarch.rpm
3. yum install mysql-community-server
   > 备注：会自动安装最新的 mysql5.7

---

## 【CentOS 安装 nginx】

### 一、检查并安装所需的依赖软件

1. gcc:nginx 编译依赖 gcc 环境

   > 安装命令：yum install gcc-c++

2. pcre:(Perl Compatible Regular Expressions)是一个 Perl 库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式

   > 安装命令：yum install -y pcre pcre-devel

3. zlib：该库提供了很多种压缩和解压缩的方式，nginx 使用 zlib 对 http 包的内容进行 gzip。

   > 安装命令：yum install -y zlib zlib-devel

4. openssl:一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。nginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http）.

   > 安装命令：yum install -y openssl openssl-devel

### 二、下载 nginx 源码包

1. nginx 各版本源代码下载地址：https://nginx.org/download/

   > 下载命令：wget http://nginx.org/download/nginx-1.12.0.tar.gz

### 三、解压缩源码包并进入

1. 解压缩

   > 命令：tar -zxvf nginx-1.12.0.tar.gz

2. 进入解压缩后文件夹

   > 命令：cd nginx-1.12.0

### 四、配置编译参数(可以使用./configure --help 查询详细参数)

```
命令:
./configure \
--prefix=/usr/local/nginx \
--pid-path=/var/run/nginx/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi \
--with-http_stub_status_module \
--with-http_ssl_module
```

> 注：安装之前需要手动创建上面指定的 nginx 文件夹，即/var/temp、/var/temp/nginx、/var/run/nginx/文件夹，否则启动时报错

### 五、编译并安装

> 命令：make && make install

    可以进入/usr/local/nginx查看文件是否存在conf、sbin、html文件夹，若存在则安装成功

### 六、启动 or 停止 nginx

> 1.  在命令行中进入 nginx 安装目录的 sbin 目录
> 2.  在 nginx 安装成功后将 nginx 的 sbin 目录添加的用户 bin 目录

**在上述操作完成之后，运行命令**

> 1. 启动：nginx
> 2. 停止：nginx -s stop

### 七、参考文档

[Centos7 安装 Nginx 实战](http://www.cnblogs.com/hafiz/p/6891458.html)

---

## 【CentOS 安装 PHP(php-fpm)】

### 一、准备编译环境，依次执行下面命令，部分命令和前面安装 nginx 可能有重复（未详细深究区别）

> yum -y install gcc automake autoconf libtool make  
> yum -y install gcc gcc-c++ glibc  
> yum -y install libmcrypt-devel mhash-devel libxslt-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel libidn libidn-devel openssl openssl-devel

### 二、下载 PHP 源代码

> 1、直接官网下载，然后拷贝到 Linux 中（拷贝地址看自己）  
> 2、用 wget 命令下载

### 三、解压文件，并进入解压目录

> 1、进入到 PHP 源代码压缩包目录，例：tar -zxvf php-7.1.13.tar.gz  
> 2、进入解压目录

### 四、配置编译参数并安装

> 1、配置内容：（prefix=/usr/local/php 是此 PHP 安装的位置）

```
./configure \
--prefix=/usr/local/php \
--enable-fpm \
--enable-mbstring \
--enable-pdo \
--with-pdo-mysql \
--with-pdo-sqlite \
--with-curl \
--disable-debug \
--disable-rpath \
--enable-inline-optimization \
--with-bz2 \
--with-zlib \
--enable-sockets \
--enable-sysvsem \
--enable-sysvshm \
--enable-pcntl \
--enable-mbregex \
--with-mhash \
--enable-zip \
--with-pcre-regex \
--with-mysqli \
--with-gd \
--with-jpeg-dir
```

> 2、安装

```
make && make install
```

### 五、配置 PHP-FPM

#### 1、进入 PHP 安装目录，把 fpm 默认配置文件拷贝一份，然后打开文件并修改内容

```
1、cd /usr/local/php
2、cp etc/php-fpm.conf.default etc/php-fpm.conf
3、vi etc/php-fpm.conf
```

> 在此处安装的 PHP 版本中，php-fpm.conf 文件并没有把所有配置内容都包含到里面的，而是在同级目录“ php-fpm.d ”下面的文件中有其他配置。见 php-fpm.conf 最后一行

```
include=/usr/local/php/etc/php-fpm.d/*.conf
```

> 将“ php-fpm.d ”目录下“ www.conf.default ”拷贝成一份为“ www.conf ”的文件，命令同上。

### 六、PHP-FPM 的启动与关闭

#### 1、启动

```
php-fpm
```

#### 2、关闭(路径根据自己情况变动)

```
kill -INT cat /usr/local/php/var/run/php-fpm.pid
```

#### 3、重启(路径根据自己情况变动)

```
kill -USR2 cat /usr/local/php/var/run/php-fpm.pid
```

> 如果上面提示找不到命令，执行下面两行代码之一（路径视自己情况变动）

```
export PATH=$PATH:/usr/local/PHP/bin
ln -s /www/wdlinux/wdphp/bin/php /usr/local/bin/php
```

### 七、设置 nginx 配置文件 nginx.conf

> 1、修改 nginx 默认首页文件，追加 index.php  
> 2、将 nginx.conf 关于 PHP-FPM 部分的注释去掉，并修改一些内容

```
location ~ .php$ {
    root html;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}
```

### 八、参考网站

[Linux 下安装 php 环境并且配置 Nginx 支持 php-fpm 模块](https://www.cnblogs.com/freeweb/p/5425554.html)

[nginx php-fpm 安装配置](http://www.nginx.cn/231.html)
