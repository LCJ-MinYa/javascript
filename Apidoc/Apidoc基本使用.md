## 全局安装apidoc
* npm install -g apidoc

## 项目内创建apidoc.json
```
/**
 *  sampleUrl设置可以全局开启发送请求，即模拟请求
 *  withGenerator关闭apidoc的文本
 *  footer 自定义底部DOM
 */
{
    "name": "恣意游",
    "version": "1.0.0",
    "description": "恣意游API接口文档",
    "title": "恣意游API",
    "url": "https://api.ziyiu.com/life",
    "sampleUrl": "https://api.ziyiu.com/life",
    "template": {
        "withGenerator": false
    },
    "footer": {
        "title": "关于恣意游",
        "filename": "./src/apidoc/footer.md"
    }
}


/**
 * package.json配置命令
 * npm run apidoc编译apidoc
 * npm run bulid 编译apidoc和项目一起执行
 * -i src/即编译src目录下api注释, -o view/index指输出目录
 */

 "scripts": {
    "start": "node development.js",
    "test": "THINK_UNIT_TEST=1 nyc ava test/ && nyc report --reporter=html",
    "compile": "babel --no-babelrc src/ --presets think-node --out-dir app/",
    "lint": "eslint src/",
    "lint-fix": "eslint --fix src/",
    "build": "npm run apidoc && npm run compile",
    "apidoc": "apidoc -i src/ -o view/index"
}
```

## 与thinkjs融合的BUG解决
* 静态资源目录问题
```
//publicPath: /^\/(static|favicon\.ico)/
如果直接注释中间件的publicPath，可以成功访问index.html和静态资源，但是会导致项目get请求报错
Access to XMLHttpRequest at 'http://127.0.0.1:8084/life/search/searchSuggestion?wd=a&uid=5c097013-3d8a-482f-8131-50a833983175&timestamp=1543596480560&accessToken=141d5a1' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

解决办法
options: {
    root: path.join(think.ROOT_PATH, 'view/index/'),
    publicPath: /^\/(main\.js|api_data\.js|api_project\.js|css|fonts|img|utils|vendor|locales|favicon\.ico)/
}
```