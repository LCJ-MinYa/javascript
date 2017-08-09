<pre>
yum info mongo
</pre>
monge代表软件包名称，可以通过上面指令查询yum是否可以安装该软件包，如果返回错误，那就需要安装软件包源。  
  
# 如何添加mongodb的源,首先需要确定你的操作系统是 32位还是 64位?
如何确定?使用下面的命令  
uname -a  
如果输出的信息包含 x86_64 说明你的系统是64位,如果不包含说明是32位系统.不同版本的系统对应创建如下相关的源信息.  
执行如下命令创建源  
<pre>
cd /etc/yum.repos.d/
vi mongodb.repo  //创建一个源文件 mongodb.repo  你可以使用vi ,vim 命令等
</pre>
<pre>
[mongodb-org-3.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.0/x86_64/
gpgcheck=0
enabled=1
</pre>
通过命令  
<pre>yum -y install mongodb-org</pre>
等待完成即可。  
  
设置mongodb开机自启动  
MongoDB server 加入开机自启动  
  
vi /etc/rc.local 使用编辑器打开配置文件，并在其中加入下面一行代码  

/bin/mongod --dbpath /root/mongodb_data/ --fork --port 9000 --logpath=/root/log/mongodb/mongodb.log --logappend --auth
修改rc.local文件为有权限的可执行文件，如： chmod +x  rc.local(腾讯云直接有权限，不用修改，阿里云需要修改了才有权限)  

/etc/mongod.conf （为mongodb的配置文件）  

启动mongodb需要找到bin文件下的mongod这个文件目录，  

–dbpath /root/mongodb_data/（数据存放位置）  

–fork（以后台进程运行）  

–port 9000（运行在9000端口）  

–logpath=/root/log/mongodb/mongodb.log –logappend（日志目录，以追加形式添加日志）  