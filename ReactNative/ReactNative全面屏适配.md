## IOS适配
* SafeAreaView组件自动适配iPhoneX
```javascript
/*请注意SafeAreaView组件在0.51版本之后才有*/
import {
    SafeAreaView,
} from 'react-native';

<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>hello world</Text>
    </View>
</SafeAreaView>

```

## Android适配
* 确保安卓SDK为24以上，RN默认使用23。RN安卓sdk在 /android/app/build.gradle 文件里修改（android:resizeableActivity方法Android7.0以上才可以使用，即SDK≥24）
```
compileSdkVersion 24
buildToolsVersion "24.0.1"
```

*  修改android\app\src\main\AndroidManifest.xml文件中Activity的属性
```
android:resizeableActivity="true"
```