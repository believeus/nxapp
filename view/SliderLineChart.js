import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import Slider from "rn-vertical-slider-gradient";
import { ECharts } from "react-native-echarts-wrapper";
import { WebView } from 'react-native-webview'
import Session from '../storage/Session';
import data from '../appdata'
import moment from 'moment';
import { I18n } from '../locales/i18n';

type Props = {};
export default class SliderLineChart extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            option: {
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
                        type: "line"
                    }
                ]
            }
        }


    }
    load=()=>{
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
            fetch(data.url + "user/lifestyle/data.jhtml?uuid=" + user.uuid).then(res => res.json()).then((data) => {
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
            <View style={{width:"100%"}}>
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
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%", height: 25}}><Text style={{ fontSize: 18, fontWeight: "bold" }}>{this.props.title}</Text></View>
                    <View style={{ width: "90%", height: 25}}><TouchableOpacity onPress={() => { this.setState({ display: true }) }}><Text style={{ fontSize: 14, color: "#0071BC",textDecorationLine:"underline" }}>{this.props.refTitle}</Text></TouchableOpacity></View>
                    {this.props.desc}
                </View>
                <View style={{ height: 250, flexDirection: "row", width: "100%" }}>
                    <View style={{ height: "100%", width: "96%"}}> 
                        <ECharts ref={(ref) => { this.echarts = ref }} option={this.state.option} />
                    </View>
                    <View style={{ height: "100%", width: "4%" }}>
                        <Slider
                            value={this.props.sliderDefualtValue}
                            disabled={false}
                            min={0}
                            max={this.props.max}
                            onChange={(value) => {
                                // console.log("CHANGE", value);
                            }}
                            onComplete={(value) => {
                                let url=data.url + "user/lifestyle/update.jhtml?uuid=" + this.state.user.uuid+"&column="+this.props.column+"&value="+value+"&utime="+new Date().getTime();
                                fetch(url).then(res => res.text()).then((data) => {
                                   this.load();
                                })

                            }}
                            width={30}
                            height={200}
                            step={1}
                            borderRadius={5}
                            ballIndicatorWidth={35}
                            minimumTrackTintColor={[
                                "#2ecc71",
                                "#27ae60",
                                "#f1c40f",
                                "#f39c12",
                                "#d35400",
                                "#c0392b"
                            ]}
                            maximumTrackTintColor="#ecf0f1"
                            showBallIndicator
                            ballIndicatorPosition={-40}
                            ballIndicatorColor={"#0071BC"}
                            ballIndicatorTextColor={"white"}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
