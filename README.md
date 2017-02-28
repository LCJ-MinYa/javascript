# javascript
Javascript高级程序设计每日笔记

#HTML中使用JavaScript
1.script标签的type属性（表示编写代码使用的脚本语言的内容类型，MIME类型）通常写法为<script type="text/javascript"></script>
实际上，服务器在传送JavaScript文件时使用的MIME类型通常是application/x-javascript(包括之前我在服务器nginx里面设置缓存文件类型的时候也是使用的application/x-javascript)，所以设置text/javascript有可能导致脚本被忽略（但是日常中即便设置了我也没遇到过被忽略的情况，所以这个有待考证）。

2.script嵌入代码时，在解释器对script元素内部所有代码求值完毕之前，页面内其余内容都不会被浏览器加载或显示。（这就是为什么script要加载在文档末尾，不阻塞DOM的渲染）。
