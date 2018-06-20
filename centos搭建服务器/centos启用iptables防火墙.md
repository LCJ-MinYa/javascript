# 环境

> centos 7.2(默认使用的firewalld, 我们需要禁止firewalld,启用iptables).  
> 阿里云虽然内置的firewalld,但是默认是不启动状态，通过命令查询状态.  
> systemctl status firewalld  
> 输出:  
> * firewalld.service   
   Loaded: masked (/dev/null; bad)  
   Active: inactive (dead)   
   dead表示firewalld未开启，active表示生效  

# 查看防火墙当前生效规则命令
> iptables -L -n

# iptables规则文件目录
> /etc/sysconfig/iptables

# 步骤

* 为了安全起见，建议再禁止一次firewalld
	* 停止firewalld服务
```
systemctl stop firewalld
```
	* 禁止firewalld服务
```
systemctl disable firewalld
```

* 检查是否安装了iptables
```
service iptables status
```

* 安装iptables-services（iptables系统默认有，不需要重新安装）
```
yum install iptables-services
```

* 编辑iptables配置文件(默认规则只允许22端口,ssh登陆，禁止了其他所有端口)
```
默认配置文件:
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT
```

* 增加规则
```
1.增加开放端口必须放在-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT之后才能生效

#允许所有人访问80端口
-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT
#允许所有人访问443端口
-A INPUT -p tcp -m state --state NEW -m tcp --dport 443 -j ACCEPT
#允许所有人访问27017端口
-A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
#只允许xxx.xxx.xxx.xxxIP访问27017端口,如果要允许多个IP访问一个端口（重复多行）
-A INPUT -p tcp -s xxx.xxx.xxx.xxx --dport 27017 -j ACCEPT
```

* 已知规则但没有使用
```
禁止外部访问TCP的40080端口：
-A INPUT -p tcp --dport 40080 -j DROP

禁止外部访问TCP的3000到4000端口（端口范围）：
-A INPUT -p tcp --dport 3000:4000 -j DROP

禁止某个IP地址访问所有TCP端口：
-A INPUT -p tcp -s 192.168.1.2 -j DROP

禁止某个IP地址访问TCP的57025端口：
-A INPUT -p tcp -s 192.168.1.2 --dport 57025 -j DROP
```

* iptables命令
```
#启动
service iptables start

#重新启动
service iptables restart

#关闭iptables
service iptables stop

#最后重启防火墙使配置生效（等同重新启动）
systemctl restart iptables.service

#设置防火墙开机启动
systemctl enable iptables.service
```