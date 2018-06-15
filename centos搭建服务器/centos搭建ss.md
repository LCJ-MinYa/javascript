## 安装
* yum update 更新yum源
* yum install python-pip 安装pip
* pip install shadowsocks

## 配置（配置文件可放在任何目录）
```javascript
{
  "server":"0.0.0.0",
  "server_port":修改成你的端口号,
  "local_port":1080,
  "password":"修改成你的密码",
  "timeout":600,
  "method":"aes-256-cfb"
}

// 多个端口配置如下

{
  "server":"0.0.0.0",
  "port_password":{
    "8388": "password1",
    "8389": "password2",
    "8390": "password3"
  },
  "local_port":1080,
  "timeout":600,
  "method":"aes-256-cfb"
}
```

## 关闭centos7防火墙
systemctl disable firewalld 禁止开机启动
* 看到如下命令代表禁用成功
> Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.  
> Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.  

## 设置ss开机启动
> 开机启动的文件目录 /etc/rc.d/rc.local
* 1.修改开启启动项 vi /etc/rc.d/rc.local,添加sudo ssserver -c /xxx/shadowsocks.json -d start
* 2.获取开机启动权限chmod +x /etc/rc.d/rc.local(CentOS 7正打算抛弃/etc/rc.d/rc.local，重启前需要运行以下命令获得权限，否则rc.local不会执行)

## 命令
* ssserver -c /xxx/shadowsocks.json -d start 后台运行
* ssserver -c /xxx/shadowsocks.json start 前台运行
* systemctl disable firewalld 禁止防火墙开机启动
* systemctl stop firewalld 临时禁止防火墙

## ss不能连接一些判断方法
* 本机安装客户端，需要开启系统代理PAC模式或者全局模式
* 本机ping服务器ip地址
* 站长工具ping ip地址（多地测试连接速度）
* 检查服务器是否开启ss服务（重新运行一次开启命令，并前台开启查看日志）
* 检查端口是否开放或是否关闭防火墙
* 查看客户端ss系统日志（很有用）
* 判断IP是否被墙，原理国内打不开，国外能
