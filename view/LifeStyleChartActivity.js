import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import RatingChart from './RatingChart';
import InputSpinner from "react-native-input-spinner";
import BMIChart from './BMIChart';
import { encrypt, decrypt } from 'react-native-simple-encryption';
export default class LifeStyleChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("LifeStyleChartActivity.title"),
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

    }

    render() {
        const onButtonPress = () => {
            Alert.alert(I18n.t('LifeStyleChartActivity.savedata'));
        };
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.lifesques')}</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%", marginTop: 23, marginBottom: 23 }}>
                            <Text style={{ marginBottom: 12 }}>{I18n.t('LifeStyleChartActivity.healthy')}</Text>
                            <Text style={{ marginBottom: 12 }}>{I18n.t('LifeStyleChartActivity.become')}</Text>
                            <Text style={{ marginBottom: 12 }}>{I18n.t('LifeStyleChartActivity.instance')}</Text>
                            <Text style={{ marginBottom: 12 }}>{I18n.t('LifeStyleChartActivity.teacher')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 34, width: '100%' }}></View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "90%", marginTop: 23, marginBottom: 23 }}>
                        <View style={{ width: "100%", height:56, flexDirection: "row" }}>
                            <View style={{ width: "45%", height: 20 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.Chronological')}</Text></View>
                            <View style={{ width: "30%", height: 20 }}>
                                <InputSpinner
                                    inputStyle={{ paddingVertical: 0 }}
                                    showBorder={true}
                                    fontSize={16}
                                    rounded={false}
                                    height={25}
                                    max={220}
                                    min={0}
                                    step={1}
                                    arrows={true}
                                    color={"#a0a0a0"}
                                    value={50} />
                            </View>
                        </View>
                    </View>
                </View>
                <View>

                    <BMIChart
                        title={I18n.t('LifeStyleChartActivity.height')}
                        refTitle={I18n.t('LifeStyleChartActivity.source')}
                        refUrl="https://www.cdc.gov/healthyweight/index.html"
                        yAxisLabelValue={I18n.t('LifeStyleChartActivity.bmii')}
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.bmii')}
                        yAxisLine="60@100"
                        column={I18n.t('LifeStyleChartActivity.bmii')}
                        desc={
                            <View style={{ width: "90%", marginBottom: 23 }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    <Text>{I18n.t('LifeStyleChartActivity.range')}</Text>
                                    <Text>{I18n.t('LifeStyleChartActivity.bmi')}</Text>
                                    <Text>{I18n.t('LifeStyleChartActivity.falls')}</Text>
                                    <Text>{I18n.t('LifeStyleChartActivity.your')}</Text>
                                </Text>
                            </View>
                        }
                    />
                </View>

                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 34 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.heart')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse"
                        min={0}
                        max={240}
                        sliderDefualtValue={60}
                        yAxisLabelValue="heartrate"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.beats')}
                        yAxisLine="60@100"
                        column="heartrate"
                        gradient={[["30%", "green", "72"], ["30%", "#FFB233", "144"], ["40%", "red", "240"]]}
                        desc={
                            <View style={{ width: "90%", }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.resting')}
                                    {I18n.t('LifeStyleChartActivity.ill')}
                                    {I18n.t('LifeStyleChartActivity.hearting')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.systolic')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
                        max={240}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="systolicBP"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mmhg')}
                        yAxisLine="60@100"
                        column="systolicBP"
                        gradient={[["50%", "green", "120"], ["4.2%", "yellow", ""], ["4.2%", "#FFB233", ""], ["17%", "#CD5C5C", "180"], ["24.6%", "red", "240"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.bloods')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.diastolic')}
                        max={160}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="diastolicBP"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mmhg')}
                        yAxisLine="80@180"
                        column="diastolicBP"
                        gradient={[["50%", "green", "80"], ["6.2%", "yellow", ""], ["6.2%", "#FFB233", ""], ["12.4%", "#CD5C5C", "120"], ["25.2%", "red", "160"]]}

                    />
                </View>

                <View style={{ width: "100%", height: 465, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.cholesterol')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/health-topics/cholesterol/about-cholesterol/what-your-cholesterol-levels-mean"
                        max={400}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="cholesterol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg')}
                        column="cholesterol"
                        gradient={[["50%", "green", "200"], ["10%", "#FFB233", "240"], ["40%", "red", "400"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.adults')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.meditation')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayo')}
                        refUrl="https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858"
                        max={16}
                        min={0}
                        sliderDefualtValue={5}
                        yAxisLabelValue="meditation"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.unit')}
                        column="meditation"
                        gradient={[["50%", "green", "8"], ["25%", "#FFB233", "12"], ["25%", "red", "16"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.most')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.cvh')}
                        refTitle={I18n.t('LifeStyleChartActivity.american')}
                        refUrl="https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults"
                        max={200}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="sport"
                        yAxisLabelName="minutes/week"
                        column="sport"
                        yAxisLine="50@150"
                        gradient={[["100%", "green", "200"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.minutes')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.sleep')}
                        refTitle={I18n.t('LifeStyleChartActivity.foundation')}
                        refUrl="https://www.sleepfoundation.org/"
                        max={16}
                        min={0}
                        sliderDefualtValue={8}
                        yAxisLabelValue="sleep"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.unit')}
                        column="sleep"
                        yAxisLine="5@8@10"
                        gradient={[["50%", "green", "8"], ["25%", "#FFB233", "12"], ["25%", "red", "16"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.morethan')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }} >
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.active')}
                        max={5}
                        min={0}
                        sliderDefualtValue={5}
                        yAxisLabelValue="sexfrequency"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.timesday')}
                        column="sexfrequency"
                        gradient={[["50%", "green", "2"], ["25%", "#FFB233", "4"], ["25%", "red", "5"]]}
                    />
                </View>
                <View>
                    <RatingChart
                        title={I18n.t('LifeStyleChartActivity.sexual')}
                        column="sexscore"
                        yAxisLabelValue="sexscore"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.score')}
                        max="5"
                    />
                </View>
                <View style={{ width: "100%", height: 480, marginTop: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.alcohol')}
                        refTitle={I18n.t('LifeStyleChartActivity.society')}
                        refUrl="https://www.cancer.org/"
                        max={20}
                        min={0}
                        sliderDefualtValue={20}
                        yAxisLabelValue="alcohol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.gramday')}
                        column="alcohol"
                        gradient={[["100%", "green", "20"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.drink')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.smoking')}
                        max={100}
                        min={0}
                        sliderDefualtValue={20}
                        yAxisLabelValue="smoking"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.sticksday')}
                        column="smoking"
                        gradient={[["100%", "green", "100"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.stop')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.vitamin')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-d/art-20363792"
                        max={1000}
                        min={0}
                        sliderDefualtValue={200}
                        yAxisLabelValue="vitaminD"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.iuday')}
                        column="vitaminD"
                        yAxisLine="400@600@800"
                        gradient={[["100%", "green", "1000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.recommended')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.vitaminc')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-c/art-20363932"
                        max={450}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="vitaminC"
                        yAxisLabelName="mg/day"
                        column="vitaminC"
                        yAxisLine="75@90"
                        gradient={[["100%", "green", "450"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.daily')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.vitamina')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-a/art-20365945"
                        max={1500}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="vitaminA"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mcgday')}
                        column="vitaminA"
                        yAxisLine="700@900"
                        gradient={[["100%", "green", "1500"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.women')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.same')}
                        refTitle={I18n.t('LifeStyleChartActivity.webmd')}
                        refUrl="https://www.webmd.com/diet/supplement-guide-sam-e#1"
                        max={5000}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="same"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="same"
                        yAxisLine="600@1600"
                        gradient={[["100%", "green", "5000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.same-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 512, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.resveratrol')}
                        refTitle={I18n.t('LifeStyleChartActivity.drug')}
                        refUrl="https://www.drugs.com/npp/resveratrol.html"
                        max={5000}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="resveratrol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="resveratrol"
                        yAxisLine="70@450"
                        gradient={[["100%", "green", "5000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.resveraltrol-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.nmn')}
                        refTitle={I18n.t('LifeStyleChartActivity.selfhacked')}
                        refUrl="https://content.selfdecode.com/nicotinamide-mononucleotide/"
                        max={5000}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="nmn"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="nmn"
                        yAxisLine="125@250"
                        gradient={[["100%", "green", "5000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.nmn-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.dhea')}
                        refTitle={I18n.t('LifeStyleChartActivity.webmd')}
                        refUrl="https://www.webmd.com/a-to-z-guides/dhea#1"
                        max={500}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="dhea"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="dhea"
                        yAxisLine="125@250"
                        gradient={[["100%", "green", "500"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.dhea-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 500, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.tmg')}
                        refTitle={I18n.t('LifeStyleChartActivity.tmgwebsite')}
                        refUrl="https://examine.com/supplements/trimethylglycine/"
                        max={1000}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="tmg"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="tmg"
                        yAxisLine=""
                        gradient={[["100%", "green", "1000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.tmg-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 550, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.lipoic')}
                        refTitle={I18n.t('LifeStyleChartActivity.lipoicwebsite')}
                        refUrl="https://www.drugs.com/mtm/alpha-lipoic-acid.html"
                        max={600}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="lipoic"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.mg1')}
                        column="lipoic"
                        yAxisLine=""
                        gradient={[["100%", "green", "600"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.lipoic-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 550, marginTop: 23, marginBottom: 23 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <View style={{ height: 34, width: '100%' }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.vitaminD2')}
                        refTitle={I18n.t('LifeStyleChartActivity.vitaminD2website')}
                        refUrl="https://www.lesswrong.com/posts/c5aycbSsSc38XWPEc/taking-vitamin-d3-with-k2-in-the-morning"
                        max={5000}
                        min={0}
                        sliderDefualtValue={280}
                        yAxisLabelValue="lipoic"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.iuday')}
                        column="lipoic"
                        yAxisLine=""
                        gradient={[["100%", "green", "5000"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    {I18n.t('LifeStyleChartActivity.vitaminD2-recommon')}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <TouchableOpacity >
                    <Button title="save" onPress={onButtonPress} color="#f7871e" />
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