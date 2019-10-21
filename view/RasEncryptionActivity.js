import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Alert, Button, ScrollView, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import AesCrypto from 'react-native-aes-kit'
import { I18n } from '../locales/i18n'
import Session from '../storage/Session'
import md5 from "react-native-md5"
import UUIDGenerator from 'react-native-uuid-generator'
import data from '../appdata'

export default class RasEncryptionActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("RasEncryptionActivity.title"),
            headerRight: null
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            btnSaveDisabled: true,
            editable: true,
            privatekey: "",
            btnPrivatekeyDisabled: false,
            animating: false
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user })
            this.setState({ privatekey: user.privatekey })
            if (this.state.privatekey) {
                this.setState({ btnSaveDisabled: true })
                this.setState({ btnPrivatekeyDisabled: true })
            }
        })
    }

    render() {
        this.navigate = this.props.navigation;
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
                    <View style={{ width: "100%", height: 60 }}>
                        <Text style={{ width: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 24, fontWeight: "bold", height: "100%" }}>Private key</Text>
                    </View>
                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <View style={{ width: "95%" }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 88, width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>1.</Text>
                                    <Text style={{ height: 88, width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>Please press the "GENERATE PRIVATE KEY" button to generate your Unique Private key. Then, by pressing "SAVE",<Text style={{color:'#0071bc',fontSize:16}}>the Unique Private key will be sent to your registered mailbox.</Text> </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 107, width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>2.</Text>
                                    <Text style={{ height: 107, width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>Once the private key is set, no changes are allowed. If the private key is changed, all previously saved healthy data will be lost. New healthy data will be encrypted using a new private key,<Text style={{ color: '#0071bc' }}> and it can only be set once</Text>.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 56, width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>3.</Text>
                                    <Text style={{ height: 56, width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18,color:'#0071bc' }}>The Unique Private key is required to enter again if the user logs in again after log out.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 79, width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>4.</Text>
                                    <Text style={{ height: 79, width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>We will not have or save user's private key to decrypt user data according to our <Text onPress={() => this.navigate.push("DataSecurity")} style={{ fontStyle: 'italic', color: '#0071bc', textDecorationLine: 'underline' }}>Data Security Statement</Text> , please save your only private key.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>5.</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>When you are not logged into the system, your healthy information and personal user information will be in a 'free' state, and no one can find your related information.</Text>
                                </View>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", flexDirection: "row" }}>

                                <View style={{ width: "75%" }}>
                                    <TextInput style={{
                                        width: '100%',
                                        borderRadius: 0,
                                        height: 35,
                                        borderWidth: 1,
                                        borderColor: '#b3b3b3',
                                        marginBottom: 10,
                                        fontSize: 16,
                                        paddingVertical: 0,
                                        textAlign: "center"

                                    }}
                                        defaultValue={this.state.privatekey}
                                        editable={true}
                                        onChangeText={(privatekey) => {
                                            this.setState({ btnSaveDisabled: false })
                                            this.setState({ privatekey })
                                        }}
                                    />
                                </View>
                                <View style={{ width: "25%", height: 40 }}>
                                    <Button disabled={this.state.btnSaveDisabled} onPress={() => {
                                        let uuid = md5.hex_md5(this.state.user.mail).substring(0, 8)
                                        let id = this.state.user.id
                                        this.setState({ animating: true })
                                        this.setState({ btnPrivatekeyDisabled: true })
                                        this.setState({ btnSaveDisabled: true })
                                        let iv = "1010101010101010"
                                        //将加密的uuid发送到服务端
                                        AesCrypto.encrypt(uuid, this.state.privatekey, iv).then(cipher => {
                                            console.info(data.url + "user/updatekey.jhtml?id=" + id + "&uuid=" + cipher + "&privatekey=" + this.state.privatekey)
                                            if (/[+]/.test(cipher)) {
                                                this.setState({ btnPrivatekeyDisabled: false })
                                                this.setState({ btnSaveDisabled: false })
                                                this.setState({ animating: false })
                                                Alert.alert("Message", "Private key generation failed, please regenerate")
                                                return
                                            }
                                            fetch(data.url + "user/updatekey.jhtml?id=" + id + "&uuid=" + cipher + "&privatekey=" + this.state.privatekey).then(user => user.json()).then((user) => {
                                                user.privatekey = this.state.privatekey
                                                Session.save("sessionuser", user)
                                                this.setState({ animating: false })
                                                Alert.alert("Success", "The private key has been sent to your mailbox", [{
                                                    text: "OK", onPress: () => {
                                                        const resetAction = StackActions.reset({
                                                            index: 0,
                                                            actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                                        });
                                                        this.props.navigation.dispatch(resetAction);
                                                    }
                                                }])

                                            })
                                        }).catch(err => {
                                            console.log(err);
                                        });



                                    }}
                                        style={{ height: "100%", width: "100%" }} title="save" />
                                </View>
                            </View>
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <View style={{ width: "90%", height: 40 }}>
                                    <Button disabled={this.state.btnPrivatekeyDisabled} title="Generate private key" onPress={() => {
                                        UUIDGenerator.getRandomUUID().then((uuid) => {
                                            let privatekey = uuid.substring(0, 16).toUpperCase()
                                            this.setState({ privatekey })
                                            this.setState({ btnSaveDisabled: false })
                                        });
                                    }} />
                                </View>
                            </View>
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <View style={{ width: "90%", height: 100 }}>
                                    {this.state.animating ? <ActivityIndicator
                                        animating={true}
                                        style={{ height: 80 }}
                                        size="large" /> : null}
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})