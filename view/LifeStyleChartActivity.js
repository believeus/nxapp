import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';
import SliderLineChart from './SliderLineChart';
import RatingChart from './RatingChart';
import BMIChart from './BMIChart';

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
                <View>
                    <View style={{ width: "100%", height: 60, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>Lifestyle Questionnaire</Text></View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef" }}>
                        <View style={{ width: "92%" }}>
                            <Text style={{}}>A healthy or unhealthy lifestyle will most likely be transmitted across generations. According to the study done by Case et al.</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>"(2002), when a 0-3-year-old child has a mother who practices a healthy lifestyle, this child will be 27% more likely to become healthy and adopt the same lifestyle.</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>For instance, high-income parents are more likely to eat organic food, have time to exercise and provide the best living condition to their children.On the other hand, low-income parents are more likely to participate in unhealthy activities such as smoking to help them release poverty-related stress and depression.</Text>
                            <View style={{ width: "100%", height: 10 }}></View>
                            <Text style={{}}>Parents are the first teacher for every child. Everything that parents do will be very likely transferred to their children through the learning process.</Text>
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
                        yAxisLine="2000@2500"
                        column="calories"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>An average woman needs to eat about 2000 calories per day to maintain, and 1500 calories to lose one pound of weight per week. An average man needs 2500 calories to maintain, and 2000 to lose one pound of weight per week.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                <View>
                    <BMIChart
                        title="Weight & Height"
                        refTitle="Source: Centers for Disease……"
                        refUrl="https://www.cdc.gov/healthyweight/index.html"
                        yAxisLabelValue="bmi"
                        yAxisLabelName="bmi"
                        yAxisLine="60@100"
                        column="bmi"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    <Text>If your BMI is less than 18.5, it falls within the underweight range.</Text>
                                    <Text>If your BMI is 18.5 to 24.9, it falls within the normal or Healthy Weight range.</Text>
                                    <Text>If your BMI is 25.0 to 29.9, it falls within the overweight range.</Text>
                                    <Text>If your BMI is 30.0 or higher, it falls within the obese range.</Text>
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Heart rate (beats/min)"
                        refTitle="Source:American Heart Association"
                        refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse"
                        max="220"
                        sliderDefualtValue={60}
                        yAxisLabelValue="heartrate"
                        yAxisLabelName="beats/min"
                        yAxisLine="60@100"
                        column="heartrate"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Your resting heart rate is the heart pumping the lowest amount of blood
                                    you need because you’re not exercising. If you’re sitting or lying and you’re calm, relaxed and aren’t ill,
                                    your heart rate is normally between 60 (beats per minute) and 100 (beats per minute).
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Blood pressure (mmHG)"
                        refTitle="Source:American Heart Association"
                        refUrl="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
                        max="270"
                        sliderDefualtValue={80}
                        yAxisLabelValue="systolicBP"
                        yAxisLabelName="mmHg"
                        yAxisLine="60@100"
                        column="systolicBP"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Blood pressure numbers of less than 120/80 mm Hg are considered within thenormal range.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Diastolic BP"
                        max="180"
                        sliderDefualtValue={80}
                        yAxisLabelValue="diastolicBP"
                        yAxisLabelName="mmHg"
                        yAxisLine="80@180"
                        column="diastolicBP"
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Cholesterol (mg/dL)"
                        refTitle="Source:American Heart Association"
                        refUrl="https://www.heart.org/en/health-topics/cholesterol/about-cholesterol/what-your-cholesterol-levels-mean"
                        max="360"
                        sliderDefualtValue={80}
                        yAxisLabelValue="cholesterol"
                        yAxisLabelName="mg/dl"
                        column="cholesterol"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    All adults age 20 or older should have their cholesterol (and other risk factors) checked every four to six years.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Meditation"
                        refTitle="Source:Mayo Clinic"
                        refUrl="https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858"
                        max="24"
                        sliderDefualtValue={5}
                        yAxisLabelValue="meditation"
                        yAxisLabelName="h/day"
                        column="meditation"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Meditation can wipe away the day's stress, bringing with it inner peace. See how you can easily learn to practice meditation whenever you need it most.
                                </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Cardio Vascular Health"
                        refTitle="Source:American Heart Association"
                        refUrl="https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults"
                        max="200"
                        sliderDefualtValue={80}
                        yAxisLabelValue="sport"
                        yAxisLabelName="minutes/week"
                        column="sport"
                        yAxisLine="50@150"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Sleep"
                        refTitle="Source: National Sleep Foundation"
                        refUrl="https://www.sleepfoundation.org/"
                        max="24"
                        sliderDefualtValue={8}
                        yAxisLabelValue="sleep"
                        yAxisLabelName="hours/day"
                        column="sleep"
                        yAxisLine="5@8@10"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    NATIONAL SLEEP FOUNDATION recommonds 7-9 hours for 18-64 years, and doesn't recommend less than 6 and more than 11 hours for 8-25 years and less than 6 and more than 10 hours for 26-64 years.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="How about your active sex life"
                        max="60"
                        sliderDefualtValue={10}
                        yAxisLabelValue="sexfrequency"
                        yAxisLabelName="times/day"
                        column="sexfrequency"
                    />
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                </View>
                <View>
                    <RatingChart
                        title="Satisfaction with sexual Life"
                        column="sexscore"
                        yAxisLabelValue="sexscore"
                        yAxisLabelName="score"
                        max="5"
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Alcohol"
                        refTitle="Source: American Cancer Society"
                        refUrl="https://www.cancer.org/"
                        max="100"
                        sliderDefualtValue={20}
                        yAxisLabelValue="alcohol"
                        yAxisLabelName="gram/day"
                        column="alcohol"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Drink no more than 1 drink per day for women or 2 per day for men.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Smoking"
                        max="100"
                        sliderDefualtValue={20}
                        yAxisLabelValue="smoking"
                        yAxisLabelName="sticks/day"
                        column="smoking"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    Stop Smoking
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Vitamin D"
                        refTitle="Source: Mayo Clinic"
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-d/art-20363792"
                        max="1000"
                        sliderDefualtValue={200}
                        yAxisLabelValue="vitaminD"
                        yAxisLabelName="IU/day"
                        column="vitaminD"
                        yAxisLine="400@600@800"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    The recommended daily amount of vitamin D is 400 international units (IU) for children up to age 12 months, 600 IU for ages 1 to 70 years, and 800 IU for people over 70 years.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Vitamin C"
                        refTitle="Source: Mayo Clinic"
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-c/art-20363932"
                        max="150"
                        sliderDefualtValue={80}
                        yAxisLabelValue="vitaminC"
                        yAxisLabelName="mg/day"
                        column="vitaminC"
                        yAxisLine="75@90"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
                                    The recommended daily amount of vitamin C for adult men is 90 milligrams and for adult women is 75 milligrams.
                                    </Text>
                            </View>
                        }
                    />
                </View>
                <View>
                    <View style={{ width: "100%", height: 10, backgroundColor: "#efefef" }}></View>
                    <SliderLineChart
                        title="Vitamin A"
                        refTitle="Source: Mayo Clinic"
                        refUrl="https://www.mayoclinic.org/drugs-supplements-vitamin-a/art-20365945"
                        max="1500"
                        sliderDefualtValue={80}
                        yAxisLabelValue="vitaminA"
                        yAxisLabelName="mcg/day"
                        column="vitaminA"
                        yAxisLine="700@900"
                        desc={
                            <View style={{ width: "90%" }}>
                                <Text style={{ fontSize: 12 }}>
                                    <Text style={{ fontWeight: "bold" }}>Recommendation:</Text>
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