import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container, StatusBar } from 'react-native';
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
                <Text>{I18n.t('TabHomeActivity.name')}</Text>
                <View style={{ width: "100%", height: 300 }}>
                    <Swiper
                        height={300}//组件高度
                        horizontal={true}//水平轮播
                        paginationStyle={{ bottom: 10 }}
                        showsButtons={true}
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}>
                        <View style={{ width: '100%', height: 360 }}>
                            <Image style={{ width: '100%', height: 360 }} source={require('../image/enpic/index1.jpg')} resizeMode="cover" />
                        </View>
                        <View style={{ width: '100%', height: 360 }}>
                            <Image style={{ width: '100%', height: 360 }} source={require('../image/enpic/index2.jpg')} resizeMode="cover" />
                        </View>
                        <View style={{ width: '100%', height: 360 }}>
                            <Image style={{ width: '100%', height: 360 }} source={require('../image/enpic/index3.jpg')} resizeMode="cover" />
                        </View>
                    </Swiper >
                    <Text>HomeActivity Screenyyy</Text>
                    <Button title="About View" onPress={() => navigate.push("About")}></Button>
                </View>
                
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button title="click me to About View" onPress={() => navigate.push("About")}></Button>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'https://app.beijingepidial.com/static/images/ted.png'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />

                </View>
                <Slider
                    style={{ width: 300, height: 50 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FF0000"
                    maximumTrackTintColor="#000000"
                />
            </ScrollView>

        );
    }
}
