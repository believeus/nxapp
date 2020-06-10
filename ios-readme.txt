
一：如果编译ios版本必须安装react-native 0.59.10版本，因为react-native 0.60.5版本在xcode中编译失败

二、'Unhandled JS Exception: getPropertyAsObject: property '__fbRequireBatchedBridge' is not an Object
此种错误一般都是编译成功之后,启动页面启动不了，所以问题就在页面import的组件上,该组件不支持ios系统
 例如：本项目中TabMallActivity.js不支持
    @react-native-community/geolocation 
    RNLocation from 'react-native-location'
    所以在TabMallActivity.js注释掉
    
三、可以使用：react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle命令检测是否在页面中引用了没有安装的组件

四、xcode编译react-native,使用react-native@0.59.10，编译会失败，失败之后按照如下更改即可
vim node_modules/react-native-fs/RNFSManager.m
Changing
#import <React/RCTImageLoaderProtocol.h>
to
#import <React/RCTImageLoader.h>


android 需要安装  ios安装不了经纬度定位的组件，需要卸载
yarn add @react-native-community/geolocation
react-native link @react-native-community/geolocation
yarn add react-native-location