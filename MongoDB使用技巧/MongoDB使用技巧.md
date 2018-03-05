## mongodb连接数据库
>mongo命令默认连接27017端口数据库
>要连接特定端口数据库命令: mongo --port 端口号  

## mongodb开启密码验证怎么登录
>首先通过上面命令连接数据库，然后use 对应数据库名，比如admin数据库--> use admin
>然后使用 db.auth("账号","密码");  

## mongodb添加新数据库账号
> 1.首先登陆admin账号，保证有创建新数据库账号的权限
* use admin 
* db.auth("userName","password") 
> 2.use你要新添加的数据库，然后创建用户(比如创建一个A的数据库: 
* use A 
* db.createUser({user:"Auser",pwd:"password",roles:[{"role":"readWrite","db":"A"}]}) 