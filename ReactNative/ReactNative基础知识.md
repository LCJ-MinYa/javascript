# 屏幕适配

``` javascript
'use strict';

import {
	Dimensions
} from 'react-native';

//设备的宽度，单位:dp
const deviceWidthDp = Dimensions.get('window').width;
//设备的高度，单位:dp
const deviceHeightDp = Dimensions.get('window').height;

//设计稿宽度，单位:px
const uiWidthPx = 750;

/*
 * 将px转换到pd
 * @param uiElementPx 设计稿元素的尺寸
 * @return {number} 实际屏幕的尺寸
 */
function p2d(uiElementPx) {
	return uiElementPx * deviceWidthDp / uiWidthPx;
}

/*
 * 返回设备宽度，单位:dp
 * @return {number} 设备宽度
 */
function width() {
	return deviceWidthDp;
}

/*
 * 返回设备高度，单位:dp
 * @return {number} 设备高度
 */
function height() {
	return deviceHeightDp;
}

module.exports = {
	p2d,
	width,
	height,
}

```

* dp: 基于屏幕密度的抽象单位，像素无关密度
* px: 像素点
* 分辨率: 横纵2个方向的像素点的数量

> RN采用的dp作为单位  

UI设计原型：基于iphone6  
分辨率：1334 x 750 px  
deviceWidthDp为当前运行设备的宽度，uiWidthPx为UI设计图的宽度，uiElementPx设计图中标注的元素的px值。  
例如: 750的设计稿view宽为200  
在rn的iphone6中宽度为20*375/750=10 => view在iphone6中显示为10个单位，占整个屏幕的10/375  
在rn的一个安卓模拟器中宽度为20*384/750=10.24 => view在iphone6中显示为10.24个单位，占整个屏幕的10.24/384    
那么使用的话，比如一个View的UI标注宽高为200x400  

``` javascript
import UISize from './UISize'
<View style={{width:UISize.p2d(200), height:UISize.p2d(400)}}></View>
```

已知BUG：安卓的flatList高度如果为小数,可能会造成item边框线高度显示不一致，这里可以做一个平台判断对安卓单独处理。

# Flexbox布局

## Flex Direction
在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

## Justify Content
在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。

## Align Items
在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。

# 图片

## 字体图标
1.准备好需要用到字体图标文件.tff文件  
2.ios以蓝色文件夹拖入工程,在info.plist中加入字体;安卓需要将ttf文件放在android/app/src/main/assets/fonts目录下（完成后需要重新编译）
``` javascript
<View style={styles.fontImgView}>
	<Text style={styles.fontImgText}>&#xe75b;</Text>
	<Text style={styles.fontImgText}>&#xe6ca;</Text>
	<Text style={styles.fontImgText}>&#xe864;</Text>
</View>

fontImgView: {
	flexDirection: 'row'
},
fontImgText: {
	fontFamily: 'iconfont',
	fontSize: 20,
}
```
