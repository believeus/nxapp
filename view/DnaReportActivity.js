import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';

type Props = {};
export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("DnaReportActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });

    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        let option = {
            legend: {
                data: ['Chronological Age<Biological Age', 'Chronological Age>Biological Age']
            },
            xAxis: [{
                name: 'Chronological Age',
                type: 'value',
                nameLocation: 'middle',
                nameGap:"25",
                scale: true,
                nameTextStyle:{color:"#0071BC"},
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
                nameTextStyle:{color:"#0071BC"},
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series: [{
                name: 'Chronological Age<Biological Age',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                },
                //自然年龄<生物学年龄
                data: [[159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6]],
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'blue'
                        }
                    },
                    data: [{
                        name: 'Biological Age',
                        value: 50.0,
                        xAxis: 160.0,
                        yAxis: 50.0
                    }] //x:自然年龄,y生物学年龄
                },
                markLine: {
                    data: []
                }
            },
            {
                name: 'Chronological Age>Biological Age',
                type: 'scatter',
                //自然年龄>生物学年龄
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0]],
                itemStyle: {
                    normal: {
                        color: 'green'
                    }
                },
                markPoint: {
                    data: [{
                        itemStyle: {
                            normal: {
                                color: 'blue'
                            }
                        },
                        name: 'Biological Age',
                        value: 50,
                        xAxis: 30,
                        yAxis: 50
                    }]
                },
                markLine: {
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    },
                    data: [[{
                        name: '标线1起点',
                        xAxis: 150,
                        yAxis: 50,
                        symbol: 'circle'
                    }, {
                        name: '标线1终点',
                        xAxis: 200,
                        yAxis: 80,
                        symbol: 'circle'
                    },],],
                }
            }]
        };

        return (

            <View  style={{ height: 300, flexDirection: "row", width: "100%" }}>
                <ECharts option={option} />
            </View>
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