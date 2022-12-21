# docker 常用命令

#### 1、主进程管理

```
systemctl [start|stop|restart] docker
```

#### 2、拉取镜像/删除镜像

```
docker pull phpswoole/swoole
docker rmi [镜像id]
```

#### 3、本地已有镜像目录

```
docker images
或者
docker image list
```

#### 4、初次运行镜像的可选命令（命令中的 container 可以不写）

```
docker container run
    -p [主机端口]:[内部端口]/[tcp/udp协议]    --端口绑定，后面的协议可不填
    -it [镜像标签] /bin/bash    --进入容器的命令行
    -v [主机路径]:[内部路径]    --将主机一个路径映射到容器的一个路径

例：docker container run -p 80:80 -it nginx /bin/bash
特例（MySQL启动）：docker run --restart=always -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -itd mysql
```

#### 5、运行已经停止的容器/停止运行中得容器（命令中的 container 可以不写）

```
docker container start [容器id]
docker container stop [容器id]
```

#### 6、删除容器（运行中的需要先停止）

```
docker rm -v [容器id]
    -v --删除与容器关联的卷
    -f --通过 SIGKILL 信号强制删除一个运行中的容器。
    -l --移除容器间的网络连接，而非容器本身。
```

#### 6、全部容器列表

```
docker ps -a
或者
docker container ls --all
```

#### 7、进入一个容器的命令行

```
docker exec -it [容器id] /bin/bash
```
