import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';
import Session from '../storage/Session';
export default class ConsentActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ConsentActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            dispaly: true,
        }
    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ dispaly: false })
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', }}>
                    <Text style={{ height: 34, width: '100%', fontSize: 14, color: '#ffffff', textAlign: 'center', lineHeight: 34, borderRadius: 30, backgroundColor: '#0071bc', fontFamily: 'FontAwesome' }}></Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>{I18n.t('ConsentActivity.user')}</Text>
                    <Text style={{ height: 66, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}><Text style={{ fontStyle: 'italic' }}></Text></Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>About  <Text style={{ fontStyle: 'italic' }}> EPIAGING APP</Text></Text>
                    <Text style={{ height: 189, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>EPIAGING APP is  about to save your<Text style={{ fontStyle: 'italic' }}> "blinded"</Text> personal medical data on the EpiAging Mobile App and the data analysis engine in the "cloud", which requires your information and consent. Your identity is blinded and you will be provided with an ID number. Your
				personal identity will not be stored in the mobile app or the server. Once you download the app you will be assigned an ID that will allow you to retrieve your data and receive health reports , but your identity will remain unknown either on the app or the "cloud" analysis engine.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}><Text style={{ fontStyle: 'italic' }}>EPIAGING APP </Text> Purpose</Text>
                    <Text style={{ height: 309, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}><Text style={{ fontStyle: 'italic' }}>EPIAGING APP </Text> designed to help you to harness the power of your epigenome for healthy aging by providing you with a DNA methylation-based assessment of your true biological age and by providing you links and recommendations of reputable national
				medical societies on life style changes that can improve your health. It is your decision what changes to make.However, we are asking you to share with us<Text style={{ fontStyle: 'italic' }}> "anonymously"</Text> the changes that you have made using the simple entry buttons in the app, these data will be streamed to a machine learning engine that will analyze your life style changes and provide you with
				a periodical report. Testing your biological age periodically using our  DNA methylation test  will help you assess progress. We ask you to share the changes that you have made with others and thus become a partner in a joint effort to improve your and other people health.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>How to enrich health data</Text>
                    <Text style={{ height: 228, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>You are not obligated to answer the questions on this app and it is your decision what information to provide. Similarly, it is your decision to make or avoid life style changes and to attend or ignore the recommendations of the different medical associations
				that we are providing you with. However, the richer the data, the better and more helpful the analysis will be to you and others in the<Text style={{ fontStyle: 'italic' }}> "epiaging app community". </Text> By analyzing data streaming from many other app users with “machine learning”, we will derive combinations of life style
				alterations that may have a positive impact on reducing the speed of aging.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>Anonymous data sharing</Text>
                    <Text style={{ height: 309, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>We believe that good health requires partnership of many people sharing their experiences and learning from each other rather than a unidirectional flow of instructions from the “learned” health provider to the “patient”. We know that medical science
				is imperfect, and its progress involves trial and error.We will learn together as “partners” by sharing experiences, assessing progress and using the best of machine learning technology to analyze the data that you provide and get feedbacks
				that will guide further improvement. By learning from many people that will be engaged as you are, we will be able to work together on improving our and other people health. We understand that it is a strict requirement that your data remains
				absolutely "blinded" and that your personal identity remains anonymous. Only if these rules of anonymity are strictly adhered to, we will be able to freely participate in this grand partnership.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ height: 33, width: '100%', fontSize: 14, paddingTop: 12, color: '#0071bc', lineHeight: 17, fontFamily: 'NotoSansHans-Medium' }}>Data security</Text>
                    <Text style={{ height: 199, width: '100%', fontSize: 12, paddingTop: 12, lineHeight: 17, fontFamily: 'FontAwesome' }}>In accordance with the Data Protection Regulations with regards to data protection, you have the right to request access to and rectification or erasure of your personal data or restriction of processing concerning your data or to object
				to processing as well as the right to data portability. You can exercise this right by contacting (info@hkgepitherapeutics.com).Your name and identity will be encrypted and firewalled. Following your signature you will receive a blinded ID that will allow you to provide data and remain anonymous to the system.</Text>
                </View>
                {this.state.dispaly == true ?
                    <TouchableOpacity onPress={() => this.navigate.push("Login")}>
                        <Text style={{ height: 34, width: '34%', alignSelf: 'center', borderRadius: 10, backgroundColor: "#0071bc", fontFamily: 'NotoSansHans-Light', color: '#FFFFFF', fontSize: 22, textAlign: 'center', lineHeight: 47 }}>Agree</Text>
                    </TouchableOpacity>
                    :
                    null
                }
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, marginTop: 20, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}

