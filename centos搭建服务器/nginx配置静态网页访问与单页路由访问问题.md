# nginx配置静态网页访问

> 前后端分离的项目，前端使用vue单页，打包之后项目文件的部署访问.

```
#http访问配置
server {
    listen 80;
    server_name www.ziyiu.com ziyiu.com;
    root /root/www/logWeb/;
    index index.html index.htm;
    access_log /root/nginx/log/logWeb_access.log  main;

	#解决单页路由问题
    location / {
        try_files $uri $uri/ @router;
        index index.html;
    }

    location @router {
        rewrite ^.*$ /index.html last;
    }
}
```

> 重启nginx运行以上配置，发现访问报403 forbidden错误,通过查看ngixn错误日志（如果没有设置log日志目录，默认位于/var/log/nginx/下，服务器与本机时间有出入，如果查看3-10日的，一般查看3-11的日志）
```
"/root/www/logWeb/index.html" is forbidden (13: Permission denied)
```

> 引起nginx 403 forbidden通常是三种情况：一是缺少索引文件，二是权限问题，三是SELinux状态。
* 一、缺少index.html或者index.PHP文件，就是配置文件中index index.html index.htm这行中的指定的文件,如果在目录下面没有index.php,index.html的时候，直接访问域名，找不到文件，会报403 forbidden。
* 二、权限问题，如果nginx没有web目录的操作权限，也会出现403错误。解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决(chmod -R 755 /目录地址)
* 三、SELinux设置为开启状态（enabled）的原因

**********以上都未成功，最终解决办法*********  
```
vi /etc/nginx/nginx.conf
将user nginx修改为user root成功解决
```