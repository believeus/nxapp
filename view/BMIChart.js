import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import InputSpinner from "react-native-input-spinner";
import { WebView } from 'react-native-webview';
import Session from '../storage/Session';
import data from '../appdata';
import moment from 'moment';
import { I18n } from '../locales/i18n';
import { encrypt, decrypt } from 'react-native-simple-encryption';

export default class BMIChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            bmiwebview: false,
            score: 0.5,
            option: {
                tooltip: {
                    trigger: 'axis'
                },
                dataZoom: [
                    {
                        id: 'dataZoomX',
                        type: 'slider',
                        xAxisIndex: [0],
                        filterMode: 'filter'
                    },
                ],
                xAxis: {
                    name: 'date',
                    nameLocation: 'middle',
                    nameGap: 20,
                    type: "category",
                    nameTextStyle: { color: "#0071BC" },
                    data: null
                },
                yAxis: {
                    nameTextStyle: { color: "red" },
                    name: null,
                    nameLocation: 'end',
                    type: "value"
                },
                series: [
                    {
                        data: null,
                        type: "line",
                        markLine: {
                            silent: true,
                            data: [
                                // { yAxis: 2000 },
                                // { yAxis: 2500 }
                            ]
                        }
                    }
                ]
            }
        }
    }

    load = () => {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
            let plaintxt = decrypt(user.publickey, user.uuid)
            //解密
            fetch(data.url + "user/lifestyle/data.jhtml?uuid=" + plaintxt).then(res => res.json()).then((data) => {
                let xValue = []
                let yValue = []
                for (var i in data) {
                    xValue.push(moment(data[i].updateTime).format('YYYY-MM-DD'));
                    yValue.push(data[i][this.props.yAxisLabelValue])
                }
                let option = Object.assign({}, this.state.option);
                option.xAxis.data = xValue;
                option.yAxis.name = this.props.yAxisLabelName;
                option.series[0].data = yValue
                //如果this.props.yAxisLine有定义
                if (this.props.yAxisLine) {
                    let lines = this.props.yAxisLine.split("@")
                    for (let i = 0; i < lines.length; i++) {
                        option.series[0].markLine.data[i] = {};
                        option.series[0].markLine.data[i].yAxis = window.parseFloat(lines[i]);
                    }
                }
                this.setState({ option });
                this.echarts.webview.reload();
            })
        })


    }
    componentDidMount() {
        this.load();
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View style={{ width: "100%" }}>
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.props.refUrl }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                {this.state.bmiwebview == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.bmiwebview} onRequestClose={() => { this.setState({ bmiwebview: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: "https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ bmiwebview: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: "100%", alignItems: "center" }}>
                    {this.props.title ? <View style={{ width: "90%", height: 25 }}><Text style={{ fontSize: 18, fontWeight: "bold" }}>{this.props.title}</Text></View> : null}
                    {this.props.refTitle ? <View style={{ width: "90%", height: 25 }}><TouchableOpacity onPress={() => { this.setState({ display: true }) }}><Text style={{ fontSize: 14, color: "#0071BC", textDecorationLine: "underline" }}>{this.props.refTitle}</Text></TouchableOpacity></View> : null}
                    {this.props.desc ? this.props.desc : null}
                </View>

                <View style={{ width: "100%", height: 40, alignItems: "center" }}>
                    <View style={{ width: "100%", height: 10 }}></View>
                    <View style={{ width: "90%", height: "100%", flexDirection: "row" }}>
                        <View style={{ width: "45%", height: 20 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.heightvalue')}</Text></View>
                        <View style={{ width: "30%", height: 20 }}>
                            <InputSpinner
                                inputStyle={{ paddingVertical: 0 }}
                                showBorder={true}
                                fontSize={16}
                                rounded={false}
                                height={25}
                                max={220}
                                min={0}
                                precision={1}
                                step={0.5}
                                arrows={true}
                                color={"#a0a0a0"}
                                value={165}
                                onChange={(height) => {
                                    this.setState({ height })
                                    //解密
                                    let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    let url = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=height&value=" + height + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then(() => {
                                        console.info(this.state.weight + "--" + this.state.height)
                                        if (this.state.weight && this.state.height) {
                                            let bmivalue = this.state.weight / Math.pow((this.state.height / 100), 2)
                                            let uri = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + bmivalue + "&utime=" + new Date().getTime();
                                            console.info(uri)
                                            fetch(uri).then(res => res.text()).then((data) => {
                                                if (data == "success") {
                                                    this.load();
                                                }
                                            })
                                        }
                                    }).catch(function (error) {
                                        console.log('There has been a problem with your fetch operation: ' + error.message);
                                    });
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", height: 40, alignItems: "center" }}>
                    <View style={{ width: "100%", height: 10 }}></View>
                    <View style={{ width: "90%", height: "100%", flexDirection: "row" }}>
                        <View style={{ width: "45%", height: 20 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.weightvalue')}</Text></View>
                        <View style={{ width: "30%", height: 20 }}>
                            <InputSpinner
                                inputStyle={{ paddingVertical: 0 }}
                                showBorder={true}
                                fontSize={16}
                                rounded={false}
                                height={25}
                                max={220}
                                min={0}
                                step={1}
                                arrows={true}
                                color={"#a0a0a0"}
                                value={50}
                                onChange={(weight) => {
                                    this.setState({ weight })
                                    //解密
                                    let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    let url = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=weight&value=" + weight + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then(() => {
                                        console.info(this.state.weight + "--" + this.state.height)
                                        if (this.state.weight && this.state.height) {
                                            let bmivalue = this.state.weight / Math.pow((this.state.height / 100), 2)
                                            let uri = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + bmivalue + "&utime=" + new Date().getTime();
                                            fetch(uri).then(res => res.text()).then((data) => {
                                                if (data == "success") {
                                                    this.load();
                                                }
                                            })
                                        }
                                    }).catch(function (error) {
                                        console.log('There has been a problem with your fetch operation: ' + error.message);
                                    });

                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%",marginTop:23,marginBottom:23 }}>
                        <Text style={{ fontSize: 12 }}>{I18n.t('LifeStyleChartActivity.bmicaltulate')}</Text>
                        <TouchableOpacity onPress={() => { this.setState({ bmiwebview: true }) }}><Text style={{ fontSize: 12, color: "#0071BC", textDecorationLine: "underline" }}>{I18n.t('LifeStyleChartActivity.bmisource')}</Text></TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                        <Text style={{ fontSize: 12 }}>{I18n.t('LifeStyleChartActivity.range')}</Text>
                        <Text style={{ fontSize: 12 }}>{I18n.t('LifeStyleChartActivity.bmi')}</Text>
                        <Text style={{ fontSize: 12 }}>{I18n.t('LifeStyleChartActivity.falls')}</Text>
                        <Text style={{ fontSize: 12 }}>{I18n.t('LifeStyleChartActivity.your')}</Text>
                    </View>
                </View>
                <View style={{ height: 250, flexDirection: "row", width: "100%" }}>
                    <View style={{ height: "100%", width: "100%" }}>
                        <ECharts ref={(ref) => { this.echarts = ref }} option={this.state.option} />
                    </View>

                </View>
            </View>
        );
    }
}
