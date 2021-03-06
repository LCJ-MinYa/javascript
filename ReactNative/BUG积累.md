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

### FlatList实现自适应高度
> FlatList默认flexGrow: 1,导致FlatList不能自适应高度，加上样式flexGrow: 0即可

### FlatList性能缓慢
> 警告信息如下: you have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.
```javascript
/*
 * 这是因为renderItemView()中渲染的组件没有继承自React.PureComponent
 * 推荐在FlatList和renderItemView中都继承React.PureComponent而不是React.Component
 */

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

/*
React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过prop和state的浅对比来实现 shouldComponentUpate()。
如果React组件的 render() 函数在给定相同的props和state下渲染为相同的结果，在某些场景下你可以使用 React.PureComponent 来提升性能。
React.PureComponent 的 shouldComponentUpdate() 只会对对象进行浅对比。如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断(表现为对象深层的数据已改变视图却没有更新, 原文：false-negatives)。当你期望只拥有简单的props和state时，才去继承 PureComponent ，或者在你知道深层的数据结构已经发生改变时使用 forceUpate() 。或者，考虑使用 不可变对象 来促进嵌套数据的快速比较。
此外,React.PureComponent 的 shouldComponentUpate() 会忽略整个组件的子级。请确保所有的子级组件也是”Pure”的。
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
```javascript
/*
 * hairlineWidth:CallExpression
 * 该用来定义当前平台最细的宽度。该属性用来设置边框或者两个组件之间的分割线
 */
{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
}

```

## 编译

### Mac打包安卓正式包(gradlew相关报错)
执行sudo cd android && ./gradlew assembleRelease,报错信息:-bash: ./gradlew: No such file or directory  
进入android目录，单独执行./gradlew assembleRelease报错(-bash: ./gradlew: Permission denied)  
解决办法: chmod +x gradlew  

### windows运行rn项目报模块找不到(AccessibilityInfo 0.56.0)
> 原因：react-native项目本身版本的问题  
> 解决办法：修改package.json
* "react": "16.3.1"
* "react-native": "0.55.4"
* "babel-preset-react-native": "2.1.0"
* 删除node_modules然后重新安装

### windows中原文件有报错切运行过（修改报错并反复确认没问题还是报相同的错误=>git忽略文件夹大小写变动问题）
> react-native缓存问题  
> react-native start --reset-cache  










