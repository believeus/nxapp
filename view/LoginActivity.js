import React, { Component } from 'react';

import {Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
import Input from "react-native-input-validation"
import md5 from "react-native-md5";
import Session from '../storage/Session';
import RNFS from 'react-native-fs'
import data from '../appdata'



type Props = {};
export default class LoginActivity extends Component<Props> {
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
    login = () => {
        if (!this.state.email) { this.setState({ disabled: true }); return }
        if (!this.state.password) { this.setState({ disabled: true }); return }
        let url = data.url + "user/login.jhtml?email=" + this.state.email + "&password=" + md5.hex_md5(this.state.password)
        fetch(url, { method: 'GET' }).then(res => res.json())
            .then(sessionuser => {
                if (sessionuser.mail == null) { Toast.show(I18n.t("LoginActivity.Invalid.Email"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                else {
                    if (sessionuser.password != md5.hex_md5(this.state.password)) { Toast.show(I18n.t("LoginActivity.Invalid.PWD"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                    if (sessionuser.valid == 0) { Toast.show(I18n.t("LoginActivity.Invalid.unactive"), { duration: 7000, position: Toast.positions.CENTER }); return; }
                    this.setState({ animating: true })
                    this.setState({ disabled: true })
                    Session.save("sessionuser", sessionuser)
                    let path = RNFS.DocumentDirectoryPath + '/' + md5.hex_md5(sessionuser.mail) + '.txt'
                    RNFS.exists(path).then((exists) => {
                        let jumpPage = "Main"
                        if (exists) {
                            RNFS.readFile(path).then((result) => {
                                sessionuser.publickey = result ? result.split(":")[0] : ""
                                sessionuser.privatekey = result ? result.split(":")[1] : ""
                                Session.save("sessionuser", sessionuser)
                                this.setState({ animating: false })
                            }).catch((e) => {
                                console.info(e)
                                Alert.alert("Message", e)
                            });
                        } else {
                            jumpPage = "RasEncryptionActivity"
                        }
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: jumpPage })],
                        });
                        this.props.navigation.dispatch(resetAction);
                    })



                }
            })
            .catch((e) => {
                console.info(e)
                Toast.show(I18n.t("LoginActivity.Invalid.NetFail"))
            })
    }
    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: 100 }}></View>
                        <View style={{ height: 70, alignItems: 'center' }}>
                            <Image style={{ width: '20%', height: 70 }} resizeMode='contain' source={require("../image/icons/logo.png")}></Image>
                        </View>
                        <View style={{ alignItems: 'center', alignContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>Login</Text>
                        </View>
                        {this.state.animating ?
                            <ActivityIndicator size="large" color="#0071BC" /> : null
                        }

                        <View style={{ height: 45,alignItems: 'center',flexDirection:'row', alignContent: 'center', marginTop: 20 }}>
                            <TextInput style={{
                                height: 45, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                fontSize: 16,
                                paddingLeft: 10,
                            }}
                                errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 2, borderRadius: 10 }}
                                errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                placeholder="Email" placeholderTextColor='#0071bc' validator="email"
                                onValidatorExecuted={(disabled) => this.setState({ disabled: !disabled })}
                                validatorExecutionDelay={100}
                                onChangeText={(email) => { this.setState({ email: email }) }}
                            />
                        </View>
                        <View style={{ alignItems: 'center',flexDirection:'row', height: 45, alignContent: 'center', marginTop: 20 }}>
                            <TextInput style={{
                                height: 45, width: '100%',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#b3b3b3',
                                marginBottom: 10,
                                fontSize: 16,
                                paddingLeft: 10,
                               
                            }}
                                secureTextEntry={true}
                                onChangeText={(password) => { this.setState({ disabled: false }); this.setState({ password: password }); }}
                                placeholder="Password" placeholderTextColor='#0071bc' />
                        </View>
                        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.navigate.push("Forget")}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, color: '#007186' }}>{I18n.t('LoginActivity.ForgetPwd')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Button disabled={this.state.disabled}style={{backgroundColor:'#0071bc'}} color="#0071bc" onPress={this.login.bind(this)} title={I18n.t('LoginActivity.login')} ></Button>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, alignItems: 'center', fontSize: 14, justifyContent: 'center' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#b3b3b3', lineHeight: 20 }}>{I18n.t('LoginActivity.noaccount')}</Text>
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

