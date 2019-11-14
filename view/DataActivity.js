import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

export default class DataActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DataActivity.title"),
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
                <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>{I18n.t('DataActivity.filling')}</Text>
                            <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques1.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.epiaging')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.personalized')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.update')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques2.png")}></Image>
                        <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>{I18n.t('DataActivity.how')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.test')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.analysis')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.data')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.access')}</Text>
                    </View>
                </View>
                {/* <View style={{ backgroundColor: '#f6f8f9' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>{I18n.t('DataActivity.how')}?</Text>
                            <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques3.png")}></Image>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.results')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.routes')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.datain')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.allowed')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.general')}</Text>
                        </View>
                    </View>
                </View> */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 77, width: '70%', fontSize: 19, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22, }}>{I18n.t('DataActivity.information')}</Text>
                        <Image style={{ height: 77, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/icons/ques4.png")}></Image>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.privacy')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.without')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.will')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.unless')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.learn')}</Text>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.logged')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.not')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.lost')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>☞</Text>
                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DataActivity.save')}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('DataActivity.eip')}</Text>
            </ScrollView >
        );
    }
}

