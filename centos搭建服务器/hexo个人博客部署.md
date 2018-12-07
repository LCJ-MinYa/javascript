## 服务器配置

### nginx配置访问目录和域名
* 1./root/www/下新建blog目录（可新建一个index.html测试访问）
* 2.配置nginx转发blog.ziyiu.com到/root/www/blog(并配置https，日志文件目录等)
* 3.yum install -y git(安装git)
* 4.位置:/root/git/blog/blog.git 命令: git init --bare blog.git(Git 初始化裸库)
* 5.位置:/root/git/blog/blog.git/hooks/post-receive 命令: vi post-receive （创建 Git 钩子hook,默认没有该文件，新建）
* 6.钩子写入内容
```
#!/bin/bash
git --work-tree=/root/www/blog --git-dir=/root/git/blog/blog.git checkout -f
```
> 到此服务器配置完成，本地直接ssh到服务器触发git钩子即可

### 本地配置

* 安装hexo脚手架
```
yarn install -g hexo-cli
```

* 初始化blog项目
```
hexo init blog
cd blog
yarn install
```

* 更改配置文件_config.yml
```
# URL
### If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://blog.ziyiu.com      //个人域名

# Deployment
### Docs: https://hexo.io/docs/deployment.html
deploy:     //发布对应的github账号
type: git
repo: ssh://root@IP:PORT/root/git/blog/blog.git
branch: master
```

* 发布
```
hexo clean //清除缓存
hexo generate //生成静态页面
hexo deploy //将本地静态页面目录部署到云服务器
```


### 问题汇总
* 请使用yarn而不是npm安装
* ERROR Deployer not found: git
```
缺少包hexo-deployer-git
yarn install hexo-deployer-git --save
```

* ssh: connect to host 62.234.1.82 port 22: Connection refused
```
服务器更改了ssh 22端口
_config.yml中ssh地址加上端口号
```

* 警告信息
```
ERROR Plugin load failed: hexo-renderer-marked
Error: EISDIR: illegal operation on a directory, read
ERROR Plugin load failed: hexo-server
Error: EISDIR: illegal operation on a directory, read
ERROR Plugin load failed: hexo-renderer-stylus
Error: EISDIR: illegal operation on a directory, read

解决办法，先用 yarn 分别移除，再重新安装，如下
## 先移除
yarn remove hexo-renderer-marked

yarn remove hexo-renderer-stylus

yarn remove hexo-server

## 再安装
yarn add hexo-renderer-marked -S

yarn add hexo-renderer-stylus -S

yarn add hexo-server -S
```
