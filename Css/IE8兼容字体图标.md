``` javascript
其实下载下来的阿里巴巴iconfont图标引用方式，大多数的情况下是不可用的。存在无法解析路径问题。
所以，图标就会出现小方框

解决办法如下
@font-face {
font-family: “iconfont”;
src:url(‘../fonts/iconfont.eot’), /* IE9*/
url(‘../fonts/iconfont.eot’) format(’embedded-opentype’), /* IE6-IE8 */
url(‘../fonts/iconfont.woff’) format(‘woff’), /* chrome, firefox */
url(‘../fonts/iconfont.ttf’) format(‘truetype’), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
url(‘../fonts/iconfont.svg’) format(‘svg’); /* iOS 4.1- */
}
```