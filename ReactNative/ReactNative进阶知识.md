# 导航控制器react-navigation

## 介绍react-navigation

> react-native从开源至今，一直存在几个无法解决的毛病，偶尔就会复发让人隐隐作痛，提醒你用的不是原生，其中包括列表的复用问题，导航跳转不流畅的问题等等。
终于facebook坐不住了，在前一段时间开始推荐使用react-navigation，并且在0.44发布的时将之前一直存在的Navigator废弃了。
react-navigation是致力于解决导航卡顿，数据传递，Tabbar和navigator布局，支持redux。虽然现在功能还不完善，但基本是可以在项目中推荐使用的。

## react-navigation三大模块

* StackNavigator类似顶部导航条，用来跳转页面和传递参数
* TabNavigator类似底部标签栏，用来区分模块
* DrawerNavigator抽屉，类似从App左侧滑出一个页面

## navigation
在StackNavigator中注册后的组件都有navigation这个属性. navigation又有5个参数:navigate, goBack, state, setParams, dispatch, 可以在组件下console.log一下this.props就能看到.

* this.props.navigation.navigate('Two', { name: 'two' }): push下一个页面
	* routeName: 注册过的目标路由名称
	* params: 传递的参数
	* action: 如果该界面是一个navigator的话，将运行这个sub-action
* this.props.navigation.goBack(): 返回上一页

* this.props.navigation.state: 每个界面通过这去访问它的router，state其中包括了：
	* routeName: 路由名
	* key: 路由身份标识
	* params: 参数

* this.props.navigation.setParams: 该方法允许界面更改router中的参数，可以用来动态的更改导航栏的内容

* this.props.navigation.dispatch: 可以dispatch一些action，主要支持的action有：
	* Navigate: 跳转到指定页面
	* Reset: Reset方法会清除原来的路由记录，添加上新设置的路由信息, 可以指定多个action，index是指定默认显示的那个路由页面, 注意不要越界了
	* SetParams: 为指定的router更新参数，该参数必须是已经存在于router的param中

# 组件之间传值(父->子，子->父,同级之间)

* 父组件向子组件传值
> 在父组件中通过属性传递给子组件，在子组件中通过this.props获取信息；如果嵌套的层次太深，那么从外往内组件传递会比较纠结，需要通过props一层一层往下传递.    

* 子组件向父组件传值
> 1.子组件控制自己的state，然后通过父组件提供的回调方法，告诉父组件信息并在组件展示出来；  
2.其实是依赖于props来传递事件的引用，并通过回调的方式来实现；  
3.如果嵌套太深的话，就必须一次次回调传入的回调函数，来实现子组件向父组件传值或者操作；

* 同级组件传值
	* DeviceEventEmitter跨组件通信（注册监听）
	* 父组件定义state,然后props传递给每个子组件,通过子组件回调方法触发父组件state更新来更改另外一个组件props的更新  

# [redux数据流](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

# 原生集成

# 与原生交互

# 第三方组件的使用（键盘弹出事件）