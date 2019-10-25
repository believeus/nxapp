import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import FitImage from 'react-native-fit-image';
export default class BiologicalActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("BiologicalActivity.title"),
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
                <FitImage originalWidth={400} originalHeight={218} resizeMode='contain' source={require("../image/enpic/bio1.jpg")} />
                <View style={{ backgroundColor: '#0071bc', height: 45, flexDirection: 'row', }}>
                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>{I18n.t('BiologicalActivity.biological')}&nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>{I18n.t('BiologicalActivity.nice')}</Text></Text>
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                            <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 34, }}>
                    <Text style={{  fontSize: 16, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('BiologicalActivity.wrinkles')}</Text>
                    <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.old')}</Text>
                    <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc' }}>{I18n.t('BiologicalActivity.importment')}</Text>
                    <Image style={{ height: 196, width: '100%', marginBottom: 20 }} resizeMode='cover' source={require("../image/enpic/bio2.jpg")}></Image>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('BiologicalActivity.different')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21, color: '#0071bc' }}>{I18n.t('BiologicalActivity.better')}</Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                        <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.hardware')}</Text>
                        <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.paradigm')}</Text>
                        <Text style={{ height: 156, fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.suggest')} <Text style={{ fontStyle: 'italic', color: '#0071bc' }}>{I18n.t('BiologicalActivity.ncbi')}</Text>{I18n.t('BiologicalActivity.still')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio3.jpg")}></Image>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.epigenetics')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.studies')} <Text style={{ fontStyle: 'italic', color: '#0071bc' }}>{I18n.t('BiologicalActivity.pubmed')}</Text>)</Text>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio4.jpg")}></Image>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.including')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.learn')} </Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>

                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.epiaging')}</Text>
                        <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 23, color: '#0071bc' }}>{I18n.t('BiologicalActivity.mean')}</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio5.jpg")}></Image>
                        <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.extensive')} </Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.decelerate')} </Text>
                        <Text style={{  fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.consider')}</Text>
                        <Text style={{  fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.red')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45, }}>
                    <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio6.jpg")}></Image>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.information')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.update')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.report')} </Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.administer')} </Text>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.app')}</Text>
                        <Image style={{ height: 199, width: '100%', marginBottom: 34 }} resizeMode='cover' source={require("../image/enpic/bio7.jpg")}></Image>
                        <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.sense')}</Text>
                        <Text style={{fontSize: 14, marginBottom: 15, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.personalized')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.health')}</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, textAlignVertical: 'center', color: '#0071bc' }}>{I18n.t('BiologicalActivity.questionnaires')}</Text>
                    <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>{I18n.t('BiologicalActivity.clock')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.chronological')}</Text>
                    <FitImage style={{ height: 389, width: '100%', marginBottom: 34 }} resizeMode='contain' source={require("../image/enpic/bio8.png")}/>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                        <Text style={{ height: 123, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 25, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.life')}</Text>
                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', fontWeight: '700' }}>{I18n.t('BiologicalActivity.know')}</Text>
                        <Text style={{ fontSize: 14, marginBottom: 23, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.identifying')}</Text>

                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 28, color: '#0071bc', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.longevity')}</Text>
                    <FitImage style={{ height: 289, width: '100%', marginBottom: 34 }} resizeMode='contain' source={require("../image/enpic/bio-3.png")}/>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, marginBottom: 34 }}>
                        <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', textAlign: 'center', lineHeight: 25, color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.method')}</Text>
                        <View style={{ height: 34 }}></View>
                        <Image style={{ height: 67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio10.png")}></Image>
                        <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#7E934E', textAlignVertical: 'center',lineHeight: 25, }}>{I18n.t('BiologicalActivity.length')}</Text>
                        <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.correlation')}</Text>
                        <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.requirements')}</Text>
                        <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.small')}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.results')}</Text>
                        <View style={{ height: 34 }}></View>
                        <Image style={{ height:67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio11.png")}></Image>
                        <Text style={{ fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#EB962C',lineHeight: 25,}}>{I18n.t('BiologicalActivity.scores')}</Text>
                        <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center',  }}>{I18n.t('BiologicalActivity.sampling')}</Text>
                        <View style={{ backgroundColor: '#2AA9E0', borderRadius: 10, marginTop: 20, }}>
                            <Image style={{ height: 67, width: '100%', }} resizeMode='center' source={require("../image/enpic/bio12.png")}></Image>
                            <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center', color: '#ffffff',lineHeight: 25, }}>{I18n.t('BiologicalActivity.epigenetic')}</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'FontAwesome', textAlign: 'center', textAlignVertical: 'center',  color: '#ffffff',marginBottom:12 }}>{I18n.t('BiologicalActivity.closely')}</Text>

                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{  fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', lineHeight: 27,}}>{I18n.t('BiologicalActivity.epiagings')}</Text>
                    <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlignVertical: 'center', lineHeight: 27, }}>{I18n.t('BiologicalActivity.methylation')}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center',lineHeight: 34, }}>{I18n.t('BiologicalActivity.hkepi')}</Text>
                    <Text style={{  fontSize: 16, fontFamily: 'FontAwesome', textAlignVertical: 'center', lineHeight: 25, }}>{I18n.t('BiologicalActivity.already')}</Text>
                </View>
                <View style={{ height: 278, width: '90%', alignSelf: 'center', borderRadius: 10, justifyContent: 'space-around', backgroundColor: '#f0f0f0', }}>
                    <View style={{ heigh: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio1.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.slow')}</Text>
                        </View>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio2.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.onset')}</Text>
                        </View>
                    </View>
                    <View style={{ height: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/biolo3.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.quality')}</Text>
                        </View>
                        <View style={{ width: '45%', borderRadius: 20 }}>
                            <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/bio4.png')} resizeMode='center' />
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>{I18n.t('BiologicalActivity.extend')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', marginTop: 34, }}>
                    <View style={{ width: '90%', alignSelf: 'center', }}>
                        <Text style={{ height: 93, fontSize: 22, fontFamily: 'FontAwesome', textAlignVertical: 'center', color: '#0071bc' }}>{I18n.t('BiologicalActivity.making')}</Text>
                        <Text style={{ height: 34, fontSize: 16, fontWeight: '800', marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, }}>{I18n.t('BiologicalActivity.fast')}</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.chronologicaled')}</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.possibly')}</Text>
                        <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.really')}</Text>
                        <Image style={{ height: 289, width: '100%' }} resizeMode='cover' source={require("../image/enpic/bio9.png")}></Image>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 34, }}>
                    <Text style={{  fontSize: 22, lineHeight:56, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', }}>{I18n.t('BiologicalActivity.test')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.developed')}</Text>
                    <Text style={{  fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('BiologicalActivity.epitherapeutics')}</Text>
                    <Text style={{  fontSize: 22, lineHeight: 28, fontFamily: 'FontAwesome', color: '#0071bc', textAlignVertical: 'center', marginTop:34}}>{I18n.t('BiologicalActivity.steps')}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <View style={{ borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ height: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.download')}</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio5.png")}></Image>
                        </View>
                        <Text style={{  margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>{I18n.t('BiologicalActivity.register')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step2')}</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio6.png")}></Image>
                        </View>
                        <Text style={{  margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>{I18n.t('BiologicalActivity.saliva')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step3')}</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio7.png")}></Image>
                        </View>
                        <Text style={{  margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>{I18n.t('BiologicalActivity.questionnaire')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step4')}</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio8.png")}></Image>
                        </View>
                        <Text style={{  margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>{I18n.t('BiologicalActivity.analyze')}</Text>
                    </View>
                    <View style={{ marginTop: 24, borderWidth: 1, borderColor: '#0071bc', borderRadius: 10, backgroundColor: '#ebfaff' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ heigh: 89, width: '70%', textAlignVertical: 'center', textAlign: 'center', fontSize: 18 }}>{I18n.t('BiologicalActivity.step5')}</Text>
                            <Image style={{ height: 89, width: '30%' }} resizeMode='center' source={require("../image/icons/bio9.png")}></Image>
                        </View>
                        <Text style={{ margin: 10, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22 }}>{I18n.t('BiologicalActivity.lifestyle')}</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('BiologicalActivity.foot')}</Text>
            </ScrollView >
        );
    }
}

