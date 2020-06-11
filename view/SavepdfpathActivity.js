import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image, Alert, Clipboard, TextInput, TouchableOpacity, Button } from 'react-native';
import Session from '../storage/Session'
import { I18n } from '../locales/i18n';
import data from '../appdata'

export default class SavepdfpathActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: "PDF"
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            pathbox: [],
        }
    }
    componentDidMount() {
        Session.load("pdfsavepath").then((savepathbox) => {
            for (let i in savepathbox) {
                let barcode = savepathbox[i].split(":")[0]
                let uuid = savepathbox[i].split(":")[1]
                let locale=savepathbox[i].split(":")[2]
                let view =
                    <View key={i} style={{ borderBottomColor: "#e0e0e0", borderBottomWidth: 1, height: 50 }}>
                        <View style={{ width: "100%", height: 5 }}></View>
                        <View style={{ width: "95%", flexDirection: "row", height: "100%", height: 40 }}>
                            <TouchableOpacity style={{ width: "75%", flexDirection: "row", height: "100%", height: 40 }} key={i} >
                                <View style={{ width: "100%", flexDirection: "row", height: "100%", height: 40 }}>
                                    <View style={{ width: "20%", height: "100%" }}><Image style={{ width: "90%", height: "90%" }} resizeMode="contain" source={require("../image/pdf.png")}></Image></View>
                                    <View style={{ width: "80%", height: "100%" }}><Text style={{ height: "100%",lineHeight:40 }}>{barcode}:{I18n.locale}.pdf</Text></View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "25%", height: "100%" }}>
                                <Button
                                    title={I18n.t("SavepdfpathActivity.btncp")}
                                    onPress={() => {
                                        let url=data.url + "user/report/" + barcode + "/"+I18n.locale+"/pdf.jhtml"
                                        Clipboard.setString(url);
                                        Alert.alert(I18n.t("SavepdfpathActivity.titlemsg"),I18n.t("SavepdfpathActivity.copy"))
                                    }}
                                    style={{ height: "80%", textAlignVertical: "center" }} />
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 5 }}></View>
                    </View>

                this.state.pathbox.push(view)
            }
            this.setState({ pathbox: this.state.pathbox })



        })

    }


    render() {
        return (
            <View style={{ width: "100%" }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{ width: "100%" }}>
                    {this.state.pathbox.length == 0 ? null : this.state.pathbox.map((value) => { return value })}
                </View>

            </View>
        );
    }
}
