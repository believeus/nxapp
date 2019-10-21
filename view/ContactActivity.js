import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class ContactActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ContactActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <Image style={{ height: 134, width: '23%', alignSelf: 'center' }} resizeMode='center' source={require("../image/icons/logo.png")}></Image>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>(+852) 2354 8297</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>info@hkgepitherapeutics.com</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}> https://www.hkgepitherapeutics.com</Text>
                    <Text style={{ height: 123, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 28, textAlign: 'center' }}>HKG epitherapeutics Limited Unit 613, Biotech Centre 2,Hong Kong Science Park,Sha Tin,N.T.,Hong Kong</Text>
                </View>
            </ScrollView >
        );
    }
}

