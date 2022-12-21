# MySQL 的一些查询小方法

##### 1、MySQL 查询字段字数满足某个值的数据 （CHAR_LENGTH 函数的使用）

```
例：查询title字数等于3的所有数据，也配合使用大小于符号
    SELECT * FROM `table` WHERE CHAR_LENGTH(`title`)=1
注：CHAR_LENGTH 函数与 LENGTH 函数的区别是前者自动把3字节的中文当成1个字符
```

##### 2、正则表达式 （REGEXP 的使用）

```
例：匹配所有字母
    SELECT * FROM `one` WHERE `title` REGEXP '[a-zA-Z]+'
注：MySQL并不能支持所有正则特性，比如元字符\d、\D等
```

##### 3、排序时指定某值在前面

```
例：表中数据status值有1，2，3，4。现在希望排序为 2，1，4，3
    SELECT
	*
    FROM
	yii_goddess_real
    ORDER BY
    (
        CASE
            WHEN `status` = 2 THEN 1
            WHEN `status` = 1 THEN 2
            WHEN `status` = 4 THEN 3
            ELSE 4
        END
    )
注：else作用是，如果有其他值，则指定排序值为4，排在最后
```
