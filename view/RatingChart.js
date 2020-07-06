import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import { encrypt, decrypt } from 'react-native-simple-encryption';
import { I18n } from '../locales/i18n';

type Props = {};
export default class RatingChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
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
                    name: 'data',
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
            //解密
            let plaintxt = decrypt(user.publickey, user.uuid)
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

        });

    }
    componentDidMount() {
        this.load();
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <View style={{ width: "100%" }}>

                <View style={{ width: "90%", height: 25, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", width: "80%", textAlign: "center" }}>{this.props.title}</Text>
                </View>
                <View style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}>
                    <View>
                        <StarRatingBar
                            starStyle={{
                                width: 20,
                                height: 20,
                            }}
                            readOnly={false}
                            continuous={false}
                            score={this.state.score}
                            scoreText=""
                            allowsHalfStars={false}
                            accurateHalfStars={false}
                            onStarValueChanged={(score) => {
                                //解密
                                let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                let url = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + score + "&utime=" + new Date().getTime();
                                fetch(url).then(res => res.text()).then((data) => {
                                    if (data == "success") {
                                        this.load();
                                        // 刷新时会将StarRatingBar刷新为默认初始值，所以需重新设置成选定的值
                                        this.setState({ score })
                                    }
                                })

                            }}
                        />
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
