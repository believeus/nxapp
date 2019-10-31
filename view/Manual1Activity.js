import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class Manual1Activity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("Manual1Activity.title"),
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

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, paddingBottom: 34, }}>
                    <Text style={{ height: 123, textAlign: 'center', fontSize: 22, fontFamily: 'FontAwesome', fontWeight: 'bold', textAlignVertical: 'center' }}>How to get my epiAging test report</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 18, fontWeight: 'bold' }}>1.</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Make sure to login with the account that has been used to purchase the epiAging product.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man6.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 34, width: '7%', fontSize: 18, fontWeight: 'bold' }}>☞ </Text>
                        <Text style={{ fontSize: 16, height: 34 }}>Your username will appear after you log in.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man7.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 18, fontWeight: 'bold' }}>2.</Text>
                        <Text style={{ height: 56, width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Go to “HOME” or “EPICENTER” and click “My report”.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man0.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 18, fontWeight: 'bold' }}>3.</Text>
                        <Text style={{ height: 56, width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Enter(or Scan) the barcode on your test tube and get your epiAging report.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man2.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{ height: 56, width: '7%', fontSize: 18, fontWeight: 'bold' }}>4.</Text>
                        <Text style={{ height: 56, width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>After entered your barcode, by clicking the icon to get your epiAging test report.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man3.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 18, fontWeight: 'bold' }}>5.</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Your epiAging test result will be at the bottom of the page.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man5.png')} resizeMode='contain' />
                </View>
                <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text>

            </ScrollView >
        );
    }
}
