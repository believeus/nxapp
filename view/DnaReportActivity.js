import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import AesCrypto from 'react-native-aes-kit';
import data from '../appdata';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';


export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DnaReportActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            barcode: '',
            option: {
                legend: {
                    data: ['Chronological Age<Biological Age', 'Chronological Age>Biological Age']
                },
                xAxis: [{
                    name: 'Chronological Age',
                    type: 'value',
                    nameLocation: 'middle',
                    nameGap: 20,
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                yAxis: [{
                    name: 'Biological Age',
                    nameLocation: 'middle',
                    nameGap: 22,
                    nameRotate: 90,
                    type: 'value',
                    scale: true,
                    nameTextStyle: { color: "#0071BC" },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [
                    {
                        name: 'Chronological Age<Biological Age',
                        type: 'scatter',
                        //圆点的颜色为红色
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        },
                        //自然年龄<生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Biological Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },
                    },
                    {
                        name: 'Chronological Age>Biological Age',
                        type: 'scatter',
                        //圆点的颜色为绿色
                        itemStyle: {
                            normal: {
                                color: 'green'
                            }
                        },
                        //自然年龄>生物学年龄
                        data: null,
                        markPoint: {
                            data: [
                                {
                                    name: 'Biological Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },


                    }]
            }
        };
    }

    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });

            fetch(data.url + "/user/report/findNtrLtBio.jhtml").then(res => res.json()).then((data) => {
                let v = []
                for (var i in data) {
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2);
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[0].data = v;
                this.setState({ option });
                this.echarts.webview.reload();

            })
            fetch(data.url + "/user/report/findNtrGtBio.jhtml").then(res => res.json()).then((data) => {
                let v = []
                for (var i in data) {
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2);
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[1].data = v;
                this.setState({ option });
                this.echarts.webview.reload();
            })
        });


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
                <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", height: 23 }}></View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ height: 35, flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "10%", height: 30 }}></View>
                            <TextInput
                                style={{ width: "70%", height: "100%", borderColor: '#0071BC', borderWidth: 1, borderRadius: 5, paddingVertical: 0 }}
                                onChangeText={(barcode) => this.setState({ barcode })}
                                placeholder={"Your barcode"}
                                value={this.state.barcode}
                            />
                            {this.state.barcode == "" ?
                                <View style={{ width: "15%", height: 35 }} >
                                    <TouchableOpacity onPress={() => {
                                        navigate.push("Scanner", {
                                            barcode: this.state.barcode,
                                            callback: (data) => {
                                                this.setState({ barcode: data })
                                            }
                                        })
                                    }}>
                                        <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={require("../image/scan.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{ width: "15%", height: 35 }} >

                                    <TouchableOpacity onPress={() => {
                                        const iv = '1010101010101010'
                                        let privatekey = this.state.user.privatekey
                                        let uuid = this.state.user.uuid
                                        //解密
                                        console.info(data.url + "user/report/upbarcode.jhtml?uuid=" + this.state.user.uuid + "&barcode=" + this.state.barcode)
                                        fetch(data.url + "user/report/upbarcode.jhtml?uuid=" + this.state.user.uuid + "&barcode=" + this.state.barcode).then(res => res.json()).then((data) => {
                                            switch (data.status) {
                                                case "invalid":
                                                    Alert.alert('Message', 'Invalid barcode');
                                                    break;
                                                case "pending":
                                                    Alert.alert('Message', 'Your report will be available in 21 working days.Please wait……');
                                                    break;
                                                case "processing":
                                                    Alert.alert('Message', "Detection is being processed.\nPlease wait……");
                                                    break;
                                                case "finished":
                                                    let option = Object.assign({}, this.state.option);
                                                    let biological = window.parseFloat(data.biological).toFixed(2);
                                                    let naturally = window.parseFloat(data.naturally).toFixed(2)
                                                    this.setState({ biological })
                                                    this.setState({ naturally })
                                                    let i = biological > naturally ? 0 : 1;
                                                    option.series[i].markPoint.data[0].value = biological
                                                    option.series[i].markPoint.data[0].xAxis = naturally
                                                    option.series[i].markPoint.data[0].yAxis = biological
                                                    this.setState({ option })
                                                    this.setState({ visual: true })
                                                    {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                                                    {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                                                    {/* 从而重新刷新webview数据 */ }
                                                    this.echarts.webview.reload();
                                                    break;
                                            }

                                        })

                                    }}>
                                        <Image style={{ width: "100%", height: "100%" }} resizeMode="center" source={require("../image/report.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>

                    <View style={{ height: 34, width: "100%" }}></View>
                    {this.state.visual == true ?
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <Image style={{ width: '100%', height: 234, }} resizeMode='contain' source={require("../image/enpic/rep1.png")}></Image>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>People age at different rates. Some “look” and “feel” older than their chronological age while other look younger than their chronological age.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 56, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 56, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our biological age is a better parameter of our health well being and life span than our chronological age.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>DNA is the hard ware, genetics is the operating system and DNA methylation and other epigenetic factors are the software that programs the genome.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 145, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 145, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>A paradigm shift in the search for biological age markers occurred with the discovery of the “epigenetic clock” by Horvath, which is based on measurement of DNA methylation status at hundreds of strategic positions in DNA. This "epigenetic clock" is a measure of our biological ages.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 123, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 123, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>In most people the "epigenetic age" measured by the epigenetic clock and the "chronological age" measured by the calendar are very similar. The correlation between the two measures across the population is close to 0.9 when 1 is a perfect correlation.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 145, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 145, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>However in some people the "epigenetic age" is different from the "chronological age". Sometimes the "epigenetic clock" moves faster than the "chronological clock".We consider a difference that is larger than the standard deviation (or the normal distribution in the population) as a significant change.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 167, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 167, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Studies suggest that accelerated “epigenetic clock” might be associated with increased risk for several age related chronic disease such as cardiovascular disease and cancer at later age. (link: https://www.ncbi.nlm.nih.gov/pubmed/?term=epigenetic+clock+disease). This is however still an open field and more studies are needed.</Text>
                                </View>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 99, width: '70%', fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 23, lineHeight: 26, }}>What is the<Text style={{ color: '#0071bc', fontSize: 21 }}> epiAging test?</Text><Text style={{ color: '#0071bc' }}> What does it mean?</Text></Text>
                                    <Image style={{ height: 99, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/rep2.png")}></Image>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 99, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>After extensive data mining, we have discovered a single age-related CG methylation region that was sufficient to accurately predict biological age using saliva.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 156, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 156, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We prepare DNA from your saliva and then measure the level of DNA methylation in several positions in a fragment of your genome using next generation sequencing and bisulfite mapping. Your states of DNA methylation are inserted into a methematical equation that calculates the "epigenetic age" as a function of the level of DNA methylation.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 223, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 223, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We consider it as a “red flag” when your “epigenetic age” deviates from your "chronological age" by one standard deviation. Standard deviation provides an idea about the distribution of difference from the mean in the normal population, which at this point of analysis is 5 years.At this stage, if your "epigenetic age" is 5 years older than your "chronological age" you might consider the result as a "red flag". As more tests are accumulated we will get a more accurate number of the “normal distribution”.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 134, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 134, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Although it is still not clear how one can decelerate his "epigenetic clock" , lifestyle changes recommended by most national medical associations are perhaps a starting point. An older age is a “red flag” not more that suggest that perhaps it is time to make some life style changes.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 56, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 56, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>A "red flag" might prompt you to act on your lifestyle or consult your physician for a check up.</Text>
                                </View>
                                <Image style={{ height: 113, width: '50%', alignSelf: 'flex-end' }} resizeMode='cover' source={require("../image/enpic/rep3.png")}></Image>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column', width: '45%' }}>
                                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, }}>What can i do if my </Text>
                                        <Image style={{ height: 123, }} resizeMode='contain' source={require("../image/enpic/rep4.png")}></Image>
                                    </View>
                                    <Text style={{ height: 99, width: '55%', fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 26, }}><Text style={{ color: '#0071bc', fontSize: 22 }}>"epigenetic Age" is Older?</Text></Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 99, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>"Epigenetics" is different from "genetics" in a substantial way that epigenetics is potentially reversible by dietary interventions and lifestyle changes. So, it might be possible to reverse the “epigenetic clock”.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Preliminary studies show that dietary changes can cause deceleration of epigenetic clock in certain people, however this is still an open question. ( https://www.ncbi.nlm.nih.gov/pubmed/30350398)</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 67, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 67, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Lifestyle changes including exercise and dietary habits have been recommended by national medical associations for some time, however, we need more data about the most advisable changes and they should be personalized.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <Text style={{ height: 289, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                        <Text style={{ height: 289, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>A way for us to learn about advisable lifestyle changes is sharing our experiences with others and analyzing the impact of differences in lifestyle in a large population. This is now possible using sharing technologies such as Apps as well as artificial intelligence that could determine how different inputs such as “lifestyle” habits affect an outcome--the “epigenetic clock".</Text>
                                    </View>
                                    <Image style={{ width: '40%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep5.png")}></Image>
                                </View>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <Image style={{ width: '100%', height: 234, }} resizeMode='contain' source={require("../image/enpic/rep6.png")}></Image>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 99, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 99, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our App links you to information on recommended lifestyle behaviors by important US national medical association as well as possible nutritional supplements such as SAMe, vitamin A, D and C.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 123, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 123, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>These links are updated regularly and we suggest that you keep updating by examining the links periodically. These recommendations are based on what “science” knows today, they are not perfect. With more data and more analysis science is improving.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 123, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 123, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our first report is based on the lifestyle data that you have entered which shows how far your lifestyle parameters deviate from consensus recommendations. You might decide to make changes based on this report.</Text>
                                </View>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <Image style={{ width: '100%', height: 221, }} resizeMode='contain' source={require("../image/enpic/rep7.png")}></Image>
                            <View style={{ height: 88, width: '80%', alignSelf: 'flex-end', }}>
                                <Text style={{ height: 24, fontSize: 16, }}>A dynamic long-term partnership </Text>
                                <Text style={{ height: 67, fontSize: 24, lineHeight: 28, color: '#0071bc' }}>to achieve "Healthy Aging"</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 34, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 34, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We suggest that you keep entering your life style data.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 89, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 89, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>You will update your life style data as regularly as you widh. You might update all questions, some or none. However, we believe that accurate reporting will allows us to provide you with a better analysis.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 56, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 56, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We suggest that in 6 months or maximally a year you submit your saliva to a second test.</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 123, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 123, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Your data will be anonymized. Your data and data from mamy other anonymoous users will be analyzed by artificial intelligenece to develop a "model",which measures the impact of life style changes on "epigenetic clock".</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Once more data is accumulated, the "model" will examine your life style data and results of the test will be shared with you.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We will analyze your "epigenetic age" and report on the progress and the lifestyle changes that you have made.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 56, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 56, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Possible routes for change will be offered based on our "model" and your data.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ height: 77, width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ height: 77, width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>We hope that together we will be able to coevolve your well being and our "epiAging" learning environment. </Text>
                                </View>
                            </View>

                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>



                            <View style={{ width: '90%', height: 289, alignSelf: 'center', marginTop: 28, borderRadius: 10, backgroundColor: '#f3f6fa' }}>
                                <View style={{ flexDirection: 'row', width: '96%', height: 189, marginTop: 23, borderBottomColor: '#c7c9cd', borderBottomWidth: 1, alignSelf: 'center' }}>
                                    <View style={{ width: '33%', height: 189, flexDirection: 'column', marginTop: 23 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-cho.png")}></Image>
                                        <View style={{ height: 67, width: '100%', paddingTop: 12 }}>
                                            <Text style={{ fontSize: 12, height: 24, fontFamily: 'FontAwesome', textAlign: 'center' }}>Your </Text>
                                            <Text style={{ fontSize: 12, height: 24, width: 123, fontFamily: 'FontAwesome', }}>/Chronological age/</Text>
                                        </View>
                                        <Text style={{ fontFamily: 'FontAwesome', fontSize: 34, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{this.state.naturally}</Text>
                                    </View>
                                    <View style={{ width: '34%', height: 189, marginLeft: 9 }}>
                                        <Image style={{ width: '100%', height: 189, }} resizeMode='contain' source={require("../image/icons/rep-man.png")}></Image>
                                    </View>
                                    <View style={{ width: '33%', height: 189, flexDirection: 'column', marginTop: 23 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-bio.png")}></Image>
                                        <View style={{ height: 67, width: '100%', paddingTop: 12, }}>
                                            <Text style={{ fontSize: 12, height: 24, fontFamily: 'FontAwesome', textAlign: 'center' }}>Your </Text>
                                            <Text style={{ fontSize: 12, height: 24, textAlign: 'center', fontFamily: 'FontAwesome', }}>/Biological age/</Text>
                                        </View>
                                        <Text style={{ fontFamily: 'FontAwesome', fontSize: 34, color: '#f15929', fontWeight: 'bold', textAlign: 'center' }}>{this.state.biological}</Text>
                                    </View>
                                </View>
                                {this.state.biological < this.state.naturally ?
                                    <View style={{ width: "96%", height: 56, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                        <Image style={{ width: "10%", height: 23, margin: 5 }} resizeMode="center" source={require("../image/smail.png")}></Image>
                                        <View style={{ width: "90%", height: 56, }}><Text style={{ color: "#3e9c9c", fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 37 }}>Your biological age is {Math.abs((this.state.naturally) - (this.state.biological)).toFixed(2)} years younger than your chronological age.</Text></View>
                                    </View>
                                    :
                                    <View style={{ width: "96%", height: 56, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                        <Image style={{ width: "10%", height: 23, margin: 5 }} resizeMode="center" source={require("../image/cry.png")}></Image>
                                        <View style={{ width: "90%", height: 56, }}><Text style={{ color: "#f15929", fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 37 }}>Your biological age is {Math.abs((this.state.naturally) - (this.state.biological)).toFixed(2)} years older than your chronological age.</Text></View>
                                    </View>
                                }
                            </View>
                        </View> : null
                    }
                    <View style={{ height: 34, width: "100%" }}></View>
                    <View style={{ height: 300, width: "100%", backgroundColor: 'pink', alignSelf: 'center' }}>
                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */}
                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */}
                        {/* 从而重新刷新webview数据 */}
                        <ECharts option={this.state.option} ref={(ref) => { this.echarts = ref }} />
                    </View>
                    <View style={{ width: '90%', height: 123, alignSelf: 'center', marginTop: 20, marginBottom: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 18, width: '6%' }} resizeMode="center" source={require("../image/icons/rep-green.png")}></Image>
                            <Image style={{ height: 18, width: '6%' }} resizeMode="center" source={require("../image/icons/rep-red.png")}></Image>
                            <Text style={{ height: 27, width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>(with a number in it)Your biological age </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 18, width: '12%', paddingLeft: 12, fontSize: 14, color: 'red' }}>●</Text>
                            <Text style={{ height: 45, width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Other people, who were tested, whose Biological age is older than Chronological age</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ height: 18, width: '12%', paddingLeft: 12, fontSize: 14, color: 'green' }}>●</Text>
                            <Text style={{ height: 45, width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Other people, who were tested, whose Biological age is younger than Chronological age</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
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