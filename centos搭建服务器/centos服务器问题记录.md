1.服务器显示中文  设置语言配置即可  
2.服务器显示中文英文乱码的问题（1.xshell的编码必须跟服务器的编码一致，中文GB18030）  
3.pm2查看进程列表乱码的问题，pm2查看进程列表乱码不支持中文查看，修改xshell的编码为utf-8即可，不用修改服务器的语言编码  
4.关于重启nginx，网上的nginx的程序目录（sbin）不适用于centos 7用yum安装的nginx，正确的目录为 /sbin/nginx  
5.pm2同时启动多个node服务  
  
pm2 start app.js –name my-api   #my-api为PM2进程名称  
pm2 start app.js -i 0           #根据CPU核数启动进程个数  
  
mongodb http://yijiebuyi.com/blog/9daac70a111e4c3298a4cb69b5dc6214.html  
pm2 命令 http://www.111cn.net/sys/linux/120062.htm  
pm2 重启自启动 https://cnodejs.org/topic/57d8ebab5710e2ed658d6b2e  
mongodb开机自启动 http://blog.sina.com.cn/s/blog_8f02ae7601010nds.html  
mongod的目录为 /bin/mongod  
mongodb http://blog.csdn.net/u010818100/article/details/18085325  