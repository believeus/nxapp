import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, Button } from 'react-native';
import { I18n } from '../locales/i18n';
import { WebView } from 'react-native-webview';
import FitImage from 'react-native-fit-image';
export default class SameActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("SameActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { display: false }
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
                />
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: '100%' }}>
                    <ImageBackground style={{ width: '100%', height: 245 }} resizeMode='cover' source={require("../image/enpic/sam1.jpg")} >
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', }}>
                            <View style={{ width: '55%' }}></View>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 34, marginTop: 12, color: '#ff9433',fontWeight:'bold',lineHeight:34 }}>{I18n.t('SameActivity.what')}</Text>
                                <Text style={{ fontSize: 34, color: '#ff9433',fontWeight:'bold' }}>{I18n.t('SameActivity.what2')} </Text>
                                <Text style={{ fontSize: 14, color: '#ffffff',marginTop:17, fontFamily: 'NotoSansHans-Light', }}>{I18n.t('SameActivity.affacthealth')}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ backgroundColor: '#662D86', height: 45, flexDirection: 'row', }}>

                    <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                         <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>{I18n.t('SameActivity.same')}</Text> 
                    </View>
                    <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                        <TouchableOpacity  onPress={() =>  {this.setState({ url: "https://epi-age.com/product/episame/" }); this.setState({ display: true })}}>
                            <Image style={{ width: '100%', height: 34 }} source={require('../image/icons/cart.png')} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', }}>
                    <Image style={{ height: 456, width: '100%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/sam2.png")} >

                    </Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, paddingBottom: 23, }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.sam')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.body')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.considered')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.level')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.molecules')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 16, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 16, marginBottom: 12, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.tosylate')}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6' }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, paddingBottom: 23, }}>
                        <Text style={{ fontSize: 19, fontFamily: 'FontAwesome', }}>{I18n.t('SameActivity.according')}</Text>
                        <Image style={{ height: 123, width: '100%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/sam3.png")}></Image>
                        <View style={{ width: '96%', height: 123, backgroundColor: '#C1E1E8', borderRadius: 10, alignSelf: 'center', marginBottom: 34 }}>
                            <Text style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>{I18n.t('SameActivity.quality')}</Text>
                            <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/books/NBK11886/" }); this.setState({ display: true }) }}>
                                <Text style={{ fontStyle: 'italic', fontSize: 14, paddingLeft: 10, textDecorationLine: 'underline' }}>https://www.ncbi.nlm.nih.gov/books/NBK11886/
                                </Text>
                            </TouchableOpacity>
                            <Text style={{ height: 47, width: '10%', paddingTop: -2, fontStyle: 'italic', fontSize: 24, color: '#c1e1e8' }}>▼</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.depression')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.effective')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.diseases')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.effects')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23,marginBottom: 23, }}>
                    <Text style={{ height: 77, fontSize: 21, fontFamily: 'FontAwesome', lineHeight: 34, }}> {I18n.t('SameActivity.spotlight')}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '28%', fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1 }}></Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('SameActivity.october')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 68, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 68, lineHeight: 22, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>{I18n.t('SameActivity.lists')}</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2013
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('SameActivity.research')} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 99, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 99, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>{I18n.t('SameActivity.highest')}</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2010
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('SameActivity.study')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 188, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <Text style={{ width: '70%', height: 188, lineHeight: 18, fontFamily: 'NotoSansHans-Light', paddingLeft: 19 }}>{I18n.t('SameActivity.hospital')}
                            <Text onPress={() => { this.setState({ url: "https://ajp.psychiatryonline.org/doi/full/10.1176/" });     this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', fontStyle: 'italic', lineHeight: 18 }}>https://ajp.psychiatryonline.org/doi/full/10.1176/</Text>
                        </Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2009
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('SameActivity.korean')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 99, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 99, }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19 }}>{I18n.t('SameActivity.as')}</Text>
                            <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/20110025" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/20110025</Text>
                        </View>

                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }} >
                        <Text style={{ width: '25%', height: 17, lineHeight: 19, fontFamily: 'NotoSansHans-Light', textAlign: 'center' }}>2004
                        </Text>
                        <Text style={{ alignSelf: 'flex-end', width: '5%', height: 18, backgroundColor: '#0071bc', borderRadius: 30, }}></Text>
                        <Text style={{ width: '70%', height: 16, lineHeight: 17, fontFamily: 'NotoSansHans-Light', paddingLeft: 10 }}>{I18n.t('SameActivity.university')} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ width: '28%', height: 113, fontFamily: 'NotoSansHans-Light', borderRightColor: '#e4d8d8', borderRightWidth: 1, textAlign: 'center' }}>
                        </Text>
                        <View style={{ width: '70%', height: 123, }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19 }}>{I18n.t('SameActivity.calfornia')}</Text>
                            <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/15102339" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, paddingLeft: 19, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/15102339</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, paddingBottom: 23, }}>
                        <Text style={{ height: 99, fontSize: 19, fontFamily: 'FontAwesome', lineHeight: 23, }}>{I18n.t('SameActivity.basic')}</Text>

                        <View style={{ flexDirection: 'row', marginBottom: 12,borderBottomWidth:1,borderBottomColor:'#dedede' }}>
                            <Image style={{ width: '20%',height:60}} resizeMode='contain' source={require("../image/enpic/same-1.png")}/>
                            <View style={{ width: '80%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.animals')}</Text>
                                <TouchableOpacity onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29435170" }); this.setState({ display: true }) }} >
                                    <Text style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/29435170</Text>
                                </TouchableOpacity>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/15150277" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/15150277</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 12 ,borderBottomWidth:1,borderBottomColor:'#dedede'}}>
                        <Image style={{ width: '20%',height:60}} resizeMode='contain' source={require("../image/enpic/same-2.png")}/>
                            <View style={{ width: '80%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.shown')}</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/29340097" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/29340097</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 12 ,borderBottomWidth:1,borderBottomColor:'#dedede'}}>
                        <Image style={{ width: '20%',height:60}} resizeMode='contain' source={require("../image/enpic/same-3.png")}/>
                            <View style={{ width: '80%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.prostate')}</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/25631332" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/25631332</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/16982764" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/16982764</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 12,borderBottomWidth:1,borderBottomColor:'#dedede' }}>
                        <Image style={{ width: '20%',height:60}} resizeMode='contain' source={require("../image/enpic/same-4.png")}/>
                            <View style={{ width: '80%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.formation')}</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/23073625" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/23073625</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/19444874" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/19444874</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/22159228" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/22159228</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 12,borderBottomWidth:1,borderBottomColor:'#dedede' }}>
                        <Image style={{ width: '20%',height:60}} resizeMode='contain' source={require("../image/enpic/same-5.png")}/>
                            <View style={{ width: '80%', }}>
                                <Text style={{ fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.was')}</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/27681803" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/27681803</Text>
                                <Text onPress={() => { this.setState({ url: "https://www.ncbi.nlm.nih.gov/pubmed/22221883" }); this.setState({ display: true }) }} style={{ fontFamily: 'NotoSansHans-Light', lineHeight: 18, fontSize: 12, color: '#0071bc', fontStyle: 'italic', }}>https://www.ncbi.nlm.nih.gov/pubmed/22221883</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={{ height: 729, width: '100%', marginBottom: 34 }} resizeMode='contain' source={require("../image/enpic/sam4.png")}>

                </Image>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, marginBottom: 23 }}>
                    <Text style={{ height: 45, fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, marginBottom: 23 }}>{I18n.t('SameActivity.why')}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.standards')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.consistently')} <Text style={{ color: '#0071bc', fontStyle: 'italic' }}>{I18n.t('SameActivity.ss')} &gt;{I18n.t('SameActivity.rs')} &lt;20%.</Text> </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.tablets')} </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}> {I18n.t('SameActivity.sealed')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.potency')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.falvors')} </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.minimun')}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f4f4f6', }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 23, paddingBottom: 23, }}>
                        <Text style={{ fontSize: 22, fontFamily: 'FontAwesome', lineHeight: 34, marginBottom: 23 }}>{I18n.t('SameActivity.when')}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.should')} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                            <Text style={{ width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('SameActivity.taking')}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>{I18n.t('SameActivity.ltd')}</Text>
            </ScrollView >
        );
    }
}

