import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image, Alert, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import { encrypt, decrypt } from 'react-native-simple-encryption';
import data from '../appdata';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';
import FitImage from 'react-native-fit-image';

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
            display: false,
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
                                        this.setState({ display: true })
                                        let uuid = decrypt(this.state.user.publickey,  this.state.user.uuid)
                                        //解密
                                        console.info(data.url + "user/report/upbarcode.jhtml?uuid=" + uuid + "&barcode=" + this.state.barcode)
                                        fetch(data.url + "user/report/upbarcode.jhtml?uuid=" + uuid + "&barcode=" + this.state.barcode).then(res => res.json()).then((data) => {
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
                                            this.setState({ display: false
                                             })
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
                            <FitImage style={{ width: '100%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep1.png")}/>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.look')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.parameter')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.hardware')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.shift')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.clock')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.different')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.studies')}</Text>
                                </View>
                            </View>
                            <View style={{  width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '70%', fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 23, lineHeight: 26, }}>{I18n.t('DnaReportActivity.what')}<Text style={{ color: '#0071bc', fontSize: 21 }}>{I18n.t('DnaReportActivity.epiage')}</Text><Text style={{ color: '#0071bc' }}>{I18n.t('DnaReportActivity.mean')}</Text></Text>
                                    <Image style={{height:99, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/rep2.png")}></Image>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.cg')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.dna')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.redflag')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.changes')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.act')}</Text>
                                </View>
                                <Image style={{ height: 113, width: '50%', alignSelf: 'flex-end' }} resizeMode='contain' source={require("../image/enpic/rep3.png")}></Image>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column', width: '45%' }}>
                                        <Text style={{ height: 34, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, }}>{I18n.t('DnaReportActivity.do')} </Text>
                                        <Image style={{ height: 123, }} resizeMode='contain' source={require("../image/enpic/rep4.png")}></Image>
                                    </View>
                                    <Text style={{  width: '55%', fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 26, }}><Text style={{ color: '#0071bc', fontSize: 22 }}>{I18n.t('DnaReportActivity.older')}</Text></Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.genetics')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.open')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.exercise')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                        <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.way')}</Text>
                                    </View>
                                    <Image style={{ width: '40%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep5.png")}></Image>
                                </View>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <Image style={{ width: '100%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep6.png")}></Image>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.links')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.updated')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.first')}</Text>
                                </View>
                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <Image style={{ width: '100%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep7.png")}></Image>
                            <View style={{ height: 88, width: '80%', alignSelf: 'flex-end', }}>
                                <Text style={{  fontSize: 16, }}>{I18n.t('DnaReportActivity.dynamic')}</Text>
                                <Text style={{  fontSize: 24, lineHeight: 28, color: '#0071bc' }}>{I18n.t('DnaReportActivity.achive')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.suggest')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.update')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.second')}</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.anonymized')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.model')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.analyze')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.routes')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{  width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{  width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.coevolve')}</Text>
                                </View>
                            </View>

                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>



                            <View style={{ width: '90%', height: 289, alignSelf: 'center', marginTop: 28, borderRadius: 10, backgroundColor: '#f3f6fa' }}>
                                <View style={{ flexDirection: 'row', width: '96%', height: 189, marginTop: 23, borderBottomColor: '#c7c9cd', borderBottomWidth: 1, alignSelf: 'center' }}>
                                    <View style={{ width: '33%',  flexDirection: 'column', marginTop: 23 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-cho.png")}></Image>
                                        <View style={{ width: '100%', paddingTop: 12 }}>
                                            <Text style={{ fontSize: 12,  fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.your')} </Text>
                                            <Text style={{ fontSize: 12,lineHeight:19,  width: 123, fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                        </View>
                                        <Text style={{ fontFamily: 'FontAwesome', fontSize: 34, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{this.state.naturally}</Text>
                                    </View>
                                    <View style={{ width: '34%', height: 189, marginLeft: 9 }}>
                                        <Image style={{ width: '100%', height: 189, }} resizeMode='contain' source={require("../image/icons/rep-man.png")}></Image>
                                    </View>
                                    <View style={{ width: '33%', flexDirection: 'column', marginTop: 23 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-bio.png")}></Image>
                                        <View style={{ width: '100%', paddingTop: 12, }}>
                                            <Text style={{ fontSize: 12,  fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.your')}  </Text>
                                            <Text style={{ fontSize: 12, lineHeight:19, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.bio')}</Text>
                                        </View>
                                        <Text style={{ fontFamily: 'FontAwesome', fontSize: 34, color: '#f15929', fontWeight: 'bold', textAlign: 'center' }}>{this.state.biological}</Text>
                                    </View>
                                </View>
                                {this.state.biological < this.state.naturally ?
                                    <View style={{ width: "96%", height: 56, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                        <Image style={{ width: "10%", height: 23, margin: 5 }} resizeMode="center" source={require("../image/smail.png")}></Image>
                                        <View style={{ width: "90%", height: 56, }}><Text style={{ color: "#3e9c9c", fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 37 }}>{I18n.t('DnaReportActivity.is')} {Math.abs((this.state.naturally) - (this.state.biological)).toFixed(2)}{I18n.t('DnaReportActivity.younger')} </Text></View>
                                    </View>
                                    :
                                    <View style={{ width: "96%", height: 56, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                        <Image style={{ width: "10%", height: 23, margin: 5 }} resizeMode="center" source={require("../image/sad.png")}></Image>
                                        <View style={{ width: "90%", height: 56, }}><Text style={{ color: "#f15929", fontFamily: 'NotoSansHans-Light', fontSize: 16, lineHeight: 37 }}>{I18n.t('DnaReportActivity.is')}  {Math.abs((this.state.naturally) - (this.state.biological)).toFixed(2)}{I18n.t('DnaReportActivity.old')} </Text></View>
                                    </View>
                                }
                            </View>
                        </View> : null
                    }
                    <View style={{ height: 34, width: "100%" }}></View>
                    {this.state.display ?
                        <ActivityIndicator size="large" color="#0071BC" />
                        : null}
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
                            <Text style={{ width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.yourbio')} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{  width: '12%', paddingLeft: 12, fontSize: 14, color: 'red' }}>●</Text>
                            <Text style={{  width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('DnaReportActivity.otherolder')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{  width: '12%', paddingLeft: 12, fontSize: 14, color: 'green' }}>●</Text>
                            <Text style={{  width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('DnaReportActivity.otheryounger')}</Text>
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