import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Slider } from 'react-native';
import Chart from "react-native-f2chart";
import data from './data.json'

type Props = {};
export default class LifeStyleChartActivity extends Component<Props> {
    static navigationOptions = {
        title: 'Life Style Questionnaire',
    };
    constructor(props) {
        super(props);
        this.state={
            value:0
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
            <ScrollView style={styles.container}>
                <View>

                    <View style={{ height: 350 }}>
                        <Slider minimumValue={0} maximumValue={20} step={2}  
                                 maximumTrackImage={require('../image/s-left.png')}
                                style={{height:30,borderColor:'#ff0000',borderWidth:1 }} 
                                onValueChange={(value)=>{this.setState({value:value});console.log(this.state.value)}} onSlidingComplete={(value)=>{this.setState({value:value})}}
                            />
                        <Chart initScript={initScript(data)} />
                    </View>
                </View>
            </ScrollView>
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