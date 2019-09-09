import React, { Component } from 'react';
import { I18n } from '../locales/i18n';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';


type Props = {};
export default class ForgetActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("ForgetActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        const navigate =this.props.navigation;
        return (
            <ScrollView>
                <View>

                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: 50 }}></View>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>{I18n.t('ForgetActivity.resetPwd')}</Text>
                        </View>
                        <View style={{ height: 40, alignItems: 'flex-start', fontSize: 14, justifyContent: 'flex-start' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#f05a25', lineHeight: 20 }}>{I18n.t('ForgetActivity.link')}</Text>
                        </View>
                        <View style={{ alignItems: 'center', height: 70, alignContent: 'center', marginTop: 20 }}>
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

                        <View>
                            <TouchableOpacity >
                                <Text style={{ height: 45, borderRadius: 50, backgroundColor: "#0071bc", fontFamily: 'NotoSansHans-Light', color: '#FFFFFF', fontSize: 22, textAlign: 'center', lineHeight: 50 }}>{I18n.t('ForgetActivity.btn')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => navigate.push("Login")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, color: '#007186' }}>{I18n.t('ForgetActivity.link2')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

