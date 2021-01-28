import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

export default class QuesnoteActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuesnoteActivity.title"),
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Text style={{ fontFamily: 'FontAwesome', fontSize: 19, height: 45, fontWeight: 'bold' }}>{I18n.t('QuesnoteActivity.about')}</Text>
                    <Text style={{ fontFamily: 'FontAwesome', fontSize: 16, lineHeight: 19, marginBottom: 12 }}>{I18n.t('QuesnoteActivity.are')} <Text style={{ color: 'red' }}>{I18n.t('QuesnoteActivity.optional')}</Text>{I18n.t('QuesnoteActivity.however')}</Text>
                    <Text style={{ fontFamily: 'FontAwesome', fontSize: 16, lineHeight: 19, marginBottom: 34 }}>{I18n.t('QuesnoteActivity.personalized')}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '45%',borderRadius:10 }}>
                            <TouchableOpacity >
                                <Button style={{ backgroundColor: "#2196f3" }}
                                    onPress={() => this.navigate.pop()}
                                    title={I18n.t('QuesnoteActivity.back')}
                                    color="#2196f3" />

                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '45%',borderRadius:10 }}>
                            <TouchableOpacity >
                                <Button style={{ backgroundColor: "#2196f3" }}
                                    onPress={() => this.navigate.push("Questionnaire")}
                                    title={I18n.t('QuesnoteActivity.ques')}
                                    color="#2196f3" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('QuesnoteActivity.eip')}</Text>
            </ScrollView >
        );
    }
}

