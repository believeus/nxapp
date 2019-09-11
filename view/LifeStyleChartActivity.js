import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import { I18n } from '../locales/i18n';
import Slider from "rn-vertical-slider-gradient";

type Props = {};
export default class LifeStyleChartActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("LifeStyleChartActivity.name"),
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

    }


    render() {

        const navigate = this.props.navigation;//此处可以自定义跳转属性
        let option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: "line"
                }
            ]
        };
        return (
            <View>
                <View style={{ height: 300, flexDirection: "row", width: "100%" }}>
                    <ECharts option={option}/>
                    <View style={{ height: 250, width: "5%" }}>
                        <Slider
                            value={2}
                            disabled={false}
                            min={0}
                            max={4}
                            onChange={(value) => {
                                // console.log("CHANGE", value);
                            }}
                            onComplete={(value) => {
                                // console.log("COMPLETE", value);
                            }}
                            width={30}
                            height={250}
                            step={1}
                            borderRadius={5}
                            ballIndicatorWidth={25}
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
                            ballIndicatorPosition={-30}
                            ballIndicatorColor={"#0071BC"}
                            ballIndicatorTextColor={"white"}
                        />
                    </View>
                </View>
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