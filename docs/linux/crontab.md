# 定时任务 crontab

## 一、crontab 说明

```
crontab [-u username]　　　　//省略用户表表示操作当前用户的crontab
    -e      (编辑工作表)
    -l      (列出工作表里的命令)
    -r      (删除工作作)
```

## 二、执行 crontab -e 插入任务

> 更多参考：https://man.linuxde.net/crontab

```
备注：crontab的命令构成为 时间+动作，其时间有分、时、日、月、周五种，操作符有
例如：* * * * * /usr/local/php/bin/php /root/桌面/crontab.php   //将会每分钟运行这个命令
```

## 三、重新加载配置文件以及重启 crontab

```
service crond status|stop|start|reload
```
