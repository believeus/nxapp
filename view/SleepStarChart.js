import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import AesCrypto from 'react-native-aes-kit'
import { I18n } from '../locales/i18n';

type Props = {};
export default class SleepStarChart extends Component<Props> {
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
                    name: 'data',
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
            const iv = 'iiibelieveususus'
            let privatekey = user.privatekey
            let uuid = user.uuid
            //解密
            AesCrypto.decrypt(uuid, privatekey, iv).then(plaintxt => {
                fetch(data.url + "user/sleep/data.jhtml?uuid=" + plaintxt).then(res => res.json()).then((data) => {
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
                    <View style={{ width: "100%", height: 100, alignItems: "center", justifyContent: "center" }}>
                        <View>
                            <AirbnbRating
                                count={this.props.count}
                                reviews={this.props.reviews}
                                defaultRating={1}
                                size={20}
                                ref={(ref) => { this.rating = ref }}
                                onFinishRating={(value) => {
                                    const iv = 'iiibelieveususus'
                                    let privatekey = this.state.user.privatekey
                                    let uuid = this.state.user.uuid
                                    //解密
                                    AesCrypto.decrypt(uuid, privatekey, iv).then(plaintxt => {
                                        let url = data.url + "user/sleep/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                        fetch(url).then(res => res.text()).then((data) => {
                                            if (data == "success") {
                                                this.load();
                                            }
                                        })
                                    })

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
