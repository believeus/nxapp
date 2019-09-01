import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container, StatusBar } from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-af-video-player'
import VideoPlayer from 'react-native-video-controls';


type Props = {};
export default class TabHomeActivity extends Component<Props> {


    constructor(props) {
        super(props);
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <ScrollView>
                <Text>TabHomeActivity</Text>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button title="click me to About View" onPress={() => navigate.push("About")}></Button>
                    <VideoPlayer
                        style={{width:"100%",height:250}}
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
