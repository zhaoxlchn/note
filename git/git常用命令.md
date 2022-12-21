```
创建SSH Key
ssh-keygen -t rsa -C "youremail@example.com"
```
```
1、删除不存在对应远程分支的本地分支
git remote prune origin
```
```
2、更新
git pull
```
```
3、提交
git push [origin] [master]  注：后面两个参数根据情况填写，可在push后面添加参数 -u 关联远程分支，后面就可不指定远程分支直接提交或者拉取
```
```
4、删除本地绑定的远程分支
git remove rm [origin]
```
```
5、查看分支
git branch
```
```
6、创建分支
git branch <name>
```
```
7、切换分支
git checkout <name>
```
```
8、创建+切换分支
git checkout -b <name>
```
```
9、合并某分支到当前分支
git merge <name>
```
```
10、删除分支
git branch -d <name>
```

```
11、修改最后一次提交的备注
git commit --amend
```

```
12、将某个源的线上分支与本地分支绑定
git branch --set-upstream-to=<origin>/<master> <master>
```

```
13、去掉本地分支与远程分支绑定关系
注：要先切换到对应分支
git branch --unset-upstream
```