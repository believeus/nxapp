import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Alert, StatusBar, Button, ScrollView, TouchableOpacity } from 'react-native'
import { I18n } from '../locales/i18n'
import SleepStarChart from './SleepStarChart'
import SleepSpinnerChart from './SleepSpinnerChart'

export default class SleepChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("SleepChartActivity.title"),
        })
    }

    constructor(props) {
        super(props);
       
    }

    render() {
        const onButtonPress = () => {
            Alert.alert(I18n.t('LifeStyleChartActivity.savedata'));
        };
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
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('SleepChartActivity.assessment')}</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%",marginTop:23,marginBottom:23 }}>
                            <Text style={{marginBottom:12}}>
                                {I18n.t('SleepChartActivity.people')}
                            </Text>
                            <Text style={{marginBottom:12}}>
                                {I18n.t('SleepChartActivity.include')}
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 410 ,marginTop:23,marginBottom:23 }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.total')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.util')}
                            yAxisLabelName={I18n.t('SleepChartActivity.util')}
                            yAxisLabelValue="awake"
                            column="awake"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 410,marginTop:23,marginBottom:23  }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.asleep')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.night')}
                            yAxisLabelName={I18n.t('SleepChartActivity.night')}
                            yAxisLabelValue="fallasleep"
                            column="fallasleep"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23  }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.quality')}</Text>
                                    </View>
                                </View>
                            }
                            count={3}
                            reviews={["Good", "Average", "Poor"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="sleepquality"
                            column="sleepquality"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 415,marginTop:23,marginBottom:23  }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.mood')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="affectmood"
                            column="affectmood"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 435,marginTop:23,marginBottom:23  }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.productivity')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="affectability"
                            column="affectability"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 420 ,marginTop:23,marginBottom:23 }}>
                        <SleepStarChart
                            title={
                                <View style={{ width: "90%", height: 60 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.general')}</Text>
                                    </View>
                                </View>
                            }
                            count={4}
                            reviews={["None", "Little", "Somewhat", "Much"]}
                            yAxisLabelName={I18n.t('SleepChartActivity.score')}
                            yAxisLabelValue="troubleyou"
                            column="troubleyou"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 410,marginTop:23,marginBottom:23  }}>
                        <SleepSpinnerChart
                            title={
                                <View style={{ width: "90%", height: 75 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('SleepChartActivity.problem')}</Text>
                                    </View>
                                </View>
                            }
                            unit={I18n.t('SleepChartActivity.month')}
                            yAxisLabelName={I18n.t('SleepChartActivity.month')}
                            yAxisLabelValue="wheneffect"
                            column="wheneffect"
                        />
                    </View>
                    <TouchableOpacity >
                        <Button title="save" onPress={onButtonPress} color="#ff7668" />
                    </TouchableOpacity>
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