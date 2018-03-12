# nginx配置静态网页访问

> 前后端分离的项目，前端使用vue单页，打包之后项目文件的部署访问.

```
#http访问配置
server {
    listen 80;
    server_name www.ziyiu.com ziyiu.com;
    root /root/www/logWeb/;
    index index.html index.htm;

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