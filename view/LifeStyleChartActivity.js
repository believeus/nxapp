import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import RatingChart from './RatingChart';
import BMIChart from './BMIChart';

type Props = {};
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

        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.lifesques')}</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{}}>{I18n.t('LifeStyleChartActivity.healthy')}</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>{I18n.t('LifeStyleChartActivity.become')}</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>{I18n.t('LifeStyleChartActivity.instance')}</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>{I18n.t('LifeStyleChartActivity.teacher')}</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>

                </View>
                <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                            <View style={{ width: "90%" }}>
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
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    Your resting heart rate is the heart pumping the lowest amount of blood
                                    you need because you’re not exercising. If you’re sitting or lying and you’re calm, relaxed and aren’t ill,
                                    your heart rate is normally between 60 (beats per minute) and 100 (beats per minute).
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.blood')}
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
                                    Blood pressure numbers of less than 120/80 mm Hg are considered within thenormal range.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                <View style={{ width: "100%", height: 465 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    All adults age 20 or older should have their cholesterol (and other risk factors) checked every four to six years.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    Meditation can wipe away the day's stress, bringing with it inner peace. See how you can easily learn to practice meditation whenever you need it most.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    NATIONAL SLEEP FOUNDATION recommonds 7-9 hours for 18-64 years, and doesn't recommend less than 6 and more than 11 hours for 8-25 years and less than 6 and more than 10 hours for 26-64 years.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400 }} >
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.active')}
                        max={5}
                        min={0}
                        sliderDefualtValue={10}
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
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.alcohol')}
                        refTitle={I18n.t('LifeStyleChartActivity.society')}
                        refUrl="https://www.cancer.org/"
                        max={100}
                        min={0}
                        sliderDefualtValue={20}
                        yAxisLabelValue="alcohol"
                        yAxisLabelName={I18n.t('LifeStyleChartActivity.gramday')}
                        column="alcohol"
                        gradient={[["100%", "green", "100"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    Drink no more than 1 drink per day for women or 2 per day for men.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 400 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    Stop Smoking
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 480 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    The recommended daily amount of vitamin D is 400 international units (IU) for children up to age 12 months, 600 IU for ages 1 to 70 years, and 800 IU for people over 70 years.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title={I18n.t('LifeStyleChartActivity.vitaminc')}
                        refTitle={I18n.t('LifeStyleChartActivity.mayoclinic')}
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-c/art-20363932"
                        max={150}
                        min={0}
                        sliderDefualtValue={80}
                        yAxisLabelValue="vitaminC"
                        yAxisLabelName="mg/day"
                        column="vitaminC"
                        yAxisLine="75@90"
                        gradient={[["100%", "green", "150"]]}
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>{I18n.t('LifeStyleChartActivity.recommendation')}</Text>
                                    The recommended daily amount of vitamin C for adult men is 90 milligrams and for adult women is 75 milligrams.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 450 }}>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
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
                                    The recommended daily amount of vitamin A is 900 micrograms (mcg) for adult men and 700 mcg for adult women.
                                    </Text>
                            </View>
                        }
                    />
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