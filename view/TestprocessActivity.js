import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';

type Props = {};
export default class TestprocessActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("TestprocessActivity.name"),
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        const navigate = this.props.navigation;
        return (
            <ScrollView>
                <ImageBackground style={{ width: '100%', height: 199 }} source={require('../image/icons/tp1.png')} resizeMode='center'  >
                    <Text style={{ fontFamily: 'NotoSansHans-Light', marginLeft: 19, marginTop: 99, fontSize: 34, color: '#ffffff' }}>TEST RPOCESS </Text>
                </ImageBackground>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ width: '20%', height: 145, }}></View>
                    <View style={{ width: '50%', height: 145, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, width: '100%' }} resizeMode='center' source={require("../image/icons/tp2.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 16, textAlign: 'center' }}>1.Download the APP </Text>
                    </View>
                    <View style={{ width: '30%', height: 145 }}>
                        <Image style={{ height: 105, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpa.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '77%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>

                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: '70%', flexDirection: 'column', marginTop: 20 }}>
                        <TouchableOpacity style={{ width: "100%", }} onPress={() => { navigate.push("Malls") }}>
                            <View style={{ width: '88%', height: 123, justifyContent: 'flex-end' }}>
                                <Image style={{ height: 59, width: '100%' }} resizeMode='center' source={require("../image/icons/tp3.png")}></Image>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 16, textAlign: 'center' }}>2.Purchase the kit </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: 23, width: '77%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                        <TouchableOpacity style={{ width: "100%", }} onPress={() => { navigate.push("Questionnaire") }}>
                            <View style={{ width: '100%', height: 145, justifyContent: 'flex-end', paddingLeft: 56 }}>
                                <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='center' source={require("../image/icons/tp4.png")}></Image>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>3.Fill up the question-</Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>naire(Optional) </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '30%', height: 123, marginTop: 99 }}>
                        <Image style={{ height: 123, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpb.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '77%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: '70%', flexDirection: 'column', marginTop: 20 }}>
                        <View style={{ width: '88%', height: 123, justifyContent: 'flex-end', paddingLeft: 67 }}>
                            <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='center' source={require("../image/icons/tp5.png")}></Image>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>4.Collect your </Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>saliva sample</Text>
                        </View>
                        <View style={{ height: 23, width: '77%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                        <View style={{ width: '77%', height: 145, justifyContent: 'flex-end', }}>
                            <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='center' source={require("../image/icons/tp6.png")}></Image>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>5.Ship the sample </Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>back to us </Text>
                        </View>
                    </View>
                    <View style={{ width: '33%', height: 143, marginTop: 67, paddingRight: 28 }}>
                        <Image style={{ height: 123, width: '100%', }} resizeMode='cover' source={require("../image/icons/tpc.png")}></Image>
                    </View>
                </View>
                <View style={{ height: 23, width: '77%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ width: '30%', height: 145 }}>
                        <Image style={{ height: 219, width: '100%', }} resizeMode='contain' source={require("../image/icons/tpd.png")}></Image>
                    </View>
                    <View style={{ width: '50%', height: 145, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='center' source={require("../image/icons/tp7.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>6.DNA extraction </Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>and analysis </Text>
                    </View>
                    <View style={{ width: '20%', height: 145, }}></View>
                </View>
                <View style={{ height: 23, width: '66%', alignSelf: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#f2f2f2' }}></View>
                <TouchableOpacity style={{ width: "100%", }} onPress={() => { this.state.user == null ? this.navigate.push("Login"):navigate.push("Report") }}>
                    <View style={{ width: '88%', height: 145, justifyContent: 'flex-end' }}>
                        <Image style={{ height: 59, marginBottom: 9, width: '100%' }} resizeMode='center' source={require("../image/icons/tp8.png")}></Image>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 21, fontSize: 16, textAlign: 'center' }}>7.View the report </Text>
                        <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 26, fontSize: 16, textAlign: 'center' }}>through the App</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 23, width: '66%', alignSelf: 'flex-start', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f2f2f2' }}></View>

                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}
