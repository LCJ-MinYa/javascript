# 项目的基本配置  
"react": "16.0.0-alpha.12",  
"react-native": "0.47.1",  
"xcode": "8.2.1",  
"模拟器": "IOS 10.2",  
"mac": "10.12.2"  

# Podfile创建引入对应模块  

#target的名字一般与你的项目名字相同  
target 'NumberTileGame' do  
  
  #'node_modules'目录一般位于根目录中  
  #但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`  
  pod 'React', :path => '../node_modules/react-native', :subspecs => [  
    'Core',  
    'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单  
    'RCTText',  
    'RCTNetwork',  
    'RCTWebSocket', # 这个模块是用于调试功能的  
    #在这里继续添加你所需要的模块  
  ]  
  #如果你的RN版本 >= 0.42.0，则加入下面这行  
  pod "Yoga", :path => "../node_modules/react-native/ReactCommon/yoga"  
  
end  

# jschelpers/JavaScriptCore.h file not found  
该问题产生是因为pod的版本低于1.2.0导致的  
解决办法:  
1.sudo gem uninstall cocoapods.  
2.sudo gem install cocoapods. 
3.pod install. 
附解决地址: <a href="https://github.com/facebook/react-native/issues/13010">https://github.com/facebook/react-native/issues/13010</a>

# Undefined symbols for architecture x86_64:
错误如下:  
<pre>
 /Users/snorreedwin/Code/entur/entur-clients/native/ios/build/Build/Products/Debug-iphonesimulator/React/React.framework/React

Undefined symbols for architecture x86_64:
  "_JSNoBytecodeFileFormatVersion", referenced from:
      +[RCTJavaScriptLoader loadBundleAtURL:onProgress:onComplete:] in RCTJavaScriptLoader.o
      +[RCTJavaScriptLoader attemptSynchronousLoadOfBundleAtURL:runtimeBCVersion:sourceLength:error:] in RCTJavaScriptLoader.o
  "facebook::react::parseTypeFromHeader(facebook::react::BundleHeader const&)", referenced from:
      +[RCTJavaScriptLoader attemptSynchronousLoadOfBundleAtURL:runtimeBCVersion:sourceLength:error:] in RCTJavaScriptLoader.o
  "facebook::react::customJSCWrapper()", referenced from:
      -[RCTDevSettings isJSCSamplingProfilerAvailable] in RCTDevSettings.o
      -[RCTDevSettings toggleJSCSamplingProfiler] in RCTDevSettings.o
      _RCTNSErrorFromJSErrorRef in RCTJSCErrorHandling.o
      -[RCTSamplingProfilerPackagerMethod handleRequest:withResponder:] in RCTSamplingProfilerPackagerMethod.o
  "facebook::react::systemJSCWrapper()", referenced from:
      -[RCTDevSettings isJSCSamplingProfilerAvailable] in RCTDevSettings.o
      -[RCTDevSettings toggleJSCSamplingProfiler] in RCTDevSettings.o
      _RCTNSErrorFromJSErrorRef in RCTJSCErrorHandling.o
      -[RCTSamplingProfilerPackagerMethod handleRequest:withResponder:] in RCTSamplingProfilerPackagerMethod.o
ld: symbol(s) not found for architecture x86_64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
</pre>

解决办法:  
在Podfile的subspecs中添加BatchedBridge字段，然后重新安装即可解决.  
附解决地址: <a href="https://github.com/facebook/react-native/issues/14925">https://github.com/facebook/react-native/issues/14925</a>
