import React, { Component } from 'react';
import { Platform, StyleSheet,StatusBar, Text, View, Image, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import MoodChart from "./MoodChart"


type Props = {};
export default class MoodChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("MoodChartActivity.title"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {

        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>Mood Self Assessment</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{}}>
                                When it comes to emotions, it can sometimes be hard to recognise or admit that we're not feeling 100%
                            </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>
                                If you are 16 or over, take this short questionnaire to
                            </Text>
                            <Text style={{}}>
                                (1) Help you better understand how you've been feeling over the last fortnight
                            </Text>
                            <Text style={{}}>
                                (2) Point you in the right direction for helpful advice and information
                            </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you had little interest or pleasure in doing things?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="pleasure"
                            column="pleasure"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by feeling down, depressed or hopeless?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="depressed"
                            column="depressed"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by trouble falling or staying asleep, or sleeping too much?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="asleep"
                            column="asleep"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by feeling tired or having little energy?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="energy"
                            column="energy"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by poor appetite or overeating?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="overeating"
                            column="overeating"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 85 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="failure"
                            column="failure"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="focus"
                            column="focus"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 500 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 125 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by moving or speaking so slowly that other people could have noticed,or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="slow"
                            column="slow"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>Have you had an anxiety attack (suddenly feeling fear or panic)?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="anxiety"
                            column="anxiety"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by feeling nervous, anxious or on edge?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="nervous"
                            column="nervous"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by not being able to stop or control worrying?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="losecontrol"
                            column="losecontrol"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by worrying too much about different things?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="worry"
                            column="worry"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by having trouble relaxing?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="loserelax"
                            column="loserelax"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by being so restless that it is hard to sit still?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="restless"
                            column="restless"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by becoming easily annoyed or irritable?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="irritable"
                            column="irritable"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>How often have you been bothered by becoming easily annoyed or irritable?</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName="score"
                            yAxisLabelValue="afraid"
                            column="afraid"
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