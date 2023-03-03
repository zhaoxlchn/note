# 创建一个与远程关联的 git 库

<br>

---

##### 1、在码云上面创建一个版本库，获取 SSH 地址

##### 2、在本地计算机创建一个目录，在目录里面执行命令：git init

> 注：作用是创建本地版本库

##### 3、在上面创建的目录执行命令，git remote add origin SSH 地址

> 注：origin 不是非得这个名字，可用其他，这个单词相当于是 SSH 地址的一个别名

##### 4、执行更新：git pull origin master

> 注：此处 origin 需要与上面保持一致

##### 5、phpstrom 中假如不能更新，并且报错内容大致如下时，解决方法就是运行报错最后一段命令

```
报错信息
No tracked branch configured for branch master or the branch doesn't exist.
To make your branch track a remote branch call, for example,Push rejected: Push to origin/master was rejected
git branch --set-upstream-to origin/master master
```
