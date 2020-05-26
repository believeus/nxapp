import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import InputSpinner from "react-native-input-spinner";
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import { encrypt, decrypt } from 'react-native-simple-encryption';

type Props = {};
export default class SleepSpinnerChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
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
                    nameTextStyle: { color: "black" },
                    data: null,

                },
                yAxis: {
                    nameTextStyle: { color: "black" },
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
            this.setState({ user: user })
            let plaintxt = decrypt(user.publickey, user.uuid)
            fetch(data.url + "user/sleep/data.jhtml?uuid=" + plaintxt).then(res => res.json()).then((data) => {
                let xValue = []
                let yValue = []
                for (var i in data) {
                    xValue.push(moment(data[i].updateTime).format('YYYY-MM-DD'))
                    yValue.push(data[i][this.props.yAxisLabelValue])
                }
                let option = Object.assign({}, this.state.option)
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

        });

    }
    componentDidMount() {
        this.load();
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View style={{ width: "100%" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    {this.props.title}
                </View>
                <View style={{ width: "100%", height: 80, alignItems: "center" }}>
                    <View style={{ width: "100%", height: 10 }}></View>
                    <View style={{ width: "90%", height: "100%" }}>
                        <View style={{ width: "45%", height: 20 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold" }}>{this.props.unit}</Text></View>
                        <View style={{ width: "30%", height: 20 }}>
                            <InputSpinner
                                inputStyle={{ paddingVertical: 0 }}
                                showBorder={true}
                                fontSize={16}
                                rounded={false}
                                height={25}
                                max={100}
                                min={0}
                                precision={1}
                                step={1}
                                arrows={true}
                                color={"#a0a0a0"}
                                value={0}
                                onChange={(value) => {
                                    let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    let url = data.url + "user/sleep/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then(() => {
                                        this.load();
                                    }).catch(function (error) {
                                        console.log('There has been a problem with your fetch operation: ' + error.message);
                                    });
                                }}
                            />
                        </View>
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
