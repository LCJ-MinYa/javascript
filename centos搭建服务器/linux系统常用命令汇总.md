reboot （重启系统）  
ls (查看当前文件夹目录，不包含隐藏文件)  
ls -l(查看当前文件夹目录详细信息，不包含隐藏文件)  
mkfs.ext4 /dev/vdb （格式化vdb这个名称的硬盘，其中ext4为磁盘格式，例如ex2,ex3和window下面的NTFS）  
df -h（查看生效的系统盘和数据盘）  
name在下文中统一代表变量，即你自己想要操作的对应的文件或文件名等  
cd name(移动目录)  
cat name(输入文件内容，不能编辑)  
vi name(打开文件编辑，i编辑，ESC退出编辑 :wq保存退出，:q退出不保存 :q!强制退出不保存)  
mkdir name(创建文件或文件夹)  
rm -rf name(删除文件夹或文件，且不需要提示用户)  
cp name1 name2(复制文件1到文件2，文件1必须存在)  
查看Centos端口命令：  
# netstat -lntp #查看监听(Listen)的端口  
# netstat -antp #查看所有建立的TCP连接  