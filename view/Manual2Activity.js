import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

export default class Manual2Activity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("Manual2Activity.title"),
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
                    <Text style={{  textAlign: 'center', fontSize: 22,marginBottom:34, fontFamily: 'FontAwesome', fontWeight: 'bold', textAlignVertical: 'center' }}>{I18n.t('Manual2Activity.title')}</Text>
                    <View style={{ flexDirection: 'row',marginBottom:18 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>1.</Text>
                        <Text style={{  width: '95%', fontSize: 18,  fontFamily: 'FontAwesome', lineHeight:28  }}>{I18n.t('Manual2Activity.download')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginBottom:18 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>2.</Text>
                        <Text style={{  width: '95%', fontSize: 18,  fontFamily: 'FontAwesome', lineHeight:28 }}>{I18n.t('Manual2Activity.gocenter')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get1.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23,marginBottom:18}}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>3.</Text>
                        <Text style={{  width: '95%',fontSize: 18,  fontFamily: 'FontAwesome' , lineHeight:28  }}>{I18n.t('Manual2Activity.fillregis')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get2.png')} resizeMode='contain' />

                    {/*  */}
                    <View style={{ flexDirection: 'row',marginTop:23,marginBottom:7 }}>
                        <Text style={{  width: '7%',fontSize: 18, fontWeight: 'bold' }}>4.</Text>
                        <Text style={{ width: '95%', fontSize: 18, fontFamily: 'FontAwesome', lineHeight:28 }}>{I18n.t('Manual2Activity.mailbox')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get3.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>5.</Text>
                        <Text style={{ width: '95%', fontSize: 18,fontFamily: 'FontAwesome', lineHeight:28}}>{I18n.t('Manual2Activity.accountlogin')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get4.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{  width: '7%', fontSize: 18, fontWeight: 'bold' }}>6.</Text>
                        <Text style={{  width: '95%', fontSize: 18, fontFamily: 'FontAwesome', lineHeight:28 }}>{I18n.t('Manual2Activity.setkey')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get5.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>☞ </Text>
                        <Text style={{ fontSize: 16, lineHeight:28}}>{I18n.t('Manual2Activity.sentmail')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get6.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23, }}>
                        <Text style={{ width: '7%', fontSize: 18, fontWeight: 'bold' }}>7.</Text>
                        <Text style={{  width: '95%', fontSize: 18, fontFamily: 'FontAwesome', lineHeight:28 }}>{I18n.t('Manual2Activity.purchase')}</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get7.png')} resizeMode='contain' />
                </View>
                <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text>

            </ScrollView >
        );
    }
}

