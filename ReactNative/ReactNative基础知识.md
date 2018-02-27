## 屏幕适配

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