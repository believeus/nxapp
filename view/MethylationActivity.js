import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class MethylationActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("MethylationActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc' }}>{I18n.t('MethylationActivity.mark')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.added')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.epigenetic')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.happens')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.expressed')}</Text>
                    <Image style={{ height: 189, width: '100%' }} resizeMode='contain' source={require("../image/icons/methy1.png")}></Image>
                </View>

                <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc', marginTop: 20, }}>{I18n.t('MethylationActivity.software')}</Text>
                <Image style={{ height: 189, width: '90%', alignSelf: 'center',}} resizeMode='contain' source={require("../image/icons/methy4.jpg")}></Image>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'NotoSansHans-Medium', lineHeight: 34 }}>{I18n.t('MethylationActivity.minicomputer')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.Hardware')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.Operating')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.Softwre')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.specific')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, color: '#0071bc' }}>{I18n.t('MethylationActivity.silent')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 189, width: '100%' }} resizeMode='contain' source={require("../image/icons/methy2.png")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', lineHeight: 27, fontSize: 22, color: '#0071bc', marginTop: 20,marginBottom:23 }}>{I18n.t('MethylationActivity.disease')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.tissue')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.cancer')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.methylation')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.studies')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.early')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 256, width: '100%' }} resizeMode='contain' source={require("../image/icons/methy5.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', lineHeight: 27, fontSize: 22, color: '#0071bc',marginBottom:23 }}>{I18n.t('MethylationActivity.environment')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.conditions')}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.psychiatry')} </Text>
                    <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('MethylationActivity.discoveries')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 256, width: '100%' }} resizeMode='contain' source={require("../image/icons/methy6.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20, flexDirection: 'row', }}>
                    <Text style={{ height: 99, width: '65%', alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', fontWeight: '700', color: '#0071bc', lineHeight: 18, paddingTop: 19 }}>{I18n.t('MethylationActivity.ventions')}</Text>
                    <Image style={{ height: 99, width: '35%' }} resizeMode='contain' source={require("../image/icons/methy7.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.events')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.changes')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.reversible')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20, flexDirection: 'row', }}>
                    <Text style={{ height: 99, width: '65%', alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', fontWeight: '700', color: '#0071bc', lineHeight: 23, paddingTop: 19 }}>{I18n.t('MethylationActivity.clock')}</Text>
                    <Image style={{ height: 99, width: '35%' }} resizeMode='contain' source={require("../image/icons/methy8.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.paradigm')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.discovered')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.measuring')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.biological')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{  width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.acceleration')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{  width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('MethylationActivity.bydietary')}</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('MethylationActivity.epi')}</Text>
            </ScrollView>
        );
    }
}

