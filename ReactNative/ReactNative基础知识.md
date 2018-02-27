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

## 图片

### App图片资源
此时只需要引入文件名，不需要路径和后缀,必须指定图片大小否则不会显示(同样需要重新编译)  
```javascript
<Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
```

### 网络图片
很多要在App中显示的图片并不能在编译的时候获得，又或者有时候需要动态载入来减少打包后的二进制文件的大小。这些时候，与静态资源不同的是，你需要手动指定图片的尺寸。
```javascript
<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 400, height: 400}} />
```

### 静态图片资源
要往App中添加一个静态图片，只需把图片文件放在代码文件夹中某处，然后像下面这样去引用它：
```javascript
<Image source={require('./my-icon.png')} />
```
* 支持不同平台自动选择不同图片,命名方式my-icon.ios.png和my-icon.android.png  
* 支持@2x,@3x不同分辨率的图片,命名方式my-icon@2x.png和my-icon@3x.png
> require中的图片名字必须是一个静态字符串（不能使用变量！因为require是在编译时期执行，而非运行时期执行！）  

# FlatList
```javascript
'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Platform,
	FlatList,
	Button
} from 'react-native';

class flatList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [{
				text: '列表1'
			}, {
				text: '列表2'
			}, {
				text: '列表3'
			}, {
				text: '列表4'
			}, {
				text: '列表5'
			}]
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
				  	data={this.state.data}
				  	keyExtractor={(item, index) => index.toString()}
				  	renderItem={({item}) => <Text>{item.text}</Text>}
				/>
				<Button
					onPress={this.doAddData.bind(this)}
					title='点击增加数据'
					color='#333'
				/>
			</View>
		);
	}
	doAddData() {
		let newData = [];
		const length = this.state.data.length;
		for (let i = 1; i <= 5; i++) {
			newData.push({
				text: '列表' + (length + i)
			})
		}
		this.setState({
			data: this.state.data.concat(newData)
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 20 : 0,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});


export default flatList;
```

# Props和State

## Props
大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props（属性）。  

## State
我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state。  
一般来说，你需要在constructor中初始化state

# 组件的生命周期

React Native组件的生命周期
可以说整个React Native应用是由各种类型的组件构成。而每个组件都有其各自的生命周期。组件由初生到消亡，React Native框架通过不同的生命周期方法，为我们提供了方便切入组件生命周期的钩子，让我们可以在正确的时间点做正确的事情。

当应用启动，React Native框架在内存中维护着一个虚拟DOM树。所谓组件的生命周期即由组件初始化并挂载到虚拟DOM为起始，到组件由虚拟DOM卸载为终结，组件的不同状态。生命周期方法则是组件在虚拟DOM树不同状态的描述。

理解组件的生命周期方法是理解组件生命周期的关键，现在就让我们来详细探究组件的生命周期方法。

生命周期方法
组件的生命周期方法对应着组件的不同生命阶段，通常我们分为三个阶段：组件初始化及挂载阶段、组件运行期阶段及组件卸载阶段。

初始化及挂载阶段
一、这是组件类的构造函数，通常在此初始化state数据模型。

constructor(props) {
  super(props);
  this.state = {
    //key : value
  };
}
二、表示组件将要加载到虚拟DOM，在render方法之前执行，整个生命周期只执行一次。

componentWillMount() {

}
三、表示组件已经加载到虚拟DOM，在render方法之后执行，整个生命周期只执行一次。通常在该方法中完成异步网络请求或者集成其他JavaScript库。

componentDidMount() {

}
运行期阶段
一、在组件接收到其父组件传递的props的时候执行,参数为父组件传递的props。在组件的整个生命周期可以多次执行。通常在此方法接收新的props值，重新设置state。

componentWillReceiveProps(nextProps) {
  this.setState({
    //key : value
  });
}
二、在componentWillReceiveProps(nextProps)执行之后立刻执行；或者在state更改之后立刻执行。该方法包含两个参数，分别是props和state。该方法在组件的整个生命周期可以多次执行。如果该方法返回false，则componentWillUpdate(nextProps, nextState)及其之后执行的方法都不会执行，组件则不会进行重新渲染。

shouldComponentUpdate(nextProps, nextState) {
  return true;
}
二、在shouldComponentUpdate(nextProps, nextState)函数执行完毕之后立刻调用，该方法包含两个参数，分别是props和state。render()函数执行之前调用。该方法在组件的整个生命周期可以多次执行。

componentWillUpdate(nextProps, nextState) {

}
三、在render()方法执行之后立刻调用。该方法包含两个参数，分别是props和state。该方法在组件的整个生命周期可以多次执行。

componentDidUpdate(preProps, preState) {

}
四、render方法用于渲染组件。在初始化阶段和运行期阶段都会执行。

render() {
  return(
    <View/>
  );
}
卸载阶段
一、在组件由虚拟DOM卸载的时候调用。

componentWillUnmount() {

}










