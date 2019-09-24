import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import VideoPlayer from 'react-native-video-controls';

type Props = {};
export default class ProfMosheActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("ProfMosheActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Image style={{ height: 99, width: '100%' }} resizeMode="center" source={require("../image/icons/prof.png")}></Image>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 44, textAlign: 'center', color: '#0071bc' }}>Moshe Szyf, Prof.</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, lineHeight: 18, textAlign: 'center', }}>Chairman & CEO</Text>
                    <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, lineHeight: 18, textAlign: 'center', fontStyle: 'italic' }}>HKG epiTHERAPEUTICS Ltd.</Text>
                </View>
                <View style={{ marginBottom: 20, backgroundColor: '#f0f0f0' }}>
                    <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ height: 67, fontFamily: 'NotoSansHans-Light', fontSize: 22, borderBottomColor: '#0071bc', borderBottomWidth: 1 }}>Professional Experiences</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Pioneer of the field of epigenetics</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16, }}>Inventor of the first broad patents in the field</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Inventor of the first patents on DNA methylation </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Founder of the field of behavioral and psychiatry epigenetics</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Thought leader, published 295 papers in the area</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Fellow of the Royal Society of Canada</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Fellow of the Canadian Academy of Health Sciences</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Professor Department of Pharmacology and Therapeutics McGill University Montreal Canada</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Resident chief scientist of Beijing epidial medical diagnostic technology co., LTD.</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '6%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>--</Text><Text style={{ width: '94%', fontFamily: 'NotoSansHans-Light', fontSize: 16 }}>Director of epigenetic institute, Beijing yizhuang innovation institute</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:20}}></View>
                <View style={{backgroundColor:'#f0f0f0'}}>
                    <View style={{width:'90%',alignSelf:'center'}}>
                    <Text style={{fontFamily: 'NotoSansHans-Light', fontSize: 22}}>Related Videos</Text>
                    <Text style={{fontFamily: 'NotoSansHans-Light', fontSize: 16}}>Healthtech O2O Summit Dr. Moshe Szyf, HKG Epitherapeutics.mp4</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'http://192.168.0.114:8080/static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                    <Text style={{fontFamily: 'NotoSansHans-Light', fontSize: 16}}>Healthtech O2O Summit Dr. Moshe Szyf, HKG Epitherapeutics.mp4</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'http://192.168.0.114:8080/static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                    <Text style={{fontFamily: 'NotoSansHans-Light', fontSize: 16}}>Healthtech O2O Summit Dr. Moshe Szyf, HKG Epitherapeutics.mp4</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'http://192.168.0.114:8080/static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                    <Text style={{fontFamily: 'NotoSansHans-Light', fontSize: 16}}>Healthtech O2O Summit Dr. Moshe Szyf, HKG Epitherapeutics.mp4</Text>
                    <VideoPlayer
                        style={{ width: "100%", height: 250 }}
                        paused={true}
                        fullscreen={true}
                        poster={'http://192.168.0.114:8080/static/images/ted.jpg'} //poster必须是url从互联网访问的形式
                        source={{ uri: 'https://app.beijingepidial.com/How_early_life_experience_is_written_into_DNA _Moshe_Szyf.mp4' }}
                        navigator={this.props.navigator}
                    />
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

