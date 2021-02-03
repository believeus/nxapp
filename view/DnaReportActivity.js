import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, Alert, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Modal, Button } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper"
import { decrypt } from 'react-native-simple-encryption'
import ToggleSwitch from 'toggle-switch-react-native'
import Input from "react-native-input-validation"
import { WebView } from 'react-native-webview';
import ProgressCircle from 'react-native-progress-circle'
import data from '../appdata'
import Session from '../storage/Session'
import { I18n } from '../locales/i18n'

export default class DnaReportActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DnaReportActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            rage: 0,
            itemBox: [],
            ageBox: [],
            switchonBox: [],
            emailBox: [],
            notifyEmail: "",
            switchon: false,
            statusbar: false,
            animating: false,
            barcode: '',
            btnBuildPdfdisabled: true,
            display: false,
            pdfbox: [],
            option: {
                legend: {
                    data: ['Chronological Age<Epigenetic Age', 'Chronological Age>Epigenetic Age']
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
                    name: 'Epigenetic Age',
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
                        name: 'Chronological Age<Epigenetic Age',
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
                                    name: 'Epigenetic Age',
                                    value: null,
                                    xAxis: null,
                                    yAxis: null
                                }
                            ]
                        },
                    },
                    {
                        name: 'Chronological Age>Epigenetic Age',
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
                                    name: 'Epigenetic Age',
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
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2)
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
                    let naturally = window.parseFloat(data[i].naturally).toFixed(2)
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[1].data = v;
                this.setState({ option });
                this.echarts.webview.reload();
            })
            // ALTER TABLE epi.udata ADD pendingtime BIGINT DEFAULT 0 NOT NULL;
            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
            fetch(data.url + "user/report/findDataByUuid.jhtml?uuid=" + uuid).then(res => res.json()).then((data) => {
                for (let i in data) {
                    let _31day = (31 * 24 * 3600 * 1000) + (data[i].pendingTime == 0 ? 0 : data[i].curtime - data[i].pendingTime)
                    let time = {}
                    if (data[i].status == "in-transit") time.leftseconds = _31day
                    //pendding状态下当前时间离到期时间还剩多少毫秒到期
                    else if (data[i].status == "pending") time.leftseconds = (data[i].detectTime + _31day) - data[i].pendingTime
                    //processing状态下当前时间离到期时间还剩多少毫秒到期
                    else if (data[i].status == "processing") time.leftseconds = (data[i].detectTime + _31day) - data[i].curtime
                    else if (data[i].status == "ready") { time.leftseconds = 0 }
                    let process = parseInt(((_31day - time.leftseconds) / _31day) * 100)
                    let vbarcode = {}
                    vbarcode.val = data[i].barcode
                    console.info(data[i].barcode + " allday:" + _31day / (24 * 3600 * 1000) + " move day:" + ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))
                    vbarcode.remain = parseFloat((_31day / (24 * 3600 * 1000) - ((data[i].curtime - data[i].detectTime) / (24 * 3600 * 1000)))).toFixed(2)
                    vbarcode.stat = data[i].status
                    vbarcode.naturally = data[i].naturally
                    vbarcode.biological = data[i].biological
                    vbarcode.createTime = new Date(data[i].createTime).toLocaleDateString()
                    vbarcode.detectTime = (data[i].status == "in-transit") ? I18n.t("DnaReportActivity.intransit") : new Date(data[i].detectTime).toLocaleDateString()
                    if (data[i].status == "in-transit") { vbarcode.endtime = I18n.t("DnaReportActivity.intransit") }
                    else if (data[i].status == "pending") { vbarcode.endtime = I18n.t("DnaReportActivity.Pendding") }
                    else if (data[i].status == "processing") { vbarcode.endtime = new Date(data[i].detectTime + _31day).toLocaleDateString() }
                    else if (data[i].status == "ready") { vbarcode.endtime = I18n.t("DnaReportActivity.done") }

                    vbarcode.email = data[i].email
                    vbarcode.processing = process
                    vbarcode.switchon = data[i].allow == 1 ? true : false
                    this.state.itemBox.push(vbarcode)
                    this.state.ageBox[i] = vbarcode.naturally ? vbarcode.naturally : 0
                    this.state.switchonBox[i] = vbarcode.switchon
                    this.state.emailBox[i] = data[i].email
                }
                this.setState({ ageBox: this.state.ageBox })
                this.setState({ itemBox: this.state.itemBox })
                this.setState({ switchonBox: this.state.switchonBox })
                this.setState({ emailBox: this.state.emailBox })
                this.setState({ statusbar: true })
            })
        });



    }
    render() {
        this.navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>

                {this.state.display == true ?
                    <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                        <WebView ref={(ref) => { this.brower = ref }} source={{ uri: this.state.url }} startInLoadingState={true} />
                        <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                            <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                            </TouchableOpacity>
                        </View>
                    </Modal> : null
                }

                {/* <ImageBackground style={{ width: '100%', height: 223 }} resizeMode='cover' source={require("../image/enpic/rep1.png")}>
                </ImageBackground> */}

                <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", alignItems: "center", marginTop: 45 }}>
                        <View style={{ width: "90%", alignSelf: "center", height: 300 }}>
                            <View style={{ height: 40, width: "100%" }}>
                                <TextInput
                                    style={{ fontSize: 16, fontWeight: "600", width: "100%", height: "100%", borderColor: '#c5f3fe', borderWidth: 3, borderRadius: 5, paddingVertical: 0, paddingLeft: 5 }}
                                    onChangeText={(barcode) => this.setState({ barcode })}
                                    placeholder={I18n.t("DnaReportActivity.yourbarcode")}
                                    placeholderTextColor='#9b9b9b'
                                    value={this.state.barcode}
                                />
                            </View>
                            <Text style={{ width: "100%", height: 45, lineHeight: 45, color: "#9b9b9b", textAlign: "center", textAlignVertical: "center", fontSize: 16, fontFamily: 'NotoSansHans-Light' }}>or Scan Your kit ↓</Text>
                            <View style={{ width: "100%", height: 80, alignSelf: "center", marginTop: 20 }} >
                                <TouchableOpacity onPress={() => {
                                    this.navigate.push("Scanner", {
                                        barcode: this.state.barcode,
                                        callback: (data) => {
                                            this.setState({ barcode: data })
                                        }
                                    })
                                }}>
                                    <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={require("../image/scan.png")}></Image>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "100%", height: 35, backgroundColor: "#e64d85", borderRadius: 5, marginTop: 40, alignSelf: "center" }} >
                                <TouchableOpacity disabled={this.state.barcode.length != 0 ? false : true} onPress={() => {
                                    //this.setState({ display: true })
                                    //解密
                                    let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    fetch(data.url + "user/report/upbarcode.jhtml?uuid=" + uuid + "&barcode=" + this.state.barcode).then(res => res.json()).then((data) => {
                                        switch (data.status) {
                                            case "invalid":
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"));
                                                break
                                            case "in-transit":
                                                var barcode = {}
                                                barcode.val = this.state.barcode
                                                barcode.stat = data.status
                                                barcode.createTime = "in-transit"
                                                barcode.endtime = "in-transit"
                                                barcode.processing = 0
                                                barcode.naturally = 0
                                                barcode.switchon = false
                                                //判断该barcode是否存在
                                                if (JSON.stringify(this.state.itemBox).indexOf(barcode.val) == -1) {
                                                    this.state.itemBox.push(barcode)
                                                    this.setState({ itemBox: this.state.itemBox })
                                                    this.setState({ statusbar: true })
                                                }
                                                Alert.alert(I18n.t("DnaReportActivity.barcodesuccess"), I18n.t("DnaReportActivity.wait"))
                                                break
                                            case "pending":
                                                this.setState({ statusbar: false })
                                                Alert.alert(I18n.t("DnaReportActivity.barcodesuccess"), I18n.t("DnaReportActivity.pendingwait"))
                                                break;
                                            case "processing":
                                                this.setState({ visual: false })
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                break;
                                            case "ready":
                                                this.setState({ statusbar: true })
                                                this.setState({ btnBuildPdfdisabled: false })
                                                let option = Object.assign({}, this.state.option);
                                                let biological = window.parseFloat(data.biological).toFixed(2);
                                                let naturally = window.parseFloat(data.naturally).toFixed(2)
                                                this.setState({ biological })
                                                this.setState({ naturally })
                                                let i = biological > naturally ? 0 : 1;
                                                this.echarts.webview.reload();
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
                                        this.setState({ display: false })
                                    })

                                }}>
                                    <Text style={{ width: "100%", height: 35, textAlign: "center", fontFamily: 'NotoSansHans-Medium', lineHeight: 35, color: "white" }}>{I18n.t('DnaReportActivity.Registerkit')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                        <View style={{ width: "90%", alignItems: "center" }}>
                            {this.state.statusbar ?
                                <View style={{ width: "100%", height: 35, borderBottomWidth: 1, borderBottomColor: "#f5f5f5", flexDirection: "row" }}>
                                    <View style={{ width: "70%", height: 35 }}><Text style={{ color: "#808080", textAlign: 'left', fontFamily: 'NotoSansHans-Medium', fontSize: 14, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>{I18n.t('DnaReportActivity.baseinfo')}</Text></View>
                                    <View style={{ width: "30%", height: 35 }}><Text style={{ color: "#808080", textAlign: "left", fontFamily: 'NotoSansHans-Medium', fontSize: 14, fontWeight: "bold", marginBottom: 5, marginTop: 10 }}>{I18n.t('DnaReportActivity.status')}</Text></View>
                                </View>

                                : null}
                            {this.state.itemBox ?
                                this.state.itemBox.map((barcode, i) => {
                                    let j = i
                                    return <TouchableOpacity key={barcode.val}
                                        onPress={() => {
                                            //赋值
                                            this.setState({ rage: this.state.ageBox[j] })
                                            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                            fetch(data.url + "/user/report/" + uuid + "/" + barcode.val + "/findEmail.jhtml").then(data => data.json()).then((udata) => {
                                                if (barcode.stat == "ready") {
                                                    this.setState({ animating: true })
                                                    this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
                                                    this.setState({ ageBox: this.state.ageBox })
                                                    console.info(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j])
                                                    //更改实际年龄
                                                    fetch(data.url + "user/age/upmyage.jhtml?uuid=" + uuid + "&barcode=" + barcode.val + "&myage=" + this.state.ageBox[j]).then(res => res.text()).then((data) => {
                                                        this.setState({ btnBuildPdfdisabled: false })
                                                        let option = Object.assign({}, this.state.option);
                                                        let biological = window.parseFloat(barcode.biological).toFixed(2);
                                                        //let naturally = window.parseFloat(barcode.naturally).toFixed(2)
                                                        let naturally = this.state.ageBox[j]
                                                        this.setState({ biological })
                                                        this.setState({ naturally })
                                                        let i = biological > naturally ? 0 : 1;
                                                        option.series[i].markPoint.data[0].value = biological
                                                        //自然年龄
                                                        this.state.ageBox[j] = this.state.ageBox[j] == "" ? 0 : this.state.ageBox[j]
                                                        this.setState({ ageBox: this.state.ageBox })
                                                        //自然年龄
                                                        option.series[i].markPoint.data[0].xAxis = this.state.ageBox[j]
                                                        option.series[i].markPoint.data[0].yAxis = biological
                                                        this.setState({ option })
                                                        this.setState({ visual: true })
                                                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */ }
                                                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */ }
                                                        {/* 从而重新刷新webview数据 */ }
                                                        this.echarts.webview.reload()
                                                        this.setState({ animating: false })
                                                    })
                                                } else if (barcode.stat == "processing") {
                                                    this.setState({ visual: false })
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                } else if (barcode.stat == "pending") {
                                                    this.setState({ visual: false })
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pendingwait"));
                                                }
                                                this.setState({ barcode: barcode.val })
                                            })

                                        }}>
                                        <View key={barcode.val} style={{ width: "100%", height: 267, borderBottomWidth: 1, borderBottomColor: "#999999", fontFamily: 'NotoSansHans-Light', }}>
                                            <View style={{ width: "100%", height: 10 }}></View>
                                            <View style={{ width: "100%", height: 29 }}>
                                                <Text>{I18n.t('DnaReportActivity.barcode')}：{barcode.val}</Text>
                                            </View>
                                            <View style={{ width: "100%", height: 150, flexDirection: "row", }}>
                                                <View style={{ width: "70%",height:150 }}>
                                                    <View style={{ width: "100%", height: 29 }}>
                                                        <Text >{I18n.t('DnaReportActivity.regtime')}：{barcode.createTime}</Text>
                                                    </View>
                                                    <View style={{ width: "100%", height: 29 }}>
                                                        <Text>{I18n.t('DnaReportActivity.detectTime')}：{barcode.detectTime}</Text>
                                                    </View>
                                                    <View style={{ width: "100%", height: 29 }}>
                                                        {barcode.stat == "ready" ?
                                                            <Text >{I18n.t('DnaReportActivity.status')}：{barcode.endtime}</Text>
                                                            :
                                                            <Text>{I18n.t('DnaReportActivity.endtime')}：{barcode.endtime}</Text>
                                                        }
                                                    </View>
                                                    {barcode.stat == "in-transit" ?
                                                        null :
                                                        <View>
                                                            {barcode.stat == "ready" ?
                                                                null :
                                                                <View style={{ width: '100%', height: 29 }}>
                                                                    <Text>{I18n.t('DnaReportActivity.remaining_days')}: {barcode.remain}</Text>
                                                                </View>
                                                            }

                                                            <View style={{ width: "100%", flexDirection: "row" }}>

                                                                <Text style={{height:29, lineHeight:29}}>{I18n.t('DnaReportActivity.yourage')}：</Text>
                                                                <TextInput style={{
                                                                    height: 29,
                                                                    width: '30%',
                                                                    borderWidth: 1.5,
                                                                    borderColor: '#c5f3fe',
                                                                    backgroundColor: "#f8f8f8",
                                                                    fontSize: 14,
                                                                    borderRadius: 5,
                                                                    paddingVertical: 0,
                                                                    textAlign: "center"
                                                                }}
                                                                    keyboardType="numeric"
                                                                    defaultValue={"0"}
                                                                    value={this.state.ageBox[i] ? String(this.state.ageBox[i]) : ""}
                                                                    onChangeText={(val) => {
                                                                        let data = val.replace(/[^\d.]/g, '')
                                                                        this.state.ageBox[i] = data
                                                                        this.setState({ ageBox: this.state.ageBox })
                                                                    }}
                                                                />
                                                            </View>
                                                        </View>}

                                                </View>
                                                <View style={{ width: "30%", height: "100%", alignItems: "center", justifyContent: "center", marginLeft: 6 }}>
                                                    <ProgressCircle
                                                        percent={parseInt(barcode.processing)}
                                                        marginTop={1}
                                                        radius={50}
                                                        borderWidth={16}
                                                        color="#3399FF"
                                                        shadowColor="#999"
                                                        bgColor="#fff">
                                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{barcode.processing}%</Text>
                                                    </ProgressCircle>
                                                    <Text style={{ fontSize: 12, backgroundColor: "#3399FF", color: '#fff', height: 23, lineHeight: 23, width: "89%", textAlign: 'center', borderRadius: 20, marginBottom: 16, marginTop: 10 }}>View Report</Text>
                                                </View>
                                            </View>
                                            {barcode.stat == "in-transit" ?
                                                null :
                                                <View style={{ width: "100%", height: 29, flexDirection: "row" }}>
                                                    <View style={{ width: "75%" }}>
                                                        <Input style={{
                                                            height: 29,
                                                            width: '100%',
                                                            borderWidth: 1.5,
                                                            borderColor: '#c5f3fe',
                                                            backgroundColor: "#f8f8f8",
                                                            fontSize: 14,
                                                            borderRadius: 5,
                                                            borderWidth: 1,
                                                            paddingVertical: 0
                                                        }}
                                                            errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 0, borderRadius: 5 }}
                                                            errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                                            placeholder={I18n.t("RegisterActivity.email")} placeholderTextColor='#0071bc' validator="email"
                                                            onValidatorExecuted={(isvalid) => {

                                                            }}
                                                            validatorExecutionDelay={100}
                                                            onChangeText={(email) => {
                                                                this.state.switchonBox[j] = false
                                                                this.setState({ switchonBox: this.state.switchonBox })
                                                                this.state.emailBox[j] = email
                                                                this.setState({ emailBox: this.state.emailBox })
                                                            }
                                                            }
                                                            defaultValue={barcode.email}
                                                        />
                                                    </View>
                                                    <View style={{ width: "5%", height: 29 }}></View>
                                                    <View style={{ width: "20%" }}>
                                                        <View style={{ width: "100%", height: 8 }}></View>
                                                        <ToggleSwitch
                                                            isOn={this.state.switchonBox[j]}
                                                            onColor="green"
                                                            offColor="grey"
                                                            labelStyle={{ color: "black", fontWeight: "900" }}
                                                            size="small"
                                                            onToggle={isOn => {
                                                                let mail = this.state.emailBox[j]
                                                                let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/
                                                                if (!pattern.test(mail)) {
                                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.emailFormat"))
                                                                    return
                                                                }
                                                                let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                                                let allow = isOn ? 1 : 0;
                                                                let url = data.url + "/user/report/" + uuid + "/" + mail + "/" + barcode.val + "/" + allow + "/notify.jhtml"
                                                                fetch(url).then(res => res.text()).then((data) => {
                                                                    if (data == "error") {
                                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"))
                                                                    } else {
                                                                        this.state.switchonBox[j] = isOn
                                                                        this.setState({ switchonBox: this.state.switchonBox })
                                                                    }
                                                                })
                                                            }}
                                                        />
                                                        <Text style={{ fontSize: 10 }}>{I18n.t("DnaReportActivity.allow")}</Text>
                                                    </View>
                                                </View>
                                            }
                                        </View>
                                        <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                                    </TouchableOpacity>
                                }) :
                                null

                            }
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 5, backgroundColor: "#f5f5f5" }}></View>
                    <View style={{ height: 300, width: "100%", backgroundColor: 'pink', alignSelf: 'center', marginTop: 34 }}>
                        {/* 因为Echarts的内核是封装webview,当动态设置option时,有时候没反应,需要动态刷新一下,所以要获得ECharts的引用 */}
                        {/* 通过获取ECharts的引用,从而获取webview,获得webview之后可以执行 this.echarts.webview.reload(); */}
                        {/* 从而重新刷新webview数据 */}
                        <ECharts option={this.state.option} ref={(ref) => { this.echarts = ref }} />
                    </View>
                    {this.state.display ? <ActivityIndicator size="large" color="#0071BC" /> : null}
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 12, marginBottom: 12, backgroundColor: '#f7f8fc', paddingTop: 15, paddingBottom: 15, paddingLeft: 5, paddingRight: 5, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 18, width: '3%', marginRight: '2%' }} resizeMode="contain" source={require("../image/icons/rep-green.png")}></Image>
                            <Image style={{ height: 18, width: '3%', marginRight: '4%' }} resizeMode="contain" source={require("../image/icons/rep-red.png")}></Image>
                            <Text style={{ width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.yourbio')} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '12%', paddingLeft: 12, fontSize: 14, color: 'red' }}>●</Text>
                            <Text style={{ width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('DnaReportActivity.otherolder')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: '12%', paddingLeft: 12, fontSize: 14, color: 'green' }}>●</Text>
                            <Text style={{ width: '88%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>{I18n.t('DnaReportActivity.otheryounger')}</Text>
                        </View>
                    </View>
                    {this.state.visual == true ?
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', height: 289, alignSelf: 'center', marginTop: 23, marginBottom: 12, borderRadius: 10, backgroundColor: '#f7f8fc' }}>
                                <View style={{ flexDirection: 'row', width: '96%', height: 189, marginTop: 12, borderBottomColor: '#c7c9cd', borderBottomWidth: 1, alignSelf: 'center' }}>
                                    <View style={{ width: '36%', flexDirection: 'column', marginTop: 12 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-cho.png")}></Image>
                                        <View style={{ width: '100%', }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.your')} </Text>
                                            <Text style={{ fontSize: 12, lineHeight: 14, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                        </View>
                                        {parseFloat(this.state.naturally) > 0 ?
                                            <View style={{ width: '100%', height: 23, flexDirection: 'column', }}>
                                                <Text style={{ fontFamily: 'FontAwesome', fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{this.state.naturally}</Text>
                                                <View style={{ width: '100%' }}>
                                                    <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.expected')} </Text>
                                                    <Text style={{ fontSize: 12, lineHeight: 14, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                                </View>
                                                <Text style={{ fontFamily: 'FontAwesome', lineHeight:14,fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{parseFloat((-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144)).toFixed(2)}</Text>
                                            </View>
                                            :
                                            <View style={{ width: '100%', height: 23, flexDirection: 'column', }}>
                                                <Text style={{ fontFamily: 'FontAwesome',paddingTop:5, fontSize: 12, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>NA(non-available)</Text>
                                                <View style={{ width: '100%', paddingTop: 12 }}>
                                                    <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.expected')} </Text>
                                                    <Text style={{ fontSize: 12, lineHeight: 14, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                                </View>
                                                <Text style={{ fontFamily: 'FontAwesome',lineHeight:14,paddingTop:10, fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{parseFloat((-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144)).toFixed(2)}</Text>
                                            </View>
                                        }

                                    </View>
                                    <View style={{ width: '30%', height: 189, }}>
                                        <Image style={{ width: '100%', height: 189, }} resizeMode='contain' source={require("../image/icons/rep-man.png")}></Image>
                                    </View>
                                    <View style={{ width: '33%', flexDirection: 'column', marginTop: 12 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-bio.png")}></Image>
                                        <View style={{ width: '100%', paddingTop: 24, }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.your')}  </Text>
                                            <Text style={{ fontSize: 12, lineHeight: 19, textAlign: 'center', fontFamily: 'FontAwesome', overflow: 'hidden', }}>{I18n.t('DnaReportActivity.bio')}</Text>
                                        </View>
                                        <Text style={{ fontFamily: 'FontAwesome', fontSize: 24, color: '#f15929', fontWeight: 'bold', textAlign: 'center' }} numberOfLines={1}>{this.state.biological}</Text>
                                    </View>
                                </View>

                                {/* <View style={{ width: '100%' }}>
                                        <View style={{ width: "90%", height: 67, alignSelf: 'center', alignItems: 'center', flexDirection: "row", }}>
                                            <Image style={{ width: "10%", height: 23, }} resizeMode="contain" source={require("../image/smail.png")}></Image>
                                            <View style={{ width: "90%", lineHeight: 23 }}><Text style={{ color: "#f15929", fontSize: 16, fontWeight: "bold" }}>{I18n.t('DnaReportActivity.is')} {this.state.biological} </Text></View>
                                        </View>
                                    </View> */}

                                <View>
                                    {this.state.rage == 0 ?
                                        this.state.biological < (-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144) ?
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23, }} resizeMode="contain" source={require("../image/smail.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#3e9c9c", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144) - parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.younger')} </Text></View>
                                            </View>
                                            :
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23, }} resizeMode="contain" source={require("../image/sad.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#f15929", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((-1.6394 + (Math.sqrt(2.6876 + 0.0288 * -((parseFloat(this.state.biological)) + 7.5806)))) / (-0.0144) - parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.old')} </Text></View>
                                            </View>

                                        :
                                        this.state.biological < this.state.rage ?
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23, }} resizeMode="contain" source={require("../image/smail.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#3e9c9c", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((this.state.rage) - parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.lower')} </Text></View>
                                            </View>
                                            :
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23, }} resizeMode="contain" source={require("../image/sad.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#f15929", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((this.state.rage) - parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.higher')} </Text></View>
                                            </View>

                                    }
                                </View>

                            </View>
                            <TouchableOpacity onPress={() => { this.setState({ url: "https://epigenexperts.ca/epigenetic-age-calculator/" }); this.setState({ display: true }) }}>
                                <Text style={{ fontSize: 12, marginBottom: 23, marginTop: 23, textDecorationLine: 'underline', textAlign: 'center' }}>{I18n.t('DnaReportActivity.calculate')}&gt;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.navigate.push("AgeAccelerate")}>
                                <Text style={{ fontSize: 12, marginBottom: 23, textDecorationLine: "underline", textAlign: 'center' }}>{I18n.t('DnaReportActivity.acceleration')}&gt;</Text>
                            </TouchableOpacity>
                            <ImageBackground style={{ width: '100%', height: 223, }} resizeMode='cover' source={require("../image/enpic/rep12.jpg")} />
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ width: '100%', alignSelf: 'flex-end', marginTop: -23, marginBottom: 34 }}>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 14, color: '#0071bc', }}>{I18n.t('DnaReportActivity.how')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 14, fontFamily: 'FontAwesome', color: '#888888', lineHeight: 19 }}>{I18n.t('DnaReportActivity.why')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', lineHeight: 28 }}>{I18n.t('DnaReportActivity.epigenetic')}</Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.look')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.parameter')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.hardware')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.shift')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.clock')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.different')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.studies')}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', backgroundColor: '#f0f0f0', height: 10 }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '70%', fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 23, lineHeight: 26, }}>{I18n.t('DnaReportActivity.what')}<Text style={{ color: '#0071bc', fontSize: 21 }}>{I18n.t('DnaReportActivity.epiage')}</Text><Text style={{ color: '#0071bc' }}>{I18n.t('DnaReportActivity.mean')}</Text></Text>
                                    <Image style={{ height: 99, width: '30%', marginBottom: 20 }} resizeMode='contain' source={require("../image/enpic/rep2.png")}></Image>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.cg')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.dna')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.redflag')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.changes')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.act')}</Text>
                                </View>
                                <Image style={{ height: 98, width: '50%', alignSelf: 'flex-end', marginBottom: 10 }} resizeMode='contain' source={require("../image/enpic/rep3.png")}></Image>

                            </View>
                            <View style={{ height: 10, width: '100%', backgroundColor: '#f0f0f0' }}></View>
                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 23, }}>
                                <View style={{ flexDirection: 'row', marginBottom: 23 }}>
                                    <View style={{ flexDirection: 'column', width: '40%' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 22, }}>{I18n.t('DnaReportActivity.do')} </Text>
                                        <Image style={{ height: 89, width: '100%' }} resizeMode='contain' source={require("../image/enpic/rep4.png")}></Image>
                                    </View>
                                    <Text style={{ width: '60%', fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 26, }}><Text style={{ color: '#0071bc', fontSize: 22 }}>{I18n.t('DnaReportActivity.older')}</Text></Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.genetics')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.open')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.exercise')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                        <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.way')}</Text>
                                    </View>
                                    <Image style={{ width: '40%', height: 123, }} resizeMode='contain' source={require("../image/enpic/rep5.png")}></Image>
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep6.png")}></Image>
                            <View style={{ width: '70%', alignSelf: 'flex-end', marginTop: -45, marginBottom: 23 }}>
                                <Text style={{ fontSize: 22, color: '#0071bc' }}>{I18n.t('DnaReportActivity.position')}</Text>
                                <Text style={{ fontSize: 14, }}>{I18n.t('DnaReportActivity.health')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.links')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.updated')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.first')}</Text>
                                </View>
                            </View>
                            <Image style={{ width: '100%', height: 289, }} resizeMode='contain' source={require("../image/enpic/rep7.png")}></Image>
                            <View style={{ width: '80%', alignSelf: 'flex-end', marginTop: -45, marginBottom: 23 }}>
                                <Text style={{ fontSize: 16, }}>{I18n.t('DnaReportActivity.dynamic')}</Text>
                                <Text style={{ fontSize: 24, lineHeight: 28, color: '#0071bc' }}>{I18n.t('DnaReportActivity.achive')}</Text>
                            </View>
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.suggest')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.update')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.second')}</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.anonymized')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.model')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                    <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.analyze')}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ width: '60%' }}>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.routes')}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ width: '7%', fontSize: 12, color: '#939598' }}>●</Text>
                                            <Text style={{ width: '95%', fontSize: 12, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>{I18n.t('DnaReportActivity.coevolve')}</Text>
                                        </View>
                                    </View>
                                    <Image style={{ width: '40%', height: 123 }} resizeMode='contain' source={require("../image/enpic/rep13.png")}></Image>
                                </View>

                            </View>


                        </View> : null
                    }
                    <View style={{ height: 34, width: "100%" }}></View>

                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%", height: 80 }}>
                        {this.state.animating ? <ActivityIndicator
                            animating={true}
                            style={{ height: 80 }}
                            size="large" /> : null}
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: '90%' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ width: "89%", alignSelf: 'center', borderRadius: 50 }}>
                                <TouchableOpacity>
                                    <Button disabled={this.state.btnBuildPdfdisabled} onPress={() => {
                                        this.setState({ animating: true })
                                        this.setState({ btnBuildPdfdisabled: true })
                                        let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                        Session.load("pdfsavepath").then((savepathbox) => {
                                            let url = data.url + "user/report/" + uuid + "/" + this.state.barcode + "/" + I18n.locale + "/" + this.state.rage + "/buildPDF.jhtml"
                                            console.info(url)
                                            //下载pdf
                                            fetch(url).then(res => res.text()).then((issuccess) => {
                                                if (issuccess == "success") {
                                                    if (savepathbox.indexOf(this.state.barcode + ":" + uuid + ":" + I18n.locale) == -1) {
                                                        savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                        this.setState({ animating: false })
                                                        Session.save("pdfsavepath", savepathbox)
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                    } else {
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                        this.setState({ animating: false })
                                                    }
                                                } else {
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdffail"))
                                                    this.setState({ btnBuildPdfdisabled: true })
                                                    this.setState({ animating: false })
                                                }
                                            })
                                        }).catch(e => {
                                            Session.save("pdfsavepath", [])
                                            Session.load("pdfsavepath").then((savepathbox) => {
                                                fetch(url).then(res => res.text()).then((issuccess) => {
                                                    if (issuccess == "success") {
                                                        savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                        this.setState({ animating: false })
                                                        Session.save("pdfsavepath", savepathbox)
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                    } else {
                                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdffail"))
                                                        this.setState({ btnBuildPdfdisabled: true })
                                                        this.setState({ animating: false })
                                                    }
                                                })
                                            })
                                        })

                                    }} title={I18n.t("DnaReportActivity.buildPDF")} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', height: 23 }} />
                            <View style={{ width: "89%", height: '100%', alignSelf: 'center', borderRadius: 50 }}>
                                <TouchableOpacity >
                                    <Button title={I18n.t("DnaReportActivity.viewPdf")} onPress={() => {
                                        this.navigate.push("Savepdfpath")
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 20 }}></View>
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