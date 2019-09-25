import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'
import { TextInput } from 'react-native-gesture-handler';
import GoodsItem from './GoodsItem';
export default class MallActivity extends Component<Props> {

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
    _navigate() {
        this.props.navigator.push({
            name: 'Confirm',
            component: ComponentName,
            passProps: {
                text: 'hhh'

            }
        })
    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <Text style={{ paddingLeft: 20, paddingTop: 12, fontFamily: 'NotoSansHans-Light', fontSize: 26, backgroundColor: '#ffffff' }}>Health Market</Text>
                    <Text style={{ paddingLeft: 20, color: '#e95a24', backgroundColor: '#efefef', fontFamily: 'NotoSansHans-Light' }}>Tip: An additional 20 USD courier fee is required</Text>
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
                        <GoodsItem
                            id={"2"}
                            imgpath={require('../image/icons/SAM-e.png')}
                            title={"SAM-e"}
                            intro={"S-adenosine Supplement"}
                            oldprice={"$88"}
                            newprice={"$60"}
                            unit={"/box"} />
                        <View style={{ backgroundColor: '#efefef', height: 12, width: '100%' }}></View>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '90%' }}>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 18, lineHeight: 24, marginTop: 10 }}>Epi Series Products </Text>
                                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#e95a24' }}>This series of products have been sold in Hong Kong and Macau. For purchase, please contact info@hkgepitherapeutics.com.</Text>
                            </View>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ width: "100%",height:56}}  onPress={() => { navigate.push("MorePro") }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ backgroundColor: '#efefef', height: 68, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, width: 128, textAlign: 'center', paddingLeft: 10 }}>Promote code：</Text>
                            <View style={{ height: 34, alignContent: 'center', width: 167 }}>
                                <TextInput style={{ paddingVertical: 0, height: 34, borderRadius: 5, width: '100%', borderWidth: 1, borderColor: '#b3b3b3', paddingLeft: 10 }} />
                            </View>
                        </View>
                        <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row', height: 76, justifyContent: 'space-between' }}>
                            <Text style={{ width: '50%', height: 56, fontFamily: 'NotoSansHans-Light', fontSize: 22, marginTop: 9, marginLeft: 9, textAlign: 'left' }}>Total: $979</Text>
                            <TouchableOpacity  onPress={() => { navigate.push("Check") }}>
                            <Text style={{ width: 123, height: 56, fontFamily: 'NotoSansHans-Light', fontSize: 22, marginTop: 9, textAlign: 'center', backgroundColor: '#f15a24', color: '#ffffff', }}  >Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            </ScrollView>
        );
    }
}

