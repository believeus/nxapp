import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
import { TabViewAnimated, TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { I18n } from '../locales/i18n';

export default class ShafaatActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title:I18n.t('ScienceteamActivity.Shafaat'),
        })
    }
    constructor(props) {
        super(props);
    }
  
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center',paddingTop: 20, marginBottom: 20 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="contain" source={require("../image/icons/Shafaat-2.jpg")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>{I18n.t('ScienceteamActivity.Shafaat')}</Text>
                </View>
                <View style={{ marginBottom: 20,width:'100%',justifyContent:"center",paddingLeft: 17, justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
                    <View style={{ backgroundColor: '#f0f0f0',width:"95%"}}>
                        <Text style={{fontFamily: 'NotoSansHans-Light'}}>{I18n.t('ScienceteamActivity.Shafaatmsg')}</Text>
                    </View>
                </View>
               
            
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('ZhiyuanActivity.reserved')}</Text>
            </ScrollView >

        );
    }
}

