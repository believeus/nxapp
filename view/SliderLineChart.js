import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import Slider from "rn-vertical-slider-gradient";
import { ECharts } from "react-native-echarts-wrapper";
import { WebView } from 'react-native-webview'
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment'
import AesCrypto from 'react-native-aes-kit'
import { I18n } from '../locales/i18n';
import ISlider from '../component/ISlider';
type Props = {};
export default class SliderLineChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
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
            const iv = '1010101010101010'
            let privatekey = user.privatekey
            let uuid = user.uuid
            //解密
            AesCrypto.decrypt(uuid, privatekey, iv).then(plaintxt => {
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
            }).catch(err => {
                console.log(err);
            });


        });

    }
    componentDidMount() {
        this.load();
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性

        return (
            <View style={{ width: "100%" }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView startInLoadingState={true} ref={(ref) => { this.brower = ref }} source={{ uri: this.props.refUrl }} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }
                <View style={{ width: "100%", alignItems: "center" }}>
                    {this.props.title ? <View style={{ width: "90%", height: 25 }}><Text style={{ fontSize: 18, fontWeight: "bold" }}>{this.props.title}</Text></View> : null}
                    {this.props.refTitle ? <View style={{ width: "90%", height: 25 }}><TouchableOpacity onPress={() => { this.setState({ display: true }) }}><Text style={{ fontSize: 14, color: "#0071BC", textDecorationLine: "underline" }}>{this.props.refTitle}</Text></TouchableOpacity></View> : null}
                    {this.props.desc ? this.props.desc : null}
                </View>
                <View style={{ height: 250, width: "100%", alignItems: "center" }}>
                    <View style={{ height: "100%", width: "100%" }}>
                        <ECharts ref={(ref) => { this.echarts = ref }} option={this.state.option} />
                    </View>
                    <View style={{ width: "90%", height: 300, alignItems: "center" }}>
                        <ISlider
                            height={30}
                            min={this.props.min}
                            max={this.props.max}
                            defaultValue={0}
                            step={1}
                            onAfterChange={(value) => {
                                const iv = '1010101010101010'
                                let privatekey = this.state.user.privatekey
                                let uuid = this.state.user.uuid
                                //解密
                                AesCrypto.decrypt(uuid, privatekey, iv).then(plaintxt => {
                                    let url = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then((data) => {
                                        this.load();
                                    })
                                })
                            }}
                            maximumTrackTintColor="#dcdbdb"
                            minimumTrackTintColor="#577bff"
                            processHeight={30}
                            gradient={this.props.gradient}
                        />
                    </View>
                    {/* <View style={{ height: "100%", width: "4%" }}>
                        <Slider
                            value={this.props.sliderDefualtValue}
                            disabled={false}
                            min={0}
                            max={this.props.max}
                            onChange={(value) => {
                                // console.log("CHANGE", value);
                            }}
                            onComplete={(value) => {
                                const iv = '1010101010101010'
                                let privatekey = this.state.user.privatekey
                                let uuid = this.state.user.uuid
                                //解密
                                AesCrypto.decrypt(uuid, privatekey, iv).then(plaintxt => {
                                    let url = data.url + "user/lifestyle/update.jhtml?uuid=" + plaintxt + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                    fetch(url).then(res => res.text()).then((data) => {
                                        this.load();
                                    })
                                })

                            }}
                            width={30}
                            height={200}
                            step={1}
                            borderRadius={5}
                            ballIndicatorWidth={35}
                            minimumTrackTintColor={[
                                "rgb(146, 208, 80)",
                                "rgb(146, 208, 80)",
                                "rgb(255, 192, 0)",
                                "rgb(255, 192, 0)",
                                "rgb(255,0,0)"
                            ]}
                            maximumTrackTintColor="#ecf0f1"
                            showBallIndicator
                            ballIndicatorPosition={-40}
                            ballIndicatorColor={"#0071BC"}
                            ballIndicatorTextColor={"white"}
                        />
                    </View> */}
                </View>
            </View>
        );
    }
}
