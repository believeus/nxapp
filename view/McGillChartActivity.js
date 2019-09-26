import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import McGillChart from "./McGillChart"

type Props = {};
export default class McGillChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("McGillChartActivity.name"),
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
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>The McGill Pain Questionnaire</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{}}>
                                Introduction: The Mcgill Pain Questionnaire(MPQ)(] has become one of the most wideused tests for the
                                measurement of pain.
                                It provides valuable information on thesensory, affective and evaluative dimensions of pain
                                experience and is capablediscriminating among differentproblems [7].
                                The MPQ is not a perfect tooland several variants have been developed [2, 4,7]. Yet despite the
                                usefulness ofspecialized alternative forms,
                                the original MPQ is still commonly used in diagnosisand research on a wide variety of pain problems
                                [7]
                            </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>What Does Your Pain Feel Like?</Text>
                            <Text style={{ fontSize: 14 }}>Statement: Some of the following words below describe your present pain. Circle ONLY those words that best describe it. Leave out any category that is not suitable. Use only a single word in each appropriate category - the one that applies best.</Text>
                        </View>
                    </View>
                    <View style={{width:"100%",height:300}}>
                        <McGillChart
                            title="Throbbing?"
                            yAxisLabelName="Throbbing"
                            yAxisLabelValue="throbbing"
                            column="throbbing"
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