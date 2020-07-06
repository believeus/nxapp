import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Alert,Clipboard, Button, ScrollView, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n'
import Session from '../storage/Session'
import md5 from "react-native-md5"
import RNFS from 'react-native-fs'
import UUIDGenerator from 'react-native-uuid-generator'
import { encrypt, decrypt } from 'react-native-simple-encryption'
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
            btnSaveDisabled: false,
            btnCopyDisabled:false,
            editable: true,
            privatekey: "",
            btnPrivatekeyDisabled: false,
            animating: false
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user })
            if (user.privatekey) { this.setState({ btnPrivatekeyDisabled: true }) }
            if (user.publickey) { this.setState({ btnPublickeyDisabled: true }) }
            if (user.privatekey && user.publickey) {
               // this.setState({ btnSaveDisabled: true })
                this.setState({ publickey: user.publickey })
                this.setState({ privatekey: decrypt(user.publickey, user.uuid) })
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
                        <View style={{ width: "100%", height: 20 }}></View>
                            <View><Text style={{ fontWeight: "bold" }}>{I18n.t('RasEncryptionActivity.privatekey')}</Text></View>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "60%" }}>
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
                                        defaultValue={this.state.publickey}
                                        editable={true}
                                        onChangeText={(publickey) => {
                                            this.setState({ btnPublickeyDisabled: publickey.length == 0 ? false : true })
                                            this.setState({ publickey })
                                            if (this.state.privatekey && this.state.privatekey.length != 0) {
                                                if (publickey.length != 0) {
                                                    this.setState({ btnSaveDisabled: false })
                                                    this.setState({btnCopyDisabled:false})
                                                   
                                                } else {
                                                    this.setState({ btnSaveDisabled: true })
                                                    this.setState({btnCopyDisabled:true})
                                                }
                                            } else {
                                                this.setState({ btnSaveDisabled: true })
                                                this.setState({btnCopyDisabled:true})
                                            }
                                        }}
                                    />
                                </View>
                                <View style={{ width: "40%", height: 40 }}>
                                    {/* 将私钥发送到邮箱 */}
                                    <Button disabled={this.state.btnPublickeyDisabled} onPress={() => {
                                        UUIDGenerator.getRandomUUID().then((uuid) => {
                                            let publickey = uuid.substring(0, 18).toUpperCase()
                                            this.setState({ publickey })
                                            this.setState({ btnSaveDisabled: false })
                                            this.setState({btnCopyDisabled:false})
                                        });
                                    }}
                                        style={{ height: "100%", width: "100%" }} title={I18n.t('RasEncryptionActivity.generate')} />
                                </View>
                            </View>
                            <View><Text style={{ fontWeight: "bold" }}>{I18n.t('RasEncryptionActivity.publickey')}</Text></View>
                            <View style={{ width: "100%", flexDirection: "row" }}>
                                <View style={{ width: "60%" }}>
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
                                            this.setState({ btnPrivatekeyDisabled: privatekey.length == 0 ? false : true })
                                            this.setState({ privatekey })
                                            if (this.state.publickey && this.state.publickey.length != 0) {
                                                if (privatekey.length != 0) {
                                                    this.setState({ btnSaveDisabled: false })
                                                    this.setState({btnCopyDisabled:false})
                                                } else {
                                                    this.setState({ btnSaveDisabled: true })
                                                    this.setState({btnCopyDisabled:true})
                                                }
                                            } else {
                                                this.setState({ btnSaveDisabled: true })
                                                this.setState({btnCopyDisabled:true})
                                            }
                                        }}
                                    />
                                </View>
                                <View style={{ width: "40%", height: 40 }}>
                                    {/* 将私钥发送到邮箱 */}
                                    <Button disabled={this.state.btnPrivatekeyDisabled} onPress={() => {
                                        UUIDGenerator.getRandomUUID().then((uuid) => {
                                            let privatekey = uuid.substring(0, 7).toUpperCase()
                                            this.setState({ privatekey })
                                            this.setState({ btnSaveDisabled: false })
                                            this.setState({btnCopyDisabled:false})
                                        });
                                    }}
                                        style={{ height: "100%", width: "100%" }} title={I18n.t('RasEncryptionActivity.generate')} />
                                </View>
                            </View>
                            <View style={{ width: "100%",height:56, flexDirection: "row" }}>
                             <View style={{ width: "40%", height: 45,alignItems:"flex-start" }}>
                                    <Button disabled={this.state.btnCopyDisabled}
                                    title={I18n.t("RasEncryptionActivity.copykeys")}
                                        onPress={() => {
                                        // this.state({btnCopyDisabled:true})
                                        let keys=this.state.publickey+"\n"+this.state.privatekey
                                        Clipboard.setString(keys);
                                        Alert.alert(I18n.t("RasEncryptionActivity.titlemsg"),I18n.t("RasEncryptionActivity.meg"))
                                    }}
                                    style={{ height: "80%", textAlignVertical: "center" }} />
                                </View>
                                <View style={{ width: "30%", height: 45 }}>
                                    {/* 将私钥和公钥保存到本地 */}
                                    <Button disabled={this.state.btnSaveDisabled} onPress={() => {
                                        let id = this.state.user.id
                                        this.setState({ animating: true })
                                        this.setState({ btnPrivatekeyDisabled: true })
                                        this.setState({ btnPublickeyDisabled: true })
                                        this.setState({ btnSaveDisabled: true })
                                        this.setState({btnCopyDisabled:true})
                                        //用public key加密private key生成加密的priavekey
                                        let cipher = encrypt(this.state.publickey, this.state.privatekey)
                                        fetch(data.url + "user/updatekey.jhtml?id=" + id + "&uuid=" + cipher).then(user => user.json()).then((user) => {
                                            let path = RNFS.DocumentDirectoryPath + '/' + md5.hex_md5(user.mail) + '.txt'
                                            user.privatekey = this.state.privatekey
                                            user.publickey = this.state.publickey
                                            Session.save("sessionuser", user)
                                            this.setState({ animating: false })
                                            //先将之前的文件删除
                                            //将私钥和公钥写入文件中
                                            RNFS.writeFile(path, this.state.publickey + ":" + this.state.privatekey, 'utf8')
                                                .then((success) => {
                                                    Alert.alert("Message", I18n.t("RasEncryptionActivity.success"), [{
                                                        text: "OK", onPress: () => {
                                                            const resetAction = StackActions.reset({
                                                                index: 0,
                                                                actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                                            });
                                                            this.props.navigation.dispatch(resetAction);
                                                        }
                                                    }])
                                                })
                                                .catch((err) => {
                                                    Alert.alert("Message", err)
                                                });
                                        })
                                    }}
                                        style={{ height: "100%", width: "100%" }} title={I18n.t('RasEncryptionActivity.save')} />
                                </View>
                               
                               
                            <View style={{ width: "30%", alignItems: "flex-end" }}>
                                    <View style={{ width: "90%", height: 45 }}>
                                        {this.state.animating ? <ActivityIndicator
                                            animating={true}
                                            style={{ height: 45 }}
                                            size="large" /> : null}
                                    </View>
                             </View>
                         </View>
                            <View style={{ flexDirection: 'row',marginBottom:12 }}>
                                <Text style={{ width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>1.</Text>
                                <Text style={{ width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('RasEncryptionActivity.press')}<Text style={{ color: '#0071bc', fontStyle:'italic', fontSize: 14 }}>{I18n.t('RasEncryptionActivity.press2')} </Text> </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:12  }}>
                                <Text style={{ width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>2.</Text>
                                <Text style={{ width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('RasEncryptionActivity.setkey')} <Text style={{ color: '#0071bc', fontStyle:'italic' }}> {I18n.t('RasEncryptionActivity.setkey2')}</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:12  }}>
                                <Text style={{ width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>3.</Text>
                                <Text style={{ width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18, color: '#0071bc',fontStyle:'italic' }}> {I18n.t('RasEncryptionActivity.unique')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:12  }}>
                                <Text style={{ width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>4.</Text>
                                <Text style={{ width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}> {I18n.t('RasEncryptionActivity.savekey')}<Text onPress={() => this.navigate.push("DataSecurity")} style={{ fontSize: 14, fontStyle: 'italic', color: '#0071bc', textDecorationLine: 'underline' }}>{I18n.t('RasEncryptionActivity.security')}</Text> {I18n.t('RasEncryptionActivity.savekey2')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:12  }}>
                                <Text style={{ width: '4%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}>5.</Text>
                                <Text style={{ width: '95%', fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 18 }}> {I18n.t('RasEncryptionActivity.freestate')} </Text>
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