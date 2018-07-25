## 安装
### windows10 所有都安装成功运行react-native run-android报找不到设备问题
> 原因1.如果在windows上初始化的项目，在mac运行安卓会有字符编码的问题.  
> 原因2.java_jdk版本必须为8，如果是java10，无论如何都不能通过命令行启动，只能通过android studio启动  



## 组件
### 子组件阻止父组件点击
```javascript
render() {
    <TouchableOpacity
        style={styles.popupWrapStyle}
        activeOpacity={1}
        onPress={this.closeModalPopup.bind(this)}
        onStartShouldSetResponderCapture={()=> true}
    >
        <View {...this.gestureHandlers} style={styles.popupViewStyle}>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
        </View>
    </TouchableOpacity>
}

componentWillMount() {
    this.gestureHandlers = {
        onStartShouldSetResponderCapture: () => true,
    }
}
```
### 调用了一个未安装组件的setState警告
```javascript
Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component.

原因是当离开页面以后，组件已经被卸载，执行setState时无法找到渲染组件。
解决办法特别简单，在离开页面时的周期函数（componentWillUnmount）中：

//组件将被卸载  
componentWillUnmount(){ 
    //重写组件的setState方法，直接返回空
    this.setState = (state,callback)=>{
      return;
    };  
}

再来回切换页面以后，只要页面离开就会执行该方法，当页面再次进入时又会重新挂载父组件的setState方法，从而不影响页面的渲染。
不过该方法不是很严谨，在集成的子组件中能修改父组件的setState方法，不过在javascript的语法中很适用，建议只在出现上述bug的页面中使用。
```

### FlatList或ListView更改数据源视图不更新或者数据显示错乱
```javascript
/*  key如果是用的 item.index().toString()，key一直是0-9，所以数据不刷新
 *  此后，不建议key用数组下标显示
*/
```

### 0.55不能输入中文
```javascript
import React, {Component} from 'react';
import {Platform, TextInput} from 'react-native';

class WPTextInput extends Component {
  shouldComponentUpdate(nextProps){
    return Platform.OS !== 'ios' || (this.props.value === nextProps.value &&  
           (nextProps.defaultValue == undefined || nextProps.defaultValue == '' )) || 
           (this.props.defaultValue === nextProps.defaultValue && (nextProps.value == undefined || nextProps.value == '' ));
  }
  render() {
    return <TextInput {...this.props} />;
  }
};

export default WPTextInput;
```

### textinput作为组件，默认值(value为数组中的数据)初次不渲染
```javascript
//强制刷新
componentWillReceiveProps(nextProps) {
    if(nextProps.value && nextProps.isFirstUpdate){
        setTimeout(()=>{
            this.forceUpdate()
        }, 50)
    }
}
```

## 样式

### 安卓低版本borderRadius属性
安卓低版本<4.1.1>Image标签不支持borderRadius属性，需要用view包裹，在view上面设置borderRadius属性

### 字体图标font-weight
字体图标不能设置字体粗细，否则安卓会不识别

### IOS三倍分辨率border问题（设置小数点）
ios设置borderTopWidth: 0.5，在ios上会导致border失真(具体表现为border占据很大一块)
* 1.只有borderTopWidth会有该问题，borderBottomWidth不存在该问题，可将borderTopWidth改为borderBottomWidth
* 2.将borderTopWidth: 0.5改为borderTopWidth: 0.33(比例1/3 == 0.33)

## 编译

### Mac打包安卓正式包(gradlew相关报错)
执行sudo cd android && ./gradlew assembleRelease,报错信息:-bash: ./gradlew: No such file or directory  
进入android目录，单独执行./gradlew assembleRelease报错(-bash: ./gradlew: Permission denied)  
解决办法: chmod +x gradlew  










