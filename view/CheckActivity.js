import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Modal,multiline, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'
import { TextInput } from 'react-native-gesture-handler';
import GoodsItem from './GoodsItem';

export default class CheckActivity extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }

        //定义成员变量
        this.mail = "1058633117@qq.com";
        this.url = "http://192.168.1.104:8080/user/authMail.jhtml";
        this.jscode = "document.getElementById('form').action='" + this.url + "';document.getElementById('mail').value='" + this.mail + "';document.form.submit()";

    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <Text style={{ paddingLeft: 20, color: '#e95a24', fontFamily: 'NotoSansHans-Light' }}>Tip: An additional 20 USD courier fee is required</Text>
                    <View style={{ backgroundColor: '#efefef', height: 12, width: '100%' }}></View>
                    <View style={{ alignItems: 'center' }}>
                        <GoodsItem
                            id={"1"}
                            imgpath={require('../image/icons/DNA.png')}
                            title={"Biological age detection2.0"}
                            intro={"Saliva DNA Collection Kit"}
                            oldprice={"$198"}
                            newprice={"$99"}
                            unit={"/kit"}
                        />

                        <View style={{ backgroundColor: '#efefef', height: 12, width: '100%' }}></View>
                        <View style={{ width: '90%', height: 34, alignSelf: 'center', flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'center', lineHeight: 38, fontSize: 17, fontFamily: 'NotoSansHans-Light' }}>Used addresses(Drop-down)</Text>
                        </View>
                        <View style={{ backgroundColor: '#efefef', height: 12, width: '100%' }}></View>
                        <View style={{ width: '90%', alignSelf: 'center', }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 22, height: 45, lineHeight: 53, borderBottomWidth: 0.5, borderBottomColor: '#cfcfcf' }}>Delivery Address</Text>
                            <View style={{ height: 68, width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#cfcfcf' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, width: '29%', textAlign: 'center', }}>Full name：</Text>
                                <View style={{ height: 34, alignContent: 'center', width: '71%' }}>
                                    <TextInput style={{ paddingVertical: 0, height: 34, width: '100%', borderWidth: 1, borderColor: '#b3b3b3', paddingLeft: 10 }} />
                                </View>
                            </View>
                            <View style={{ height: 68, width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#cfcfcf' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, width: '29%', textAlign: 'center', }}>Phone：</Text>
                                <View style={{ height: 34, alignContent: 'center', width: '71%' }}>
                                    <TextInput style={{ paddingVertical: 0, height: 34, width: '100%', borderWidth: 1, borderColor: '#b3b3b3', paddingLeft: 10 }} />
                                </View>
                            </View>
                            <View style={{ height: 89, width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#cfcfcf' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, width: '29%', textAlign: 'center', }}>Detail Address：</Text>
                                <View style={{ height: 68, alignContent: 'center', width: '71%' }}>
                                    <TextInput keyboardType="numeric" multiline={true} style={{ paddingVertical: 0, height: 68, width: '100%', borderWidth: 1, borderColor: '#b3b3b3', paddingLeft: 10 }} />
                                </View>
                            </View>
                            <View style={{ height: 68, width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#cfcfcf' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, width: '29%', textAlign: 'center', }}>Postalcode/ZIP:</Text>
                                <View style={{ height: 34, alignContent: 'center', width: '71%' }}>
                                    <TextInput style={{ paddingVertical: 0, height: 34, width: '100%', borderWidth: 1, borderColor: '#b3b3b3', paddingLeft: 10 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', height: 76, justifyContent: 'space-between' }}>
                            <Text style={{ width: '60%', height: 56,lineHeight:61,fontWeight:'bold', fontFamily: 'NotoSansHans-Light', fontSize: 22, marginTop: 9, color: '#ffffff', textAlign: 'center',backgroundColor:'#37475d' }}>Total: $979</Text>
                            <Text style={{ width: '40%', height: 56,lineHeight:61, fontFamily: 'NotoSansHans-Light', fontSize: 22, color: '#ffffff',marginTop: 9, textAlign: 'center', backgroundColor: '#0071bc', }} >BUY</Text>
                        </View>

                    </View>
                </View >
            </ScrollView>
        );
    }
}

