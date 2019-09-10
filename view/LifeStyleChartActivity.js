import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Chart from "react-native-f2chart";
import MotionSlider from 'react-native-motion-slider';
import { I18n } from '../locales/i18n';
import data from './data.json'
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
        const initScript = data => `
(function(){
    chart =  new F2.Chart({
        id: 'chart',
        pixelRatio: window.devicePixelRatio,
    });
    chart.source(${JSON.stringify(data)}, {
    value: {
    tickCount: 5,
    min: 0
    },
    date: {
    type: 'timeCat',
    range: [0, 1],
    tickCount: 3
    }
    });
    chart.tooltip({
    custom: true,
    showXTip: true,
    showYTip: true,
    snap: true,
    onChange: function(obj) {
        window.postMessage(stringify(obj))
    },
    crosshairsType: 'xy',
    crosshairsStyle: {
    lineDash: [2]
    }
    });
    chart.axis('date', {
    label: function label(text, index, total) {
    var textCfg = {};
    if (index === 0) {
        textCfg.textAlign = 'left';
    } else if (index === total - 1) {
        textCfg.textAlign = 'right';
    }
    return textCfg;
    }
    });
    chart.line().position('date*value');
    chart.render();
})();
`;

        return (
            <View>
                <View style={{ height: 300, flexDirection: "row", width: "100%" }}>
                    <Chart style={{ width: "95%", height: 300 }} initScript={initScript(data)} />
                    <View style={{ height: 285, width: "5%" }}>
                        <Slider
                            value={2}
                            disabled={false}
                            min={0}
                            max={4}
                            onChange={(value: number) => {
                                // console.log("CHANGE", value);
                            }}
                            onComplete={(value: number) => {
                                // console.log("COMPLETE", value);
                            }}
                            width={30}
                            height={285}
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