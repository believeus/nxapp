import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'
import { TextInput } from 'react-native-gesture-handler';

export default class MallActivity extends Component<Props> {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
        this.min = this.min.bind(this)
        this.state = {
            display: false,
            size: 1,
            check: false,
        }


        //定义成员变量
        this.mail = "1058633117@qq.com";
        this.url = "http://192.168.1.104:8080/user/authMail.jhtml";
        this.jscode = "document.getElementById('form').action='" + this.url + "';document.getElementById('mail').value='" + this.mail + "';document.form.submit()";

    }


    add() {
        this.setState({ size: this.state.size + 1 })
    }
    min() {
        if (this.state.size == 1) { return }
        this.setState({ size: this.state.size - 1 })
    }
    render() {
        return (
            <View>

                {/*  <Text>Shopping</Text>
                <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                    <WebView source={Platform.OS === 'ios' ? require('./payment.html') : { uri: "file:///android_asset/payment.html" }} domStorageEnabled={true} injectedJavaScript={this.jscode} />
                    <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                       关闭页面 
                        <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                            <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="取消支付" onPress={() => { { this.setState({ display: false }) } }} />
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TextInput></TextInput>
                <TouchableOpacity><Button title="支付" onPress={() => this.setState({ display: true })}></Button></TouchableOpacity>
                 */}
                <Text style={{ paddingLeft: 20, paddingTop: 12, fontFamily: 'NotoSansHans-Light', fontSize: 26, backgroundColor: '#ffffff' }}>Health Market</Text>
                <Text style={{ paddingLeft: 20, color: '#e95a24', backgroundColor: '#efefef', fontFamily: 'NotoSansHans-Light' }}>Tip: An additional 20 USD courier fee is required</Text>

                <View style={{ height: 112 }}>
                    <View style={{ width: '90%', alignSelf: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap' }}>
                        <View style={{ width: '7%' }}>
                            <TouchableOpacity onPress={() => { this.state.check == true ? this.setState({ check: false }) : this.setState({ check: true }) }}>
                                <Image style={{ width: '100%', height: 23 }} source={this.state.check == false ?
                                    require('../image/icons/tick.png') : require('../image/icons/tick-ok.png')} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ width: '26%', }}>
                            <Image style={{ width: 67, height: 67, alignSelf: 'center' }} source={require('../image/icons/DNA.png')} resizeMode='center' />
                        </View>
                        <View style={{ width: '43%' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', height: 34, width: 200, color: '#0071bc' }}>Biological age detection2.0</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', height: 23, width: 178, fontSize: 12, lineHeight: 26 }}>Saliva DNA Collection Kit</Text>
                            <View style={{ width: 78, height: 23, flexDirection: 'row' }}>
                                <Text style={{ height: 23, fontFamily: 'NotoSansHans-Light', lineHeight: 31, textAlign: 'center', textDecorationLine: 'line-through' }}>$198</Text>
                                <Text style={{ height: 23, fontFamily: 'NotoSansHans-Light', lineHeight: 28, textAlign: 'center', justifyContent: 'center', color: '#f15a24', fontSize: 18 }}>  &nbsp;&nbsp;$99</Text>
                            </View>
                        </View>
                        <View style={{ width: '29%', marginTop: 56 }}>
                            <View style={{ height: 36, width: 78, alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.min.bind(this)}>
                                    <Image style={{ width: 24, height: 24, alignSelf: 'center', marginTop: 5 }} source={require('../image/icons/min.png')} resizeMode='contain' />
                                </TouchableOpacity>
                                <Text style={{ alignSelf: 'center', fontFamily: 'NotoSansHans-Light', fontWeight: '700', textAlign: 'center' }}>{this.state.size}</Text>
                                <TouchableOpacity onPress={this.add.bind(this)}>
                                    <Image style={{ width: 24, height: 24, alignSelf: 'center', marginTop: 5 }} source={require('../image/icons/plus.png')} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#efefef', height: 23, width: '100%' }}></View>
            </View >

        );
    }
}

