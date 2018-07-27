# PATH环境变量
* 配置文件优先级/etc/profile /etc/paths ~/.bash_profile ~/.bash_login ~/.profile ~/.bashrc
* 1./etc/profile全局环境变量，所有用户都会生效（不建议修改）
* 2./etc/bashrc （一般在这个文件中添加系统级环境变量） 全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。
* 3.~/.bash_profile （一般在这个文件中添加用户级环境变量） 每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该文件仅仅执行一次!

```
export ANDROID_HOME=/Users/minya/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_151.jdk/Contents/Home
export NDK_HOME=/Users/minya/android-ndk-r10d
export ANDROID_NDK_ROOT=/Users/minya/Library/Android/sdk/ndk-bundle
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export FLUTTER_HOME=/Users/minya/flutter
export PATH=$NDK_HOME:$FLUTTER_HOME/bin:$PATH
```
> 注意：export PATH只能导出一次，如果有多个环境变量需要添加进PATH中，格式$JAVA_HOME:$NDK_HOME:$FLUTTER_HOME:$PATH  
> $PATH跟在最后，中间用:连接
# 命令
* echo $PATH (查看所有PATH环境变量)
* echo $ANDROID_HOME (查看安卓环境变量)
* sourch .bash_pro (重新生效环境变量配置)
* cd /Users/minya (当前用户名minya)