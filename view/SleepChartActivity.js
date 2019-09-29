import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { I18n } from '../locales/i18n'
import SleepStarChart from './SleepStarChart'
import SleepSpinnerChart from './SleepSpinnerChart'

type Props = {};
export default class SleepChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("SleepChartActivity.name"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {

        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>Mood Self Assessment</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{}}>
                                Most people experience problems with sleep in their life. In fact, it’s thought that a third of Brits will have episodes of insomnia at some point.
					        </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>
                                The causes can include psychological conditions (Such as depression or anxiety) or a combination of both. This short test from Sleepio will give you a’sleep score ' plus practical tips and advice for improving your sleep.
                        </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 410 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about a typical night in the last month, if you wake up, how long are you awake for in total?</Text>
                                    </View>
                                </View>
                            }
                            unit="minute"
                            yAxisLabelName="minute"
                            yAxisLabelValue="awake"
                            column="awake"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 410 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about a typical night in the last month, how long does it take you to fall asleep?</Text>
                                    </View>
                                </View>
                            }
                            unit="night"
                            yAxisLabelName="night"
                            yAxisLabelValue="fallasleep"
                            column="fallasleep"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about a typical night in the last month, how would you rate your sleep quality?</Text>
                                    </View>
                                </View>
                            }
                            count={3}
                            reviews={["Good", "Average", "Poor"]}
                            yAxisLabelName="score"
                            yAxisLabelValue="sleepquality"
                            column="sleepquality"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 415 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about the past month, to what extent has poor sleep affected your mood, energy, or relationships?</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName="score"
                            yAxisLabelValue="affectmood"
                            column="affectmood"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 435 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about the past month, to what extent has poor sleep affected your concentration, productivity, or ability to stay awake?</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName="score"
                            yAxisLabelValue="affectability"
                            column="affectability"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 420 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Thinking about the past month, to what extent has poor sleep troubled you in general?</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName="score"
                            yAxisLabelValue="troubleyou"
                            column="troubleyou"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 410 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>8.How long have you had a problem with your sleep?</Text>
                                    </View>
                                </View>
                            }
                            unit="month"
                            yAxisLabelName="month"
                            yAxisLabelValue="wheneffect"
                            column="wheneffect"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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