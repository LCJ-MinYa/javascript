# 设置centos系统为中文
cd /etc/locale.conf （语言设置位置，在文本内插入下面内容）  
<pre>
LANG="zh_CN.GB18030"
LANGUAGE="zh_CN.GB18030:zh_CN.GB2312:zh_CN"
SUPPORTED="zh_CN.UTF-8:zh_CN:zh:en_US.UTF-8:en_US:en"
SYSFONT="lat0-sun16"
</pre>

注意:  
1.保存文件之后重启一下让文件生效 reboot  
2.可以通过echo $LANG来查看当前系统的语言  
3.如果使用工具例如putty或者xshell必须保证该工具的字符编码与linux服务器的语言一致！！！  

# 查看centos服务器下是否包含数据盘
fdisk -l（即可查看当前所有硬盘状态）  
-df Th(查看当前硬盘挂载情况)  
目前阿里云不需要重新格式化数据盘直接挂载即可  
mkdir /data(在根目录下新建data文件夹)  
echo '/dev/vdb1 /data ext3 defaults 0 0' >> /etc/fstab(开机自行挂载)  
最后可以通过使用-df Th来验证挂载是否成功  