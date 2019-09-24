import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import VideoPlayer from 'react-native-video-controls';
import { I18n } from '../locales/i18n';
import { getLanguages } from 'react-native-i18n';
import Session from '../storage/Session';
import data from '../appdata'
type Props = {};
export default class TabHomeActivity extends Component<Props> {
    static navigationOptions = {
        headerRight: (
            <View style={{ width: 100, height: 50, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ height: 25, width: 25 }} resizeMode="center" source={require("../image/icons/user-logo.png")} />
                <Text style={{ color: "#fff" }}>Hello</Text>
            </View>
        )

    }
    constructor(props) {
        super(props);
        this.state = { user: null };
    }
    //因为Session.load方法异步的,所以可以给sate设置值，设置之后，页面渲染会根据sata中的值变化而变化
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>

                <View style={{ width: "100%", height: 310 }}>
                    <Swiper
                        height={340}//组件高度
                        horizontal={true}//水平轮播
                        paginationStyle={{ bottom: 10 }}
                        showsButtons={true}
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ width: '100%', height: 310 }}>
                                <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index1.jpg')} resizeMode="center" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("DnaReport")}>
                            <View style={{ width: '100%', height: 310 }}>
                                <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index2.jpg')} resizeMode="center" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("DnaReport")}>
                            <View style={{ width: '100%', height: 310 }}>
                                <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index3.jpg')} resizeMode="center" />
                            </View>
                        </TouchableOpacity>
                    </Swiper >
                </View>
                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignSelf: 'center', justifyContent: 'space-around' }}>
                    <ImageBackground style={{ width: '100%', heigh: '100%' }} source={require('../image/enpic/home-bg.png')} resizeMode='center'  >
                        <View style={{ width: '90%', alignSelf: 'center', height: 314, marginTop: 45, zIndex: 999 }}>
                            <View style={{ heigh: 128, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                <Text onPress={() => this.navigate.push("Forget")} style={{ height: 128, width: '32%' }}></Text>

                                <View style={{ height: 128, width: '36%', alignSelf: 'center' }}>
                                    <Text onPress={() => { this.navigate.push("LifeStyleChart") }} style={{ height: 56, marginTop: 80 }}></Text>
                                </View>
                                <Text onPress={() => { }} style={{ height: 128, width: '32%', }}></Text>
                            </View>
                            <View style={{ heigh: 141, width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                <Text onPress={() => { }} style={{ height: 141, width: '32%' }}></Text>
                                <View style={{ height: 141, width: '36%', alignSelf: 'center' }}>
                                    <Text onPress={() => { this.state.user == null ? this.navigate.push("Login") : this.navigate.push("DnaReport") }}
                                        style={{ height: 56, marginBottom: 80 }}></Text>
                                </View>
                                <Text onPress={() => this.navigate.push("Forget")} style={{ height: 141, width: '32%', }}></Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f0f0f0', paddingBottom: 30 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#333333', fontSize: 26, marginLeft: 20, marginBottom: 15 }}>Related Video</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={data.url+'static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                </View>
                <View style={{ backgroundColor: '#ffffff', width: '100%', height: 267, marginTop: 20 }}>
                    <View style={{ width: '90%', height: 278, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 26, color: '#333333', textAlign: 'center', fontFamily: 'NotoSansHans-Light', lineHeight: 56 }}>Biological Age Detection by DNA Methylation </Text>
                        <Text style={{ fontSize: 18, color: '#808080', textAlign: 'center', fontFamily: 'NotoSansHans-Light' }}>Only 1ml saliva sample is needed for detection, which is convinient and safe.</Text>
                        <Text style={{ fontSize: 18, color: '#808080', textAlign: 'center', fontFamily: 'NotoSansHans-Light' }}>The sample will be sent to the laboratory for testing, the test results will be sent to your APP.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', heigh: 389, width: '100%' }}>
                    <View style={{ width: '90%', height: 389, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: 278 }} source={require('../image/enpic/index6.jpg')} resizeMode="center" />
                        <Text style={{ fontSize: 23, textAlign: 'center', fontFamily: 'NotoSansHans-Light', lineHeight: 34, marginTop: 0, color: '#333333' }}>Epiaging Kit</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: '#000000', width: '7%', alignSelf: 'center' }}></View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <View style={{ width: '40%', alignSelf: 'flex-start' }}>
                                <Text style={{ marginRight: 5, fontSize: 18, textAlign: 'right', fontFamily: 'NotoSansHans-Light', color: '#b2b2b2', textDecorationLine: 'line-through' }}>$189</Text>
                            </View>
                            <View style={{ width: '40%', alignSelf: 'flex-start' }}>
                                <Text style={{ marginLeft: 5, fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#333333' }}>￥99</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff' }}>
                    <View style={{ width: '90%', height: 456, alignSelf: 'center', marginTop: 20 }}>
                        <Image style={{ width: '100%', height: 245 }} source={require('../image/enpic/index7.jpg')} resizeMode="center" />
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 45, color: '#333333' }}>Biological Age Detection 2.0</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, color: '#4d4d4d', lineHeight: 39 }}>Biological age can be measured with Only 1ml saliva sample.</Text>
                        <View style={{ backgroundColor: '#0071bc', borderRadius: 5, height: 45, flexDirection: 'row', }}>
                            <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>Biological Age Detection 2.0 &nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>$99</Text></Text>
                            </View>

                            <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                                    <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <Text style={{ fontSize: 14, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}>Learn  More &gt;</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#0071bc' }}>
                    <View style={{ width: '90%', height: 156, alignSelf: 'center', marginTop: 34 }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22, color: '#ffffff', textAlign: 'center', lineHeight: 45, fontWeight: '600' }}>Our APP System</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, color: '#ffffff', textAlign: 'center', lineHeight: 29 }}>- Dynamic personal reporting -</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, color: '#ffffff', textAlign: 'center', lineHeight: 29 }}>- Comprehensive questionnaires -</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, color: '#ffffff', textAlign: 'center', lineHeight: 29, marginBottom: 34 }}>- Follow-up -</Text>
                    </View>
                    <View style={{ backgroundColor: '#0071bc' }}>
                        <Image style={{ width: '100%', height: 245 }} source={require('../image/enpic/index8.jpg')} resizeMode='cover' />
                        <View style={{ width: '90%', height: 278, alignSelf: 'center', marginTop: 23, marginBottom: 23 }}>
                            <View style={{ height: 278, justifyContent: 'space-around' }}>
                                <View style={{ heigh: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ width: '45%', backgroundColor: '#ffffff', borderRadius: 20 }}>
                                        <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/ap1.png')} resizeMode='center' />
                                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Links to international reputable medical associations recommendations</Text>
                                    </View>
                                    <View style={{ width: '45%', backgroundColor: '#ffffff', borderRadius: 20 }}>
                                        <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/ap2.png')} resizeMode='center' />
                                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>personalized dynamic report</Text>
                                    </View>
                                </View>
                                <View style={{ height: 123, justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ width: '45%', backgroundColor: '#ffffff', borderRadius: 20 }}>
                                        <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/ap3.png')} resizeMode='center' />
                                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>Life style questionnaires</Text>
                                    </View>
                                    <View style={{ width: '45%', backgroundColor: '#ffffff', borderRadius: 20 }}>
                                        <Image style={{ width: '100%', height: 45, justifyContent: 'center', marginTop: 5, marginBottom: 5 }} source={require('../image/icons/ap4.png')} resizeMode='center' />
                                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', color: '#808080' }}>APP linked to a mechine learning System</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <View style={{ height: 599, width: '90%', alignSelf: 'center', marginTop: 34 }}>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22, textAlign: 'center', color: '#333333' }}>What is SAM-e?</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#4d4d4d' }}>SAM-e is a natural product in the human body, which can affect human health.</Text>
                        <Image style={{ width: '100%', height: 245, justifyContent: 'center' }} source={require('../image/enpic/index9.jpg')} resizeMode='center' />
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 45, color: '#333333' }}>SAM-e</Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, color: '#4d4d4d', lineHeight: 39 }}>SAM-e is a natural nutrition supplement in the human body.</Text>
                        <View style={{ backgroundColor: '#662D86', borderRadius: 5, height: 45, flexDirection: 'row', }}>
                            <View style={{ width: '80%', height: 45, justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ffffff' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, textAlign: 'center', color: '#ffffff' }}>SAM-e &nbsp;&nbsp;&nbsp;<Text style={{ fontSize: 14, textAlign: 'center', color: '#f2e421' }}>$60</Text></Text>
                            </View>

                            <View style={{ width: '20%', height: 45, justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                                    <Image style={{ width: '100%', height: 45 }} source={require('../image/icons/cart.png')} resizeMode="center" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <Text style={{ fontSize: 14, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}>Learn  More &gt;</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: '#ffffff', }}>
                    <View style={{ width: '90%', height: 567, marginTop: 56, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc4.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>My Report</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc3.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>Questionnaires</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc10.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>Test Process</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc5.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>Order Record</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc1.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>Q&A</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc9.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>Data Security</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                            <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, height: 56, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ width: '20%', justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: 56 }} source={require('../image/icons/uc2.png')} resizeMode='center' />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, textAlign: 'left', fontFamily: 'NotoSansHans-Light', color: '#0071bc' }}>User Informed Consent</Text>
                                </View>
                                <View style={{ width: '15%', height: 56, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'NotoSansHans-Light', color: '#0071bc', textAlign: 'center' }}> &gt; </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 16,textDecorationLine:'underline', }}>Disclaimer</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 14,lineHeight:16 }}>The epiAging test is not intended to be health 
                    information or medical data or to be used to screen, diagnose, treat, prevent or assess risk of any disease or condition. The epiAging service is an epigenetic age determination based on assessment of DNA methylation in your DNA. We are not collecting genetic data. The test is available for individuals 21 years of age or older. This service has not been cleared or approved by U. S. Food and Drug Administration.
                     </Text>
                     <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}> @2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
                </View>
            </ScrollView >

        );
    }
}
