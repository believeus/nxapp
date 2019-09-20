import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import data from '../appdata'
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';


type Props = {};
export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("DnaReportActivity.name"),
    };
    constructor(props) {
        super(props);
        this.state = {
            barcode: '',
            option: {
                legend: {
                    data: ['Chronological Age<Biological Age', 'Chronological Age>Biological Age']
                },
                xAxis: [{
                    name: 'Chronological Age',
                    type: 'value',
                    nameLocation: 'middle',
                    nameGap: 20,
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                yAxis: [{
                    name: 'Biological Age',
                    nameLocation: 'middle',
                    nameGap: 22,
                    nameRotate: 90,
                    type: 'value',
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [
                    {
                        name: 'Chronological Age<Biological Age',
                        type: 'scatter',
                        //圆点的颜色为红色
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        },
                        //自然年龄<生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Biological Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },
                    },
                    {
                        name: 'Chronological Age>Biological Age',
                        type: 'scatter',
                        //圆点的颜色为绿色
                        itemStyle: {
                            normal: {
                                color: 'green'
                            }
                        },
                        //自然年龄>生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Biological Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },


                    }]
            }
        };
    }

    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });
        fetch(data.url + "/user/report/findNtrLtBio.jhtml").then(res => res.json()).then((data) => {
            let v = []
            for (var i in data) {
                let naturally = window.parseFloat(data[i].naturally).toFixed(2);
                let biological = window.parseFloat(data[i].biological).toFixed(2)
                v.push([naturally, biological])
            }
            let option = Object.assign({}, this.state.option);
            option.series[0].data = v;
            this.setState({ option });
            this.echarts.webview.reload();

        })
        fetch(data.url + "/user/report/findNtrGtBio.jhtml").then(res => res.json()).then((data) => {
            let v = []
            for (var i in data) {
                let naturally = window.parseFloat(data[i].naturally).toFixed(2);
                let biological = window.parseFloat(data[i].biological).toFixed(2)
                v.push([naturally, biological])
            }
            let option = Object.assign({}, this.state.option);
            option.series[1].data = v;
            this.setState({ option });
            this.echarts.webview.reload();
        })

    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (

            <ScrollView>

                <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", height: 10 }}></View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ height: 35, flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "10%", height: 30 }}></View>
                            <TextInput
                                style={{ width: "70%", height: "100%", borderColor: '#0071BC', borderWidth: 1, borderRadius: 5, paddingVertical: 0 }}
                                onChangeText={(barcode) => this.setState({ barcode })}
                                placeholder={"Your barcode"}
                                value={this.state.barcode}
                            />
                            {this.state.barcode == "" ?
                                <View style={{ width: "15%", height: 35 }} >
                                    <TouchableOpacity onPress={() => {
                                        navigate.push("Scanner", {
                                            barcode: this.state.barcode,
                                            callback: (data) => {
                                                this.setState({ barcode: data })
                                            }
                                        })
                                    }}>
                                        <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={require("../image/scan.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{ width: "15%", height: 35 }} >

                                    <TouchableOpacity onPress={() => {
                                        console.info(data.url + "user/report/upbarcode.jhtml?userid=" + this.state.user.id + "&barcode=" + this.state.barcode)
                                        fetch(data.url + "user/report/upbarcode.jhtml?userid=" + this.state.user.id + "&barcode=" + this.state.barcode).then(res => res.json()).then((data) => {
                                            switch (data.status) {
                                                case "invalid":
                                                    Alert.alert('Message', 'Invalid barcode');
                                                    break;
                                                case "pending":
                                                    Alert.alert('Message', 'Your report will be available in 21 working days.Please wait……');
                                                    break;
                                                case "processing":
                                                    Alert.alert('Message', "Detection is being processed.\nPlease wait……");
                                                    break;
                                                case "finished":
                                                    let option = Object.assign({}, this.state.option);
                                                    let biological = window.parseFloat(data.biological).toFixed(2);
                                                    let naturally = window.parseFloat(data.naturally).toFixed(2)
                                                    this.setState({ biological })
                                                    this.setState({ naturally })
                                                    let i = biological > naturally ? 0 : 1;
                                                    option.series[i].markPoint.data[0].value = biological
                                                    option.series[i].markPoint.data[0].xAxis = naturally
                                                    option.series[i].markPoint.data[0].yAxis = biological
                                                    this.setState({ option })
                                                    this.setState({ visual: true })
                                                    {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                                                    {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                                                    {/* 从而重新刷新webview数据 */ }
                                                    this.echarts.webview.reload();
                                                    break;


                                            }

                                        })
                                    }}>
                                        <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={require("../image/report.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>

                    <View style={{ height: 10, width: "100%" }}></View>
                    {this.state.visual == true ?
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={{ width: "80%", height: 35, borderTopColor: "#0071BC", borderTopWidth: 1, flexDirection: "row" }}>
                                <View style={{ width: "60%", height: "100%", backgroundColor: "" }}>
                                    <Text style={{ fontWeight: "bold", textAlignVertical: "center", width: "100%", height: "100%" }}>Your chronological age</Text>
                                </View>
                                <View style={{ width: "40%", height: "100%" }}>
                                    <Text style={{ fontWeight: "bold", textAlignVertical: "center", width: "100%", height: "100%" }}>{this.state.naturally}</Text>
                                </View>
                            </View>
                            <View style={{ width: "80%", height: 35, borderTopColor: "#0071BC", borderBottomColor: "#0071BC", borderTopWidth: 1, borderBottomWidth: 1, flexDirection: "row", backgroundColor: "#DEEBF7" }}>
                                <View style={{ width: "60%", height: "100%" }}>
                                    <Text style={{ fontWeight: "bold", textAlignVertical: "center", width: "100%", height: "100%" }}>   Your biological age</Text>
                                </View>
                                <View style={{ width: "40%", height: "100%" }}>
                                    <Text style={{ color: "red", fontWeight: "bold", textAlignVertical: "center", width: "100%", height: "100%" }}>{this.state.biological}</Text>
                                </View>
                            </View>
                            <View style={{ height: 10, width: "100%" }}></View>
                            {this.state.biological < this.state.naturally ?
                                <View style={{ width: "80%", height: 35, flexDirection: "row" }}>
                                    <View style={{width:"10%",height:"100%"}}><Image style={{width:"100%",height:"100%"}} resizeMode="center" source={require("../image/smail.png")}></Image></View>
                                    <View style={{width:"90%",height:"100%"}}><Text style={{color:"#0071BC",textAlignVertical:'center' }}>Your biological age is {this.state.biological} years!younger than your chronological age.</Text></View>
                                </View>
                                :
                                <View style={{ width: "80%", height: 35, flexDirection: "row" }}>
                                    <View style={{width:"10%",height:"100%"}}><Image  style={{width:"100%",height:"100%"}} resizeMode="center" source={require("../image/cry.png")}></Image></View>
                                    <View style={{width:"90%",height:"100%"}}><Text style={{color:"red" }}>Your biological age is {this.state.biological} years!older than your chronological age.</Text></View>
                                </View>
                            }
                        </View> : null
                    }
                    <View style={{ height: 10, width: "100%" }}></View>
                    <View style={{ height: 300, width: "100%" }}>
                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */}
                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */}
                        {/* 从而重新刷新webview数据 */}
                        <ECharts option={this.state.option} ref={(ref) => { this.echarts = ref }} />
                    </View>
                </View>
            </ScrollView >
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