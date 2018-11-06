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

## 多部署安装
> [多部署文档](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#multi-deployment-testing),按照文档配置即可。  
```
注意点:
debug {
    buildConfigField "String", "CODEPUSH_KEY", '""' //这里也可以添加测试环境的CODEPUSH_KEY然后在模拟器里面测试
}

releaseStaging {
    buildConfigField "String", "CODEPUSH_KEY", '"<INSERT_STAGING_KEY>"'
    //matchingFallbacks = ['release'] 该行添加会报错，注释即可编译
}
```

## 命令
```
查看部署历史
appcenter codepush deployment history Staging

删除部署历史(Staging)
appcenter codepush deployment clear -a minya/APP_IOS Staging
```

## 技巧
> 在使用codepush中，经常需要用到很多命令，但是一时间又不能完全记忆，可以使用package.json中的script中的命令配置
```
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "add ios": appcenter codepush release-react -a minya/APP_IOS,
    "add android": appcenter codepush release-react -a minya/APP_ANDROID,
    "delete ios staging": appcenter codepush deployment clear -a minya/APP_IOS Staging,
    "delete android staging": appcenter codepush deployment clear -a minya/APP_ANDROID Staging,
}
其中正式环境的发布不需要通过命令，在确认预发布环境ok直接可以通过appcenter页面点击按钮推送到正式环境
description描述信息换行问题，在命令行中\n,\\n,"\n","\\n"都尝试过，都不能换行，直接在appcenter页面上编辑回车就可以了。。。。
```