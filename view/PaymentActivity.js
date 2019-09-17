import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'
import data from '../appdata'
import Session from '../storage/Session';

type Props = {};
export default class PaymentActivity extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            jscode: ""
        }
    }

    
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
           // this.setState({jscode:"document.getElementById('form').action='" + this.url + "?userid="+user.id+";document.getElementById('form').submit()"});
            this.setState({jscode:"document.getElementById('userid').value=" + user.id + ";document.getElementById('form').submit()"});
        });
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (

            <ScrollView style={styles.container}>
                <View>
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView source={Platform.OS === 'ios' ? require('./payment.html') : { uri: "file:///android_asset/payment.html" }} 
                                  domStorageEnabled={true} 
                                  injectedJavaScript={this.state.jscode} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="取消支付" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity>
                        <TouchableOpacity><Button title="支付" onPress={() => this.setState({ display: true })}></Button></TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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