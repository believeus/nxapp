import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
type Props = {};
export default class ScienceteamActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ScienceteamActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.navigate.push("Moshe")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="center" source={require("../image/icons/prof1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'NotoSansHans-Light', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.moshe')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.ceo')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 123 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("David")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="center" source={require("../image/icons/david1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'NotoSansHans-Light', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.david')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.davidtitle')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 123 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Huili")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 123, width: '30%' }} resizeMode="center" source={require("../image/icons/huili1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'NotoSansHans-Light', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.huili')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 16 }}>{I18n.t('ScienceteamActivity.huili')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '10%', height: 123, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 123 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Chifat")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 123, width: '30%', borderRadius: 10 }} resizeMode="center" source={require("../image/icons/chifat1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'NotoSansHans-Light', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>{I18n.t('ScienceteamActivity.chifat')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 14 }}>{I18n.t('ScienceteamActivity.chifattitle')}</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>{I18n.t('ScienceteamActivity.hkg')}</Text>
                        </View>
                        <Text style={{ width: '100%', height: 123, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 123 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => this.navigate.push("Zhiyuan")}>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                        <Image style={{ height: 123, width: '30%', borderRadius: 10 }} resizeMode="center" source={require("../image/icons/jason1.png")}></Image>
                        <View style={{ width: '60%', height: 123, fontFamily: 'NotoSansHans-Light', paddingLeft: 17, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, color: '#0071bc' }}>Zhiyuan Lv  Ph.D.</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 16 }}>Laboratory Manager（GZ)</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, fontStyle: 'italic' }}>Beijing Epidial Medical Diagnostic Technology Co.,Ltd.</Text>
                        </View>

                        <Text style={{ width: '10%', height: 123, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 123 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}

