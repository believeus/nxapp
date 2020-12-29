import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class AgeAccelerateActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("AgeAccelerateActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            inputValue1: "",
            inputValue2: "",
        }
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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 23 ,height:500}}>
                    <Text style={{ fontSize: 18,fontWeight:'bold', fontFamily: 'FontAwesome', height: 67, textAlign: 'center' }}>{I18n.t("AgeAccelerateActivity.accecalcul")}</Text>
                    <Text style={{
                        fontFamily: 'FontAwesome',
                        fontSize: 14,
                        height: 34,
                    }}>{I18n.t("AgeAccelerateActivity.enterchro")}</Text>
                    <TextInput style={{
                        width: "89%",
                        height: 34,
                        fontSize: 23,
                        textAlign: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingVertical: 0,
                        borderColor: this.state.inputValue2 =="" ? "#adadad" : "#0071bc",
                    }}
                        keyboardType='numeric'
                        onChangeText={(text1) => {
                            const realage = text1.replace(/[^0-9.]/g, '');
                            //可以打印看看是否过滤掉了非数字
                            //console.log(newText)
                            this.setState({ inputValue1: realage })
                        }}
                        value={this.state.inputValue1}

                    />

                    <View style={{ height: 23, width: '100%' }}></View>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'FontAwesome',
                        height: 34,
                        
                    }}>{I18n.t("AgeAccelerateActivity.enterepi")}</Text>
                    <TextInput style={{
                        width: "89%",
                        height: 34,
                        fontSize: 23,
                        textAlign: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingVertical: 0,
                        borderColor: this.state.inputValue2 =="" ? "#adadad" : "#0071bc",
                    }}
                        // placeholder="Epigenetic age"
                        keyboardType='numeric'
                        onChangeText={(text2) => {
                            const epiage = text2.replace(/[^0-9.]/g, '');
                            //可以打印看看是否过滤掉了非数字
                            //console.log(newText)
                            this.setState({ inputValue2: epiage })
                        }}
                        value={this.state.inputValue2}
                    />
                    <View style={{ height: 56, width: '100%' }}></View>

                    <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'FontAwesome', height: 45, textAlign: 'center' }}>{I18n.t("AgeAccelerateActivity.youraccis")}</Text>
                    {this.state.inputValue2 == "" || this.state.inputValue1 == "" ?
                        null
                        :
                        <View style={{height:56,fontSize:'bold', width:'45%', alignItems:'center',alignSelf:'center', backgroundColor:'#2F6FB6',borderRadius:5}}>
                            <Text style={{ fontSize: 45, fontWeight: '600', fontFamily: 'FontAwesome', lineHeight: 56,color:'#ffffff', textAlignVertical:'center' }}> {(this.state.inputValue2 - (0.902 * this.state.inputValue1 + 4.564)).toFixed(2)}</Text>
                        </View>
                    }

                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView >
        );
    }
}

