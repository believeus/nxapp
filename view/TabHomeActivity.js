import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, ImageBackground, Container, StatusBar, ImageComponent } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import StackHomeActivity from './StackHomeActivity';
import Swiper from 'react-native-swiper';
import Slider from '@react-native-community/slider';
import VideoPlayer from 'react-native-video-controls';
import { I18n } from '../locales/i18n';
import { getLanguages } from 'react-native-i18n'
type Props = {};
export default class TabHomeActivity extends Component<Props> {
    constructor(props) {
        super(props);
        //判断当前系统语言
        getLanguages().then(languages => {
            console.log(languages); // ['en-US', 'en']
        });

    }

    render() {
        const navigate = this.props.navigation;
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
                        <View style={{ width: '100%', height: 310 }}>
                            <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index1.jpg')} resizeMode="center" />
                        </View>
                        <View style={{ width: '100%', height: 310 }}>
                            <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index2.jpg')} resizeMode="center" />
                        </View>
                        <View style={{ width: '100%', height: 310 }}>
                            <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index3.jpg')} resizeMode="center" />
                        </View>
                    </Swiper >
                </View>
                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 40, marginBottom: 40, justifyContent: 'space-around' }}>
                    <ImageBackground style={{ width: '100%', heigh: '100%' }} source={require('../image/enpic/home-bg.png')} resizeMode='contain'  >
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <View style={{ heigh: '45%', justifyContent: 'space-between', flexDirection: 'row', zIndex: 0 }}>
                                <View style={{ height: 138, width: '33%' }}></View>
                                <View style={{ height: 138, width: '33%' }}>
                                    <View style={{ borderColor: 'yellow', borderRadius: 50, marginTop: 80 }}></View>
                                </View>
                                <View style={{ height: 138, width: '33%' }}></View>
                            </View>
                            <View style={{ heigh: '45%', justifyContent: 'space-between', flexDirection: 'row', zIndex: 0 }}>
                                <View style={{ height: 138, width: '33%' }}></View>
                                <View style={{ height: 138, width: '33%' }}>
                                    <View style={{ height: '40%', borderRadius: 50, marginBottom: 50 }}></View>
                                </View>
                                <View style={{ height: 138, width: '33%' }}></View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f0f0f0',paddingBottom:30 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 26, marginLeft: 20, marginBottom: 15 }}>Related Video</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'https://app.beijingepidial.com/static/images/ted.png'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                </View>
                <View style={{ backgroundColor: '#ffffff',width:'100%',height:267,marginTop:20}}>
                    <View style={{ width: '90%', height: 278, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 26, textAlign: 'center', fontFamily: 'NotoSansHans-Light' }}>Biological Age Detection by DNA Methylation </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: 'NotoSansHans-Light' }}>Only 1ml saliva sample is needed for detection, which is convinient and safe.</Text>
                        <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: 'NotoSansHans-Light' }}>The sample will be sent to the laboratory for testing, the test results will be sent to your APP.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f0f0f0', heigh: 299, width: '100%' }}>
                    <View style={{ width: '90%', height: 310, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: 310 }} source={require('../image/enpic/index6.jpg')} resizeMode="center" />
                    </View>
                </View>

            </ScrollView>

        );
    }
}
