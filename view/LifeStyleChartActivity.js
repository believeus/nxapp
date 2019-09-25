import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

import SliderLineChart from './SliderLineChart';

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
        return (
            <ScrollView>
                <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>Lifestyle Questionnaire</Text></View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#F7731E" }}>
                    <View style={{ width: "95%" }}>
                        <Text style={{ color: "white" }}>A healthy or unhealthy lifestyle will most likely be transmitted across generations. According to the study done by Case et al.</Text>
                        <View style={{ width: "100%", height: 10 }}></View>
                        <Text style={{ color: "white" }}>"(2002), when a 0-3-year-old child has a mother who practices a healthy lifestyle, this child will be 27% more likely to become healthy and adopt the same lifestyle.</Text>
                        <View style={{ width: "100%", height: 10 }}></View>
                        <Text style={{ color: "white" }}>For instance, high-income parents are more likely to eat organic food, have time to exercise and provide the best living condition to their children.On the other hand, low-income parents are more likely to participate in unhealthy activities such as smoking to help them release poverty-related stress and depression.</Text>
                        <View style={{ width: "100%", height: 10 }}></View>
                        <Text style={{ color: "white" }}>Parents are the first teacher for every child. Everything that parents do will be very likely transferred to their children through the learning process.</Text>
                        <View style={{ width: "100%", height: 10 }}></View>
                    </View>
                </View>
                <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                <SliderLineChart
                    title="Foodconsumption (calories/day)"
                    refTitle="Source: Healthline"
                    refUrl="https://www.healthline.com/nutrition/how-many-calories-per-day#section5"
                    max="4000"
                    sliderDefualtValue={1500}
                    yAxisLabelValue="calories"
                    yAxisLabelName="calories"
                    column="calories"
                    desc={
                        <View style={{ width: "90%" }}>
                            <Text style={{ fontSize: 12 }}>
                                <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>An average woman needs to eat about 2000 calories per day to maintain, and 1500 calories to lose one pound of weight per week. An average man needs 2500 calories to maintain, and 2000 to lose one pound of weight per week.
                        </Text>
                        </View>
                    }
                />
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