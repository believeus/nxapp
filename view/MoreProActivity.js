import React, { Component } from 'react';
import { Platform,StatusBar, StyleSheet, Button, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
export default class MoreProActivity extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }

    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
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
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 20, lineHeight: 24, marginTop: 10, textAlign: 'center' }}>Epi Series Products </Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, color: '#e95a24' }}>This series of products have been sold in Hong Kong and Macau. For purchase, please contact info@hkgepitherapeutics.com</Text>
                        </View>

                    </View>
                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: '15%', height: 123, justifyContent: 'center', }} source={require('../image/enpic/pro1.jpg')} resizeMode='contain' />
                        <View style={{ width: '85%', height: 123, paddingLeft: 6 }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, marginTop: 10 }}>EPILIVER (PATENT PENDING) </Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, }}>
                                About obtaining a test for early detection of liver cancer.
                                We will need 5 mL of blood and a doctor's requisition to perform this test.
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: '15%', height: 123, justifyContent: 'center', }} source={require('../image/enpic/pro2.jpeg')} resizeMode='contain' />
                        <View style={{ width: '85%', height: 123, paddingLeft: 6 }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, marginTop: 10 }}>EPIBREAST (PATENT PENDING)</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, }}>
                            About obtaining a test for early detection of breast cancer.
                                We will need 5 mL of blood and a doctor's requisition to perform this test.
                            
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: '15%', height: 123, justifyContent: 'center', }} source={require('../image/enpic/pro3.jpeg')} resizeMode='contain' />
                        <View style={{ width: '85%', height: 123, paddingLeft: 6 }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, marginTop: 10 }}>EPISOCIALPSYCH</Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, }}>
                            Inquire about DNA methylation analysis of the candidate genes associated with social behavior and psychiatry (BDNF, OXTR, NR3C1, FKBP5, SLC64A, IL6) for clinical studies and clinical researcher provided as a service for free.
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: '15%', height: 123, justifyContent: 'center', }} source={require('../image/enpic/pro4.jpeg')} resizeMode='contain' />
                        <View style={{ width: '85%', height: 123, paddingLeft: 6 }}>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 18, marginTop: 10 }}></Text>
                            <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 14, }}>
                            TARGETED SEQUENCING FOR DNA METHYLATION ANALYSIS
                            
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: "100%", height: 34 }}>
                        <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="去支付" onPress={() => { navigate.push("Payment") }} />
                    </TouchableOpacity>
                </View >
            </ScrollView>
        );
    }
}

