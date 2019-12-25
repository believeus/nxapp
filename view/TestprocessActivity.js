import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';

export default class TestprocessActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TestprocessActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state={user: null}
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        const navigate = this.props.navigation;
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <ImageBackground style={{ width: '100%', height: 223 }} source={require('../image/icons/tp1.png')} resizeMode='cover'  >
                    <Text style={{ fontFamily: 'NotoSansHans-Light', marginLeft: 19, marginTop: 99, fontSize: 34, color: '#ffffff' }}>{I18n.t('TestprocessActivity.testprocess')}</Text>
                </ImageBackground>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ width: '20%', height: 145, }}></View>
                    <View style={{ width: '50%', height: 145, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp2.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.downloadapp')}</Text>
                    </View>
                    <View style={{ width: '30%', height: 145 }}>
                        <Image style={{ height: 105, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpa.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '77%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>

                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: '70%', flexDirection: 'column', marginTop: 20 }}>
                        <TouchableOpacity style={{ width: "100%", }} onPress={() => { navigate.push("Mall") }}>
                            <View style={{ width: '88%', height: 123, justifyContent: 'flex-end' }}>
                                <Image style={{ height: 59, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp3.png")}></Image>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.purchasekit')}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: 23, width: '77%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                        <TouchableOpacity style={{ width: "100%", }} onPress={() => { navigate.push("Quesnote") }}>
                            <View style={{ width: '100%', height: 167, justifyContent: 'flex-end', paddingLeft: 56 }}>
                                <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp4.png")}></Image>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.fillques')}</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.fillques2')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '30%', height: 123, marginTop: 99 }}>
                        <Image style={{ height: 123, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpb.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '67%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: '70%', flexDirection: 'column', marginTop: 20 }}>
                        <View style={{ width: '88%', height: 167, justifyContent: 'flex-end', paddingLeft: 67 }}>
                            <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp5.png")}></Image>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.collect')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.collect2')}</Text>
                        </View>
                        <View style={{ height: 23, width: '77%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                        <View style={{ width: '77%', height: 189, justifyContent: 'flex-end', }}>
                            <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp6.png")}></Image>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.sample')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.back')}</Text>
                        </View>
                    </View>
                    <View style={{ width: '33%', height: 167, marginTop: 67, paddingRight: 28 }}>
                        <Image style={{ height: 145, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpc.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '77%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ width: '30%', height: 167 }}>
                        <Image style={{ height: 219, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpd.png")}></Image>
                    </View>
                    <View style={{ width: '50%', height: 167, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp7.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.extraction')}  </Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.extraction2')}  </Text>
                    </View>
                    <View style={{ width: '20%', height: 167, }}></View>
                </View>
                <View style={{ height: 23, width: '66%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.state.user == null ? this.navigate.push("Login"):navigate.push("DnaReport") }}>
                    <View style={{ width: '88%', height: 167, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='contain' source={require("../image/icons/tp8.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.report')}</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>{I18n.t('TestprocessActivity.report2')}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 23, width: '66%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>

                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>
        );
    }
}

