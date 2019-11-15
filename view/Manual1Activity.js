import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

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
                    <Text style={{ textAlign: 'center', fontSize: 22,marginBottom:34, fontFamily: 'FontAwesome', fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t('Manual1Activity.getmy')}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>1.</Text>
                        <Text style={{  width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('Manual1Activity.login')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man6.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>☞ </Text>
                        <Text style={{ fontSize: 16, }}>{I18n.t('Manual1Activity.username')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man7.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>2.</Text>
                        <Text style={{width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('Manual1Activity.gohome')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/man0.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>3.</Text>
                        <Text style={{  width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('Manual1Activity.barcode')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man2.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>4.</Text>
                        <Text style={{  width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('Manual1Activity.icon')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man3.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:34 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>5.</Text>
                        <Text style={{ width: '95%', fontSize: 18, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('Manual1Activity.result')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 389 }} source={require('../image/enpic/man5.png')} resizeMode='contain' />
                </View>
                <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text>

            </ScrollView >
        );
    }
}

