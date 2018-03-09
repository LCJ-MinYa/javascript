# 环境

> centos 7.2(默认使用的firewalld, 我们需要禁止firewalld,启用iptables).  
> 阿里云虽然内置的firewalld,但是默认是不启动状态，通过命令查询状态.  
> systemctl status firewalld  
> 输出:  
> * firewalld.service   
   Loaded: masked (/dev/null; bad)  
   Active: inactive (dead)   
   dead表示firewalld未开启

# 查看防火墙当前生效规则命令
> iptables -L -n