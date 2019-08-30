import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button,Modal,TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview'


type Props = {};
export default class MallActivity extends Component<Props> {
    
   
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }
    }
   
    render() {
        return (
            <View>
                <Text>Shopping</Text>
                <Modal animationType='slide'  transparent={false}  visible={this.state.display}  onRequestClose={() => {this.setState({display:true })}}>
                    <WebView source={Platform.OS === 'ios' ? require('./payment.html') : {uri: "file:///android_asset/payment.html"}} domStorageEnabled={true}  injectedJavaScript={"document.getElementById('mail').value='123';document.form.submit()"}/>
                    <View style={{width:"100%",height:35,backgroundColor:"#0071BC"}}>
                            {/* 关闭页面 */}
                            <TouchableOpacity style={{width:"100%",height:"100%"}}>
                               <Button style={{width:"100%",height:"100%",backgroundColor:"#0071BC"}} title="取消支付"  onPress={() => {{this.setState({ display:false})}}}/>
                            </TouchableOpacity>
                    </View>        
                </Modal>
                <TouchableOpacity><Button title="支付" onPress={() => this.setState({display:true})}></Button></TouchableOpacity>
            </View>

        );
    }
}

