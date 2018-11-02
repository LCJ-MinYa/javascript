## 安装
* 1.全局安装App Center CLI
> npm install -g appcenter-cli

* 2.注册App Center账号
> 通过[App Center注册地址](https://appcenter.ms)注册账号

* 3.命令行登陆App Center账号
> appcenter login

* 4.创建app应用
> 网页创建（推荐）,登陆状态下打开[App Center](https://appcenter.ms),add new app -> 填写信息 -> 完成  
> 命令行创建,命令行中=>  
> 格式：appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform>  
> 示例：appcenter apps create -d minya -o Android -p React-Native
```
注意: 应用创建后默认有两个部署 Staging Production
部署默认是有key值存在的
查看key值方法:
appcenter codepush deployment list -a minya/APP_IOS --displayKeys
appcenter codepush deployment list -a minya/APP_ANDROID --displayKeys
```

* 5.安装codepush
> 在对应项目目录下: npm install --save react-native-code-push

* 6.ios,android配置
> react-native link react-native-code-push

* 7.发布更新
> appcenter codepush release-react -a minya/APP_IOS -t 1.0.0 -m --description "更新描述"


## 命令
```
查看部署历史
appcenter codepush deployment history Staging

删除部署历史(Staging)
appcenter codepush deployment clear -a minya/APP_IOS Staging
```