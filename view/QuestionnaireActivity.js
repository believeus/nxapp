import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
type Props = {};
export default class QuestionnaireActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuestionnaireActivity.name")
        })
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("LifeStyleChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }
                }>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='center' source={require("../image/icons/icon1.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>Lifestyle Questionnaire</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("MoodChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='center' source={require("../image/icons/icon2.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>Mood Self-Assessment</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("McGillChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='center' source={require("../image/icons/icon3.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>McGill Pain Questionnaire</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("SleepChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='center' source={require("../image/icons/icon4.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>Sleep Self-Assessment</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <TouchableOpacity onPress={() => {
                    this.state.user == null ?
                        this.navigate.push("Login")
                        :
                        this.state.user.privatekey ?
                            this.navigate.push("DietChart")
                            :
                            this.navigate.push("RasEncryptionActivity")
                }}>
                    <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 66, width: '25%' }} resizeMode='center' source={require("../image/icons/icon5.png")}></Image>
                        <Text style={{ height: 66, width: '65%', fontFamily: 'NotoSansHans-Medium', fontSize: 16, lineHeight: 66, color: '#0071bc' }}>Diet Recommendation</Text>
                        <Text style={{ width: '10%', height: 66, fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 66 }}>&gt;</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

