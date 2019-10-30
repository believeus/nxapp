import React, { Component } from 'react';
import { I18n } from '../locales/i18n'
import data from '../appdata'
import Input from "react-native-input-validation"
import { Platform,StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';


type Props = {};
export default class ForgetActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ForgetActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { disabled: false }
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View>

                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ height: 50 }}></View>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22 }}>{I18n.t('ForgetActivity.title')}</Text>
                        </View>
                        <View style={{ height: 40, alignItems: 'flex-start', fontSize: 14, justifyContent: 'flex-start' }} >
                            <Text style={{ fontFamily: 'NotoSansHans-Light', color: '#f05a25', lineHeight: 20 }}>{I18n.t('ForgetActivity.link')}</Text>
                        </View>
                        <View style={{ height: 70, marginTop: 20, width: "100%" }}>
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
                                onValidatorExecuted={(isValid) => { this.setState({ disabled: !isValid }) }}
                                validatorExecutionDelay={100}
                                onChangeText={(email) => { this.setState({ email: email }) }}
                            />
                        </View>

                        <View>
                            <TouchableOpacity >
                                <Button title={I18n.t("ForgetActivity.title")} disabled={this.state.disabled} onPress={() => {
                                    if (!this.state.email) { this.setState({ disabled: true }); return }
                                    fetch(data.url + "user/sendpaswd.jhtml?email=" + this.state.email).then((data) => { data.text() }).then((data) => {
                                        Alert.alert("The reset password link has been\n sent to your designated mailbox")
                                    })
                                }} style={{ height: 45, borderRadius: 50 }} />
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

