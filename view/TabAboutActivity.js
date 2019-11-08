import React, { Component } from 'react';

import { Platform, StatusBar, Text, View, Image, ScrollView,ImageBackground, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
type Props = {};
export default class TabAboutActivity extends Component<Props> {
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20,borderRadius:10 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>{I18n.t('AboutActivity.company')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Company")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 10 }} resizeMode="cover" source={require("../image/enpic/au1.png")}>
                            <View style={{ width: '90%', alignSelf: 'center', flexDirection:"column", }}>
                            <View style={{height:'10%'}}></View>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Company</Text>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Introduction</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>{I18n.t('AboutActivity.science')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Scienceteam")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="cover" source={require("../image/enpic/au2.png")}>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection:"column", }}>
                            <View style={{height:'10%'}}></View>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Our Science</Text>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Team</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>{I18n.t('AboutActivity.methylation')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Methylation")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="cover" source={require("../image/enpic/au3.png")}>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection:"column", }}>
                            <View style={{height:'10%'}}></View>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>DNA</Text>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Methylation</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>{I18n.t('AboutActivity.biological')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="cover" source={require("../image/enpic/au5.png")}>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection:"column", }}>
                            <View style={{height:'10%'}}></View>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Biological</Text>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Age</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>{I18n.t('AboutActivity.consentform')}</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Consent")}>
                        <ImageBackground style={{ height: 123, width: '100%', borderRadius: 5 }} resizeMode="cover" source={require("../image/enpic/au4.png")}>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection:"column", }}>
                            <View style={{height:'10%'}}></View>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Consent</Text>
                            <Text style={{ fontSize: 23,color: '#ffffff',opacity:0.6, fontWeight:"bold",fontStyle:'italic'}}>Form</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>

        );
    }
}

