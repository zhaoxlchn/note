# git 常用命令

**创建SSH Key**
```shell
ssh-keygen -t rsa -C "youremail@example.com"
```

**1、删除不存在对应远程分支的本地分支**
```shell
git remote prune origin
```
**2、更新**
```shell
git pull
```

**3、提交**
```shell
git push [origin] [master]  #注：后面两个参数根据情况填写，可在push后面添加参数 -u 关联远程分支，后面就可不指定远程分支直接提交或者拉取
```

**4、删除本地绑定的远程分支**
```shell
git remove rm [origin]
```

**5、查看分支**
```shell
git branch
```

**6、创建分支**
```shell
git branch <name>
```

**7、切换分支**
```shell
git checkout <name>
```

**8、创建+切换分支**
```shell
git checkout -b <name>
```

**9、合并某分支到当前分支**
```shell
git merge <name>
```

**10、删除分支**
```shell
git branch -d <name>
```

**11、修改最后一次提交的备注**
```shell
git commit --amend
```

**12、将某个源的线上分支与本地分支绑定**
```shell
git branch --set-upstream-to=<origin>/<master> <master>
```

**13、去掉本地分支与远程分支绑定关系**
```shell
#注：要先切换到对应分支
git branch --unset-upstream
```
