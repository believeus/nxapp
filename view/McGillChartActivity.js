import React, { Component } from 'react';
import { Platform, StyleSheet,StatusBar, Text, View, Image,Alert,TouchableOpacity, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import McGillChart from "./McGillChart"

type Props = {};
export default class McGillChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("McGillChartActivity.title"),
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
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('McGillChartActivity.pain')}</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%",marginTop:23,marginBottom:23 }}>
                            <Text style={{}}>
                                {I18n.t('McGillChartActivity.wideused')}
                                {I18n.t('McGillChartActivity.provides')}
                                {I18n.t('McGillChartActivity.several')}
                                {I18n.t('McGillChartActivity.research')}
                            </Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "92%",marginTop:23,marginBottom:23 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{I18n.t('McGillChartActivity.feel')}</Text>
                            <Text style={{ fontSize: 14 }}>{I18n.t('McGillChartActivity.following')}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.throbbing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="throbbing"
                            column="throbbing"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.shooting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="shooting"
                            column="shooting"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.stabbing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="stabbing"
                            column="stabbing"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.sharp')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="sharp"
                            column="sharp"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.cramping')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="cramping"
                            column="cramping"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.gnawing')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="gnawing"
                            column="gnawing"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.hotburning')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="burning"
                            column="burning"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.aching')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="aching"
                            column="aching"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.heavy')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="heavy"
                            column="heavy"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.tender')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="tender"
                            column="tender"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.splitting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="split"
                            column="split"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.exhausting')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="exhausting"
                            column="exhausting"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.sickening')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="sickening"
                            column="sickening"
                        />
                    </View>
                    <View style={{height:34,width:'100%'}}></View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ width: "100%", height: 350 }}>
                        <McGillChart
                            title={I18n.t('McGillChartActivity.fearful')}
                            yAxisLabelName={I18n.t('McGillChartActivity.score')}
                            yAxisLabelValue="fearful"
                            column="fearful"
                        />
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                </View>
                <TouchableOpacity >
                        <Button title="save" onPress={onButtonPress} color="#d62e2d" />
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