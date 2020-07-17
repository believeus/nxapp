import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView,StatusBar, TouchableOpacity, navigate } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
type Props = {};
export default class QuestionnaireActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuestionnaireActivity.title")
        })
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
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
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("LifeStyleChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }
                }>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='contain' source={require("../image/icons/icon1.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>{I18n.t('QuestionnaireActivity.lifestyle')}</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("MoodChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='contain' source={require("../image/icons/icon2.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>{I18n.t('QuestionnaireActivity.mood')}</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("McGillChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='contain' source={require("../image/icons/icon3.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>{I18n.t('QuestionnaireActivity.mcgill')}</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("SleepChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='contain' source={require("../image/icons/icon4.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>{I18n.t('QuestionnaireActivity.sleep')}</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("DietChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='contain' source={require("../image/icons/icon5.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>{I18n.t('QuestionnaireActivity.diet')}</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {this.navigate.push("Manual3")}}>
                <View style={{ width: '100%', alignSelf: 'center',}}>
                    <Text style={{ height: 45, lineHeight: 45, paddingTop: 12, width: '100%', textAlign: 'center', fontFamily: 'NotoSansHans-Medium', fontSize: 14,textDecorationLine:"underline" }}>{I18n.t('QuestionnaireActivity.how')} &gt;</Text>
                </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, marginTop: 20 , textAlign: 'center' }}>{I18n.t('QuestionnaireActivity.eip')}</Text>
            </ScrollView >
        );
    }
}

