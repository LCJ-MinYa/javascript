## mongodb连接数据库
>mongo命令默认连接27017端口数据库
>要连接特定端口数据库命令: mongo --port 端口号  

## mongodb开启密码验证怎么登录
>首先通过上面命令连接数据库，然后use 对应数据库名，比如admin数据库--> use admin
>然后使用 db.auth("账号","密码");  