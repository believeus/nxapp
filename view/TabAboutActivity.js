import React, { Component } from 'react';

import { Platform, StatusBar, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
export default class TabAboutActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TabHomeActivity.title"),
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, overflow: 'hidden' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, height: 50,lineHeight:50 }}>{I18n.t('AboutActivity.company')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Company")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="contain" source={require("../image/enpic/au1.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: "column", paddingLeft:10  }}>
                                <View style={{ height: '10%' }}></View>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.company1')}</Text>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.introduction1')}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', overflow: 'hidden' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, height: 50,lineHeight:50 }}>{I18n.t('AboutActivity.science')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Scienceteam")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="contain" source={require("../image/enpic/au2.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: "column", paddingLeft:10 }}>
                                <View style={{ height: '10%' }}></View>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.science1')}</Text>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.team1')}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', overflow: 'hidden' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, height: 50 ,lineHeight:50 }}>{I18n.t('AboutActivity.methylation')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Methylation")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="contain" source={require("../image/enpic/au3.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: "column", paddingLeft:10  }}>
                                <View style={{ height: '10%' }}></View>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.dna1')}</Text>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.methylation1')}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', overflow: 'hidden' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, height: 50,lineHeight:50  }}>{I18n.t('AboutActivity.biological')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="contain" source={require("../image/enpic/au5.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: "column", paddingLeft:10  }}>
                                <View style={{ height: '10%' }}></View>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.biological1')}</Text>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.age1')}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', overflow: 'hidden' }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, height: 50,lineHeight:50  }}>{I18n.t('AboutActivity.consentform')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Consent")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="contain" source={require("../image/enpic/au4.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection: "column", paddingLeft:10 }}>
                                <View style={{ height: '10%' }}></View>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.consent1')}</Text>
                                <Text style={{ fontSize: 23, color: '#ffffff', opacity: 0.6, fontWeight: "bold", fontStyle: 'italic' }}>{I18n.t('TabAboutActivity.form1')}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>

        );
    }
}

