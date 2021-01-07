import React, { Component } from 'react';

import { Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Button } from "native-base";
import { I18n } from '../locales/i18n';
import Session from '../storage/Session'


type Props = {};
export default class LaunchActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("LaunchActivity.title"),
            headerRight: null
        })
    }

    constructor(props) {
        super(props);
        Session.save("launchershow", true);
        
        this.state = {
            user:null,
            animating: false,
            disabled: true
        };
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View >
                    <View style={{ width: "100%", height: 400, alignItems: 'center', marginBottom: 20 }}>
                        <Image style={{ width: '100%', height: 400 }} resizeMode='cover' source={require("../image/launch.jpg")}></Image>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View>
                            <View style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "space-evenly" ,marginBottom:30}} >
                                <View style={{ width: "40%", height: 40, }}>
                                    <TouchableOpacity >
                                        <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#e64d85" }}
                                             ref={ref => this.reportPage = ref}
                                            onPress={() => this.state.user == null ?
                                                this.navigate.push("Register")
                                                :
                                                this.state.user.privatekey ?
                                                    this.navigate.push("DnaReport")
                                                    :
                                                    this.navigate.push("RasEncryptionActivity")}
                                        >
                                            <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center",fontWeight:"700" }}>{I18n.t("LaunchActivity.registerkit")}</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "40%", height: 40, }}>
                                    <TouchableOpacity >
                                        <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#4381f1" }}
                                            onPress={() => this.navigate.push("Mall")}>
                                            <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.buykit")}</Text>
                                        </Button>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={{ height: 20, marginTop: 20, marginBottom: 20, flexDirection: "row", justifyContent: "space-evenly" }}>
                                <View style={{ width: "45%", height: 10, borderBottomColor: "#dcdcdc", borderBottomWidth: 1 }}></View>
                                <Text style={{ width: "10%", height: 15, textAlign: "center", lineHeight: 15, color: "#a9a9a9" }}>or</Text>
                                <View style={{ width: "45%", height: 10, borderBottomColor: "#dcdcdc", borderBottomWidth: 1 }}></View>
                            </View> */}
                            <View style={{ width: "100%", height: 40 }}>
                                <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#116dbc" }}
                                    onPress={() => this.navigate.push('Login')}>
                                    <Text style={{ width: "100%", height: 40, color: "#ffffff", textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.signin")}</Text>
                                </Button>
                            </View>
                            <View style={{ width: "100%", height: 60, marginTop: 20 }}>
                                <Button style={{ width: "100%", height: 40, borderRadius: 30, backgroundColor: "#e35a24" }}
                                    onPress={() => this.navigate.push('Main')}>
                                    <Text style={{ width: "100%", height: 40, color: "#ffffff", fontStyle: "italic", fontWeight: "700", textAlign: "center", textAlignVertical: "center" }}>{I18n.t("LaunchActivity.readmore")}</Text>
                                </Button>
                            </View>
                            <Text style={{ textAlign: 'center', fontFamily: 'NotoSansHans-Light', fontSize: 12 }}>{I18n.t('TabHomeActivity.allright')}</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

