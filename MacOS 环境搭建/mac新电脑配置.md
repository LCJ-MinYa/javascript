## 删除并禁止.DS_Store产生
* sudo find / -name ".DS_Store" -depth -exec rm {} \; (删除所有隐藏.DS_store文件)
* defaults write com.apple.desktopservices DSDontWriteNetworkStores true (设置不再产生选项)
> DS_Store 是给Finder用来存储这个文件夹的显示属性的：比如文件图标的摆放位置。删除以后的副作用就是这些信息的失去。