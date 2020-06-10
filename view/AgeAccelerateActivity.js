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
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 45 }}>
                    <Text style={{ fontSize: 23,fontWeight:'bold', fontFamily: 'FontAwesome', height: 67, textAlign: 'center' }}>Age acceleration calculator</Text>
                    <Text style={{ fontFamily: 'FontAwesome', fontSize: 18, height: 34 }}>Please enter your Chronological age</Text>
                    <TextInput style={{
                        width: "45%",
                        height: 34,
                        fontSize: 23,
                        fontFamily: 'FontAwesome',
                        textAlign: 'center',
                        borderColor: '#0071BC',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingVertical: 0
                    }}
                        keyboardType='numeric'
                        onChangeText={(text1) => {
                            const realage = text1.replace(/[^\d]+/, '');
                            //可以打印看看是否过滤掉了非数字
                            //console.log(newText)
                            this.setState({ inputValue1: realage })
                        }}
                        value={this.state.inputValue1}

                    />

                    <View style={{ height: 23, width: '100%' }}></View>
                    <Text style={{ fontSize: 18, fontFamily: 'FontAwesome', height: 34 }}>Please enter your Epigenetic age</Text>
                    <TextInput style={{
                        width: "45%",
                        height: 34,
                        fontSize: 23,
                        borderColor: '#0071BC',
                        textAlign: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingVertical: 0
                    }}
                        // placeholder="Epigenetic age"
                        placeholderTextColor='#0071bc'
                        keyboardType='numeric'
                        onChangeText={(text2) => {
                            const epiage = text2.replace(/[^\d]+/, '');
                            //可以打印看看是否过滤掉了非数字
                            //console.log(newText)
                            this.setState({ inputValue2: epiage })
                        }}
                        value={this.state.inputValue2}
                    />
                    <View style={{ height: 56, width: '100%' }}></View>

                    <Text style={{ fontSize: 23, fontWeight: '600', fontFamily: 'FontAwesome', height: 45, textAlign: 'center' }}>Your age acceleration is:</Text>
                    {this.state.inputValue2 == "" || this.state.inputValue1 == "" ?
                        null
                        :
                        <View style={{height:56,width:'45%', alignItems:'center',alignSelf:'center', backgroundColor:'#2F6FB6',borderRadius:5}}>
                            <Text style={{ fontSize: 45, fontWeight: '600', fontFamily: 'FontAwesome', lineHeight: 67,color:'#ffffff', textAlign:'center' }}> {Math.abs(this.state.inputValue2 - (0.902 * this.state.inputValue1 + 4.564)).toFixed(2)}</Text>
                        </View>
                    }

                </View>
            </ScrollView >
        );
    }
}

