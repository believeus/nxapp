import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import AesCrypto from 'react-native-aes-kit'
import { I18n } from '../locales/i18n'
import Session from '../storage/Session'
import md5 from "react-native-md5";
import data from '../appdata'

type Props = {};
export default class RasEncryptionActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("RasEncryptionActivity.name"),
            headerRight: null
        })
    }
    constructor(props) {
        super(props);
        this.state = { disabled: true, editable: true, privatekey: "" }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user })
            this.setState({ privatekey: user.privatekey })
        })
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <View style={{ width: "100%", height: 60 }}>
                        <Text style={{ width: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 24, fontWeight: "bold", height: "100%" }}>Secret key</Text>
                    </View>
                    {/* <TouchableOpacity>
                        <Button title="generation" onPress={() => {
                            const plaintxt = 'test';
                            const secretKey = '0102030405060708';
                            const iv = '1112131415161718';
                            //加密
                            AesCrypto.encrypt(plaintxt, secretKey, iv).then(cipher => {
                                console.log(cipher);// return a string type cipher
                                this.setState({ cipher });
                            }).catch(err => {
                                console.log(err);
                            });
                            //解密
                            AesCrypto.decrypt(this.state.cipher, secretKey, iv).then(plaintxt => {
                                console.log(plaintxt);// return a string type plaintxt
                            }).catch(err => {
                                console.log(err);
                            });
                        }} />
                    </TouchableOpacity> */}
                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <View style={{ width: "95%" }}>
                            <View>
                                <Text>1.Please set the secret key, which is used to encrypt and decrypt the user's health data.</Text>
                                <View style={{ width: "100%", height: 3 }}></View>
                                <Text>2.Once the private key is set, no changes are allowed.</Text>
                                <View style={{ width: "100%", height: 3 }}></View>
                                <Text>3.If the secret key is changed, all previously saved health data will be lost,New health data will be encrypted using a modified secret key, so it can only be set once.</Text>
                                <View style={{ width: "100%", height: 3 }}></View>
                                <Text>4.If the user logs out and logs in again, enter the same secret key again.</Text>
                                <View style={{ width: "100%", height: 3 }}></View>
                                <Text>5.Our company will not save the user's secret key to decrypt user data, so please save your only secret key.</Text>
                                <View style={{ width: "100%", height: 3 }}></View>
                                <Text>6.Every time health data is acquired, it will be encrypted and decrypted using the secret key on the user's mobile phone.</Text>
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
                                        paddingVertical: 0
                                    }}
                                        onChangeText={(privatekey) => {
                                            this.setState({ privatekey })
                                            privatekey.length == 16 ?
                                                this.setState({ disabled: false })
                                                :
                                                this.setState({ disabled: true })
                                        }
                                        }

                                        value={this.state.privatekey}
                                        placeholder="secret key:must be 16 characters" />
                                </View>
                                <View style={{ width: "25%", height: 40 }}>
                                    <Button disabled={this.state.disabled} onPress={() => {
                                        if (this.state.privatekey != null) {
                                            let id = this.state.user.id
                                            let uuid = md5.hex_md5(id).substring(0, 10)
                                            //秘钥长度必须和iv长度一致
                                            const iv = 'iiibelieveususus';
                                            //将加密的uuid发送到服务端
                                            AesCrypto.encrypt(uuid, this.state.privatekey, iv).then(cipher => {
                                                fetch(data.url + "user/updatekey.jhtml?id=" + id + "&uuid=" + cipher).then(user => user.json()).then((user) => {
                                                    user.privatekey = this.state.privatekey
                                                    Session.save("sessionuser", user)
                                                    const resetAction = StackActions.reset({
                                                        index: 0,
                                                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                                    });
                                                    this.props.navigation.dispatch(resetAction);
                                                })
                                            }).catch(err => {
                                                console.log(err);
                                            });

                                        }
                                    }}
                                        style={{ height: "100%", width: "100%" }} title="save" />
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