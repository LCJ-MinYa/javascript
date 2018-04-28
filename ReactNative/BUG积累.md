字体图标不能设置字体粗细，否则安卓会不识别

## 组件
子组件阻止父组件点击
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


## 样式
安卓低版本<4.1.1>Image标签不支持borderRadius属性，需要用view包裹，在view上面设置borderRadius属性
