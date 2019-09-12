import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
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
                        unit={"/box"}/>
                </View>
            </View >

        );
    }
}

