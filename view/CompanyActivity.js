import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView,ImageBackground } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class CompanyActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("CompanyActivity.title"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <ImageBackground style={{ width: '100%', height: 245 }} source={require('../image/enpic/company.jpg')} resizeMode='cover'  >
                    <Text style={{width:'90%',alignSelf: 'center', fontFamily: 'FontAwesome', marginTop: 34, fontSize: 34,lineHeight:45, color: '#ffffff' }}>{I18n.t('CompanyActivity.team')}</Text>
                </ImageBackground>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{  width: '70%', fontSize: 14, paddingTop: 12,lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('CompanyActivity.nextgeneration')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='contain' source={require("../image/enpic/company1.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{  width: '70%', fontSize: 14, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('CompanyActivity.ecosystem')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='contain' source={require("../image/enpic/company2.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{width: '70%', fontSize: 14, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('CompanyActivity.ittechnology')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='contain' source={require("../image/enpic/company3.jpg")}></Image>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center',marginTop:34 }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>
        );
    }
}

