import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, fontFamily, TextInput, TouchableOpacity, Alert, FetchResult, AppRegistry } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class LoginActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <ScrollView>
                <View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: 20 }}></View>
                        <View style={{ height: 70, alignItems: 'center' }}>
                            <Image style={{ width: '20%', height: 70 }} resizeMode='center' source={require("../image/icons/logo.png")}></Image>
                        </View>
                        <View style={{ alignItems: 'center', alignContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>Login</Text>
                        </View>
                        <View style={{ alignItems: 'center', height: 45, alignContent: 'center', marginTop: 20 }}>
                            <TextInput style={{
                                height: 45, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 10,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Email" />
                        </View>
                        <View style={{ alignItems: 'center', height: 45, alignContent: 'center', marginTop: 20 }}>
                            <TextInput style={{
                                height: 45, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 10,
                                fontSize: 16,
                                paddingLeft: 10
                            }}
                                onChangeText={(text) => { this.setState({ userName: text }); }}
                                placeholder="Password" />
                        </View>
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => navigate.push("Forget")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, color: '#007186' }}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Text style={{ height: 45, borderRadius: 20, backgroundColor: "#0071bc", fontFamily: 'NotoSansHans-Light', color: '#FFFFFF', fontSize: 22, textAlign: 'center', lineHeight: 50 }}>{I18n.t('LoginActivity.login')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, alignItems: 'center', fontSize: 14, justifyContent: 'center' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#b3b3b3', lineHeight: 20 }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigate.push("Register")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 20 }}>{I18n.t('LoginActivity.link')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

