# MySQL 查询会导致索引失效的情况

 
 
### 1、varchar类型字段创建了唯一索引后，如果查询传入的是数字，会导致索引失效
> 测试数据库版本 5.7.37
```sql
EXPLAIN SELECT * from member WHERE member_token = '10005'
```
| id  | select_type | table  | type  | possible_keys | key          | key_len | ref   | rows | filtered |
|-----|-------------|--------|-------|---------------|--------------|---------|-------|------|----------|
| 1   | SIMPLE      | member | const | member_token  | member_token | 242     | const | 1    | 100.00   |

```sql
EXPLAIN SELECT * from member WHERE member_token = 10005
```
| id  | select_type | table  | type | possible_keys | key | key_len | ref | rows | filtered | extra       |
|-----|-------------|--------|------|---------------|-----|---------|-----|------|----------|-------------|
| 1   | SIMPLE      | member | all  | member_token  |     |         |     | 9    | 11.11    | Using where |
