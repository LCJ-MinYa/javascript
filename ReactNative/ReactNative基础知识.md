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
那么使用的话，比如一个View的UI标注宽高为200x400  
``` javascript
import UISize from './UISize'
<View style={{width:UISize.p2d(200), height:UISize.p2d(400)}}></View>
```












