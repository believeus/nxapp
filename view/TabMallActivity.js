import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button,Modal,TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview'
import { TextInput } from 'react-native-gesture-handler';


type Props = {};
export default class MallActivity extends Component<Props> {
    
   
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }
        //定义成员变量
        this.mail="1058633117@qq.com";
        this.url="http://192.168.1.104:8080/user/authMail.jhtml";
        this.jscode="document.getElementById('form').action='"+this.url+"';document.getElementById('mail').value='"+this.mail+"';document.form.submit()";
       
    }
   
    render() {
        return (
            <View>
                <Text>Shopping</Text>
                <Modal animationType='slide'  transparent={false}  visible={this.state.display}  onRequestClose={() => {this.setState({display:true })}}>
                    <WebView source={Platform.OS === 'ios' ? require('./payment.html') : {uri: "file:///android_asset/payment.html"}} domStorageEnabled={true}  injectedJavaScript={this.jscode}/>
                    <View style={{width:"100%",height:35,backgroundColor:"#0071BC"}}>
                            {/* 关闭页面 */}
                            <TouchableOpacity style={{width:"100%",height:"100%"}}>
                               <Button style={{width:"100%",height:"100%",backgroundColor:"#0071BC"}} title="取消支付"  onPress={() => {{this.setState({ display:false})}}}/>
                            </TouchableOpacity>
                    </View>        
                </Modal>
                <TextInput></TextInput>
                <TouchableOpacity><Button title="支付" onPress={() => this.setState({display:true})}></Button></TouchableOpacity>
            </View>

        );
    }
}

