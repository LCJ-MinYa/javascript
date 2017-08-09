# node安装
sudo yum install epel-release(安装epel源)  
sudo yum install nodejs(安装node)  
中途如果有需要的按y确认即可，安装成功之后可以通过node -v和npm -v来查看node的版本和npm包的版本。  

# nginx安装和开机启动
yum install nginx(安装nginx)  
sudo systemctl enable nginx.service（设置开机启动）  
/usr/share/nginx/html(网站文件存放默认目录)  
/etc/nginx/conf.d/default.conf(网站默认站点配置)   
/etc/nginx/conf.d/(自定义Nginx站点配置文件存放目录)  
/etc/nginx/nginx.conf(Nginx全局配置)