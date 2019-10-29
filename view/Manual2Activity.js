import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
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
                    <Text style={{ height: 123, textAlign: 'center', fontSize: 22, fontFamily: 'FontAwesome', fontWeight: 'bold', textAlignVertical: 'center' }}>EpiAging App User Manual</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 67, width: '7%', fontSize: 18, fontWeight: 'bold' }}>1.</Text>
                        <Text style={{ height: 67, width: '95%', fontSize: 18,  fontFamily: 'FontAwesome', lineHeight: 21 }}>Download the IOS App from Apple Store or Android App from Google Play Store.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 34, width: '7%', fontSize: 18,textAlignVertical:'center', fontWeight: 'bold' }}>2.</Text>
                        <Text style={{ height: 34, width: '95%',textAlignVertical:'center', fontSize: 18,  fontFamily: 'FontAwesome',  }}>Go to " EPICENTER" and lick register to register an account.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get1.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 34, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>3.</Text>
                        <Text style={{ height: 34, width: '95%',textAlignVertical:'center', fontSize: 18,  fontFamily: 'FontAwesome',  }}>Fill in the registration information.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get2.png')} resizeMode='contain' />

                    {/*  */}
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 56, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>4.</Text>
                        <Text style={{ height: 56, width: '95%',textAlignVertical:'center', fontSize: 18, fontFamily: 'FontAwesome'}}>Go to the registration mailbox to activate your account.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get3.png')} resizeMode='contain' />

                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 56, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>5.</Text>
                        <Text style={{ height: 56, width: '95%',textAlignVertical:'center', fontSize: 18,fontFamily: 'FontAwesome'}}>Login with the account you just registered.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get4.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 56, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>6.</Text>
                        <Text style={{ height: 56, width: '95%',textAlignVertical:'center', fontSize: 18, fontFamily: 'FontAwesome',  }}>Set your unique private key.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get5.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 34, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>☞ </Text>
                        <Text style={{ fontSize: 16, height: 34 ,textAlignVertical:'center',}}>The unique private key well be sent to your mailbox</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get6.png')} resizeMode='contain' />
                    <View style={{ flexDirection: 'row',marginTop:23 }}>
                        <Text style={{ height: 67, width: '7%',textAlignVertical:'center', fontSize: 18, fontWeight: 'bold' }}>7.</Text>
                        <Text style={{ height: 67, width: '95%', textAlignVertical:'center',fontSize: 18, fontFamily: 'FontAwesome' }}>Go to "SHOPPING" to purchase the EpiAging test kit.</Text>
                    </View>
                    <Image style={{ width: '100%', height: 456 }} source={require('../image/enpic/get7.png')} resizeMode='contain' />
                </View>
                <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text>

            </ScrollView >
        );
    }
}

