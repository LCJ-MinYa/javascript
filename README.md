# react native
react native日常学习记录  
* <a href="https://github.com/LCJ-MinYa/javascript/blob/master/ReactNative/ReactNative%E4%B8%8E%E5%8E%9F%E7%94%9F%E4%BA%A4%E4%BA%92%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.md">ReactNative与原生交互注意事项</a>.  
* [ReactNative基础知识](https://github.com/LCJ-MinYa/javascript/blob/master/ReactNative/ReactNative%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.md)
* [ReactNative进阶知识](https://github.com/LCJ-MinYa/javascript/blob/master/ReactNative/ReactNative%E8%BF%9B%E9%98%B6%E7%9F%A5%E8%AF%86.md)
* [for循环textInput的问题](https://github.com/LCJ-MinYa/javascript/blob/master/ReactNative/for%E5%BE%AA%E7%8E%AFtextInput%E7%9A%84%E9%97%AE%E9%A2%98.md)

# javascript
Javascript高级程序设计每日笔记（我很懒..所以速度..）

## HTML中使用JavaScript（02/28）
* 1.script标签的type属性（表示编写代码使用的脚本语言的内容类型，MIME类型）通常写法为<script type="text/javascript"></script>
实际上，服务器在传送JavaScript文件时使用的MIME类型通常是application/x-javascript(包括之前我在服务器nginx里面设置缓存文件类型的时候也是使用的application/x-javascript)，所以设置text/javascript有可能导致脚本被忽略（但是日常中即便设置了我也没遇到过被忽略的情况，所以这个有待考证）。附<a href="https://www.zhihu.com/question/19794923/answer/14447791">一个介绍地址</a>

* 2.script嵌入代码时，在解释器对script元素内部所有代码求值完毕之前，页面内其余内容都不会被浏览器加载或显示。（这就是为什么script要加载在文档末尾，不阻塞DOM的渲染）。

* 3.文档创建基本格式<br />
<a href="https://github.com/LCJ-MinYa/javascript/blob/master/HTML%E4%B8%AD%E4%BD%BF%E7%94%A8JavaScript/pc.html">(1).pc项目（即需要支持IE8浏览器的文档创建）</a><br />
<a href="https://github.com/LCJ-MinYa/javascript/blob/master/HTML%E4%B8%AD%E4%BD%BF%E7%94%A8JavaScript/html5.html">(2).移动端项目（即html5文档，现代浏览器）</a>



## 变量、作用域、内存问题
1.基本类型和引用类型的值
null,string,undefined,bool,number => 基本类型
object => 引用类型

复制变量值的区别
基本类型的复制是创建新值然后将该值复制到新值分配的位置上
引用类型则是复制指针到一个新值，而复制前或复制后的指针实质上都指向存储在堆中的一个对象。

传递参数（都是按值传递）
基本类型的传递就如同复制值一样，而引用类型的传递就如同引用类型变量的复制一样，即复制指针。（这就是为什么传递进去的引用类型属性被修改，而外面原本的引用类型的属性也会被修改，延伸出来的就是深拷贝与浅拷贝。）

# centos服务器相关

> centos服务器的搭建与环境配置，node服务器与域名启用https等

* [centos服务器设置中文和挂载数据盘（一）](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%AE%BE%E7%BD%AE%E4%B8%AD%E6%96%87%E5%92%8C%E6%8C%82%E8%BD%BD%E6%95%B0%E6%8D%AE%E7%9B%98%EF%BC%88%E4%B8%80%EF%BC%89.md)
* [centos下node安装与nginx安装（二）](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E4%B8%8Bnode%E5%AE%89%E8%A3%85%E4%B8%8Enginx%E5%AE%89%E8%A3%85%EF%BC%88%E4%BA%8C%EF%BC%89.md)
* [centos服务器pm2安装配置（三）](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E6%9C%8D%E5%8A%A1%E5%99%A8pm2%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%EF%BC%88%E4%B8%89%EF%BC%89.md)
* [centos服务器实现nginx多域名多端口转发（四）](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%9E%E7%8E%B0nginx%E5%A4%9A%E5%9F%9F%E5%90%8D%E5%A4%9A%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%EF%BC%88%E5%9B%9B%EF%BC%89.md)
* [centos服务器安装mongodb并实现开机自启动（五）](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85mongodb%E5%B9%B6%E5%AE%9E%E7%8E%B0%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8%EF%BC%88%E4%BA%94%EF%BC%89.md)
* [centos服务器问题记录](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95.md)
* [pm2配置文件](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/ecosystem.config(pm2%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%EF%BC%8C%E4%BD%86%E5%90%AF%E5%8A%A8%E4%B8%80%E7%9B%B4%E4%B8%8D%E6%88%90%E5%8A%9F).js)
* [linux系统常用命令汇总](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/linux%E7%B3%BB%E7%BB%9F%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB.md)
* [centos启用iptables防火墙](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/centos%E5%90%AF%E7%94%A8iptables%E9%98%B2%E7%81%AB%E5%A2%99.md)
* [nginx配置静态网页访问与单页路由访问问题](https://github.com/LCJ-MinYa/javascript/blob/master/centos%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8/nginx%E9%85%8D%E7%BD%AE%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE%E4%B8%8E%E5%8D%95%E9%A1%B5%E8%B7%AF%E7%94%B1%E8%AE%BF%E9%97%AE%E9%97%AE%E9%A2%98.md)













