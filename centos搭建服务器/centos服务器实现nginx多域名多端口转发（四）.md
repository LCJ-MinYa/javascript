你需要配置虚拟主机，让 Nginx 监听不同的域名的80端口，然后转发到各自应用的实际端口  
首先，你需要编辑/etc/nginx/nginx.conf，在http模块中引入其他配置文件：  
include /etc/nginx/conf.d/*.conf;(注意：在阿里云和腾讯云的centos服务器中，这段话已经加入默认配置，所以不需要再添加了)  
这样你就可以在/etc/nginx/conf.d文件夹中分别设置每个虚拟主机。  
然后在上面的文件夹下分别新建文件/etc/nginx/conf.d/siteone.conf和/etc/nginx/conf.d/sitetwo.conf，当然文件名siteone，sitetwo随你起。  
<pre>
server {
    listen       80;
    server_name  siteone.lichaojun.com;
 
    access_log /root/log/nginx/siteone_access.log  main;
 
    location / {
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-Ip $remote_addr;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://127.0.0.1:8081/;
        proxy_redirect off;
    }
}
</pre>
其中:  
server_name: siteone.lichaojun.com;(代表你要监听的域名)  
access_log /root/log/nginx/siteone_access.log main;(代表你的nginx下该端口转发的日志记录)  
proxy_pass http://127.0.0.1:8081/;(8081代表转发的端口号)  
如果有多个域名要转发到不同的端口，新建配置文件更改对应的内容即可。  
  
nginx -t(全局，检查配置文件是否正确)  
nginx -s reload(重新加载配置文件)  