import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeActivity from './HomeActivity';
import AboutActivity from './AboutActivity';
import MainActivity from './MainActivity';
import LoginActivity from './LoginActivity';
import ForgetActivity from './ForgetActivity';
import RegisterActivity from './RegisterActivity';
import LifeStyleChartActivity from './LifeStyleChartActivity';
import { I18n } from '../locales/i18n';

export const RootStack = createStackNavigator(
    {
        Main: {  //此处的HOME名字任意,在跳转页面的时候会用到这个名字
            screen: MainActivity //此处的screen赋值页面,要记得在顶部先import引入，否则找不到页面而报错，第一个代表默认加载的页面
        },
        About: {
            screen: AboutActivity
        },
        Login: {
            screen: LoginActivity
        },
        Register: {
            screen: RegisterActivity
        },
        LifeStyleChart: {
            screen: LifeStyleChartActivity
        },
        Forget: {
            screen: ForgetActivity
        },
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0071BC',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            // headerRight: (
            //     <View style={{ width: 100, height: 50,justifyContent:"center",alignItems:"center" }}>
            //         <Image style={{ height: 25, width: 25 }} resizeMode="center" source={require("../image/icons/user-logo.png")}/>
            //         <Text style={{color:"#fff"}}>{I18n.t('StackHomeActivity.vistor')}</Text>
            //     </View>
            // )
        }
    }
);
export default createAppContainer(RootStack);