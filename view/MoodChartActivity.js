import React, { Component } from 'react';
import { Platform, StyleSheet,StatusBar, Text, View, Alert,TouchableOpacity, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import MoodChart from "./MoodChart"


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
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('MoodChartActivity.assessment')}</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "90%",marginTop:23,marginBottom:23 }}>
                            <Text style={{marginBottom:12}}>
                            {I18n.t('MoodChartActivity.emotions')}
                            </Text>
                            <Text style={{marginBottom:12}}>
                            {I18n.t('MoodChartActivity.short')}
                            </Text>
                            <Text style={{marginBottom:12}}>
                            {I18n.t('MoodChartActivity.fortnight')}
                            </Text>
                            <Text style={{marginBottom:12}}>
                            {I18n.t('MoodChartActivity.advice')}   
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.things')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="pleasure"
                            column="pleasure"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 ,marginTop:23,marginBottom:23}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.hopeless')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="depressed"
                            column="depressed"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 ,marginTop:23,marginBottom:23}}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.asleep')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="asleep"
                            column="asleep"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.energy')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="energy"
                            column="energy"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.appetite')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="overeating"
                            column="overeating"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450 ,marginTop:23,marginBottom:23}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 85 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.family')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="failure"
                            column="failure"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 450 ,marginTop:23,marginBottom:23}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 80 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.reading')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="focus"
                            column="focus"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 500 ,marginTop:23,marginBottom:23}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 125 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.usual')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="slow"
                            column="slow"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.attack')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="anxiety"
                            column="anxiety"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.anxious')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="nervous"
                            column="nervous"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.worrying')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="losecontrol"
                            column="losecontrol"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.different')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="worry"
                            column="worry"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400 ,marginTop:23,marginBottom:23}}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.relaxing')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="loserelax"
                            column="loserelax"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>
                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.still')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="restless"
                            column="restless"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 400,marginTop:23,marginBottom:23 }}>

                        <MoodChart
                            title={
                                <View style={{ width: "90%", height: 45 }}>
                                    <View style={{ width: "100%", height: 10 }}></View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 18 }}>{I18n.t('MoodChartActivity.irritable')}</Text>
                                    </View>
                                </View>
                            }
                            yAxisLabelName={I18n.t('MoodChartActivity.score')}
                            yAxisLabelValue="irritable"
                            column="irritable"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                </View>
                <TouchableOpacity >
                        <Button title="save" onPress={onButtonPress} color="#685cf2" />
                    </TouchableOpacity>
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