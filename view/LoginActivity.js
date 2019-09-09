import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Toast from 'react-native-root-toast';
import { I18n } from '../locales/i18n';
import Input from "react-native-input-validation"
import md5 from "react-native-md5";
import { NavigationActions, StackActions } from 'react-navigation';

type Props = {};
export default class LoginActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("LoginActivity.name"),
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    login() {
        if (!this.isValid) { Toast.show(I18n.t("LoginActivity.mailboxformatFail"), { duration: 7000, position: Toast.positions.CENTER }); return }
        if (!this.state.email) { Toast.show(I18n.t("LoginActivity.mailboxNull"), { duration: 7000, position: Toast.positions.CENTER }); return }
        if (!this.state.password) { Toast.show(I18n.t("LoginActivity.passwordNull"), { duration: 7000, position: Toast.positions.CENTER }); return }
        fetch("http://192.168.1.102:8080/user/login.jhtml?email=" + this.state.email + "&password=" + md5.hex_md5(this.state.password))
            .then((response) => response.json())
            .then((sessionuser) => {
                if (sessionuser.mail == null) { Toast.show(I18n.t("LoginActivity.Invalid.Email"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                else {
                    if (sessionuser.password != md5.hex_md5(this.state.password)) { Toast.show(I18n.t("LoginActivity.Invalid.PWD"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                    if (sessionuser.valid == 0) { Toast.show(I18n.t("LoginActivity.Invalid.unactive"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                    //将数据保存在storege中
                    storage.save({
                        key: 'sessionuser',
                        data: sessionuser
                    });
                    //React-Navigation跳转并清除路由记录（重置）
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                    });
                    this.props.navigation.dispatch(resetAction);

                }
            }).catch((error) => {
                console.info(error)
                Toast.show(I18n.t("LoginActivity.Invalid.NetFail"), { duration: 5000, position: Toast.positions.CENTER })
            }).done();

    }
    render() {
        this.navigate = this.props.navigation;
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

                        <View style={{ height: 45, alignContent: 'center', marginTop: 20 }}>
                            <Input style={{
                                height: 45, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                fontSize: 16,
                            }}
                                errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 2, borderRadius: 10 }}
                                errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                placeholder="Email" validator="email"
                                onValidatorExecuted={isValid => this.isValid = isValid}
                                validatorExecutionDelay={100}
                                onChangeText={(email) => { this.setState({ email: email }) }}
                            />
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
                                secureTextEntry={true}
                                onChangeText={(password) => { this.setState({ password: password }); }}
                                placeholder="Password" />
                        </View>
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, color: '#007186' }}>{I18n.t('LoginActivity.ForgetPwd')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.login.bind(this)}>
                                <Text style={{ height: 45, borderRadius: 20, backgroundColor: "#0071bc", fontFamily: 'NotoSansHans-Light', color: '#FFFFFF', fontSize: 22, textAlign: 'center', lineHeight: 50 }}>{I18n.t('LoginActivity.login')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, alignItems: 'center', fontSize: 14, justifyContent: 'center' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#b3b3b3', lineHeight: 20 }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => this.navigate.push("Register")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#0071bc', lineHeight: 20 }}>{I18n.t('LoginActivity.register')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

