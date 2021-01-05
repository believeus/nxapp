import React, { Component } from 'react';

import { Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {  Button } from "native-base";
import { I18n } from '../locales/i18n';



type Props = {};
export default class LaunchActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("LoginActivity.title"),
            headerRight: null
        })
    }

    constructor(props) {
        super(props);
        this.state = { animating: false, disabled: true };
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <View >
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <View style={{ height: 200, alignItems: 'center', marginTop: 120, marginBottom: 60 }}>
                        <Image style={{ width: '50%', height: 190 }} resizeMode='contain' source={require("../image/word-logo.jpg")}></Image>
                    </View>
                    <View style={{ height: 500 }}>
                        <View style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "space-evenly" }} >
                            <View style={{ width: "40%", height: 40, }}>
                                <TouchableOpacity onPress={() => this.navigate.push("Register")}>
                                    <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#e64d85" }}>
                                        <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center" }}>REGISTER KIT</Text>
                                    </Button>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "40%", height: 40, }}>
                                <TouchableOpacity onPress={() => this.navigate.push("Register")}>
                                    <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#4381f1" }}>
                                        <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center" }}>BUY EPIAGE KIT</Text>
                                    </Button>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 20, marginTop: 20, marginBottom: 20, flexDirection: "row", justifyContent: "space-evenly" }}>
                            <View style={{ width: "45%", height: 10, borderBottomColor: "#dcdcdc", borderBottomWidth: 1 }}></View>
                            <Text style={{ width: "10%", height: 15, textAlign: "center", lineHeight: 15, color: "#a9a9a9" }}>or</Text>
                            <View style={{ width: "45%", height: 10, borderBottomColor: "#dcdcdc", borderBottomWidth: 1 }}></View>
                        </View>
                        <View style={{ width: "100%", height: 40 }}>
                            <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#116dbc" }}
                                onPress={() => this.navigate.push('Register')}>
                                <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center" }}>SIGN IN WITH EMAIL</Text>
                            </Button>
                        </View>
                        <View style={{ width: '90%', height: 100, alignSelf: 'center', marginTop: 30 }}>
                            <TouchableOpacity onPress={() => this.navigate.push("Main")} >
                                <Text style={{ width: "100%", height: 80, textAlign: "center", fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#116dbc', textDecorationLine: "underline" }}>Read more about epigenetic age</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

