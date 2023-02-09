# CentOS 修改 SSH 端口

##### 1、配置文件位置

```text
/etc/ssh/sshd_config
修改Port 22
```

##### 2、重启服务

```shell
systemctl restart sshd
```
