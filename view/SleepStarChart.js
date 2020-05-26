import React, { Component } from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import { encrypt, decrypt } from 'react-native-simple-encryption';

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
        return (
            <View style={{ width: "100%" }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
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
                                    //解密
                                    let plaintxt = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    let url = data.url + "user/sleep/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then((data) => {
                                        if (data == "success") {
                                            this.load();
                                        }
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
