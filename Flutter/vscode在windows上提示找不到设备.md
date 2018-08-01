## vscode在windows上提示找不到设备
> 已经启动模拟器，并且通过adb devices可以查看到设备  
> 通过命令行flutter run可以运行，唯独在vscode中F5不能运行  
> vscode通过F5运行报错信息: Cannot launch without an active device  
> vscode通过终端运行报错信息: Unable to find git in your PATH  

* shell的path环境导致的问题，在cmder中有git的环境变量，在vscode中终端没有git变量，通过在cmder中打印path环境变量找到git环境变量的位置，然后添加到全局path环境变量中即可