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
                    <Image style={{ height: 134, width: '23%', alignSelf: 'center' }} resizeMode='contain' source={require("../image/icons/logo.png")}></Image>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>{I18n.t('ContactActivity.phone')}</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>{I18n.t('ContactActivity.utics')}</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}> {I18n.t('ContactActivity.http')}</Text>
                    <Text style={{ height: 123, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 28, textAlign: 'center' }}>{I18n.t('ContactActivity.hkg')}</Text>
                </View>
            </ScrollView >
        );
    }
}

