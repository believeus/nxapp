import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
export default class ConsentActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ConsentActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            dispaly: true,
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ dispaly: false })
        })
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
                <View style={{ width: '98%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', }}>
                    <Text style={{ width: '100%', fontSize: 12, color: '#ffffff', textAlign: 'center', lineHeight: 34, borderRadius: 30, backgroundColor: '#0071bc', fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.customer')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.users')}</Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.welcome')} <Text style={{ fontStyle: 'italic' }}> {I18n.t('ConsentActivity.epi')}</Text> {I18n.t('ConsentActivity.registering')}</Text>

                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.about')}  <Text style={{ fontStyle: 'italic' }}> {I18n.t('ConsentActivity.app')}</Text></Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.your')}<Text style={{ fontStyle: 'italic' }}>{I18n.t('ConsentActivity.blinded')} </Text>{I18n.t('ConsentActivity.personal')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}><Text style={{ fontStyle: 'italic' }}>{I18n.t('ConsentActivity.app')} </Text> {I18n.t('ConsentActivity.purpose')}</Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}><Text style={{ fontStyle: 'italic' }}>{I18n.t('ConsentActivity.app')} </Text> {I18n.t('ConsentActivity.designed')}<Text style={{ fontStyle: 'italic' }}>{I18n.t('ConsentActivity.anonymously')} </Text> {I18n.t('ConsentActivity.changes')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.data')}</Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.obligated')}<Text style={{ fontStyle: 'italic' }}>{I18n.t('ConsentActivity.community')}  </Text>{I18n.t('ConsentActivity.analyzing')} </Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.sharing')}</Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.believe')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.security')}</Text>
                    <Text style={{ width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>{I18n.t('ConsentActivity.accordance')}</Text>
                </View>
                
                {this.state.dispaly == true ?
                    <TouchableOpacity onPress={() => this.navigate.push("Register")}>
                        <Text style={{ height: 34, marginTop: 23, width: '34%', alignSelf: 'center', borderRadius: 10, backgroundColor: "#0071bc", color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>{I18n.t('ConsentActivity.agree')}</Text>
                    </TouchableOpacity>
                    :
                    null
                }

                <Text style={{ textAlign: 'center', fontSize: 16, textDecorationLine: 'underline', lineHeight: 45 }}>{I18n.t('TabHomeActivity.disclaimer')}</Text>
                <Text style={{ width: '90%', alignSelf: 'center', textAlign: 'center', fontSize: 12, lineHeight: 16 }}>{I18n.t('TabHomeActivity.disclaimertext')}</Text>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, marginTop: 34, textAlign: 'center' }}>{I18n.t('ConsentActivity.ved')}</Text>
            </ScrollView>
        );
    }
}
