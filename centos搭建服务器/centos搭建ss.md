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
## 命令
* ssserver -c /xxx/shadowsocks.json -d start // 后台运行
* ssserver -c /xxx/shadowsocks.json start // 前台运行
