import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, Alert, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper"
import { decrypt } from 'react-native-simple-encryption'
import ToggleSwitch from 'toggle-switch-react-native'
import Input from "react-native-input-validation"
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
            itemBox: [],
            ageBox: [],
            notifyEmail:"",
            switchon:false,
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
                    let naturally = window.parseFloat(data[i].naturally).toFixed(3);
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
                    let naturally = window.parseFloat(data[i].naturally).toFixed(3);
                    let biological = window.parseFloat(data[i].biological).toFixed(2)
                    v.push([naturally, biological])
                }
                let option = Object.assign({}, this.state.option);
                option.series[1].data = v;
                this.setState({ option });
                this.echarts.webview.reload();
            })

            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
            console.info(data.url + "user/report/findDataByUuid.jhtml?uuid=" + uuid)
            fetch(data.url + "user/report/findDataByUuid.jhtml?uuid=" + uuid).then(res => res.json()).then((data) => {
                for (let i in data) {
                    let vbarcode = {}
                    vbarcode.val = data[i].barcode
                    vbarcode.stat = data[i].status
                    vbarcode.naturally = data[i].naturally
                    vbarcode.biological = data[i].biological
                    this.state.itemBox.push(vbarcode)
                    this.state.ageBox[i] = vbarcode.naturally
                }
                this.setState({ ageBox: this.state.ageBox })
                console.info(this.state.ageBox)
                this.setState({ itemBox: this.state.itemBox })
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
                <ImageBackground style={{ width: '100%', height: 223 }} resizeMode='cover' source={require("../image/enpic/rep1.png")}>
                </ImageBackground>

                <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ height: 35, flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "5%", height: 30 }}></View>
                            <TextInput
                                style={{ width: "45%", height: "100%", borderColor: '#0071BC', borderWidth: 1, borderRadius: 5, paddingVertical: 0 }}
                                onChangeText={(barcode) => this.setState({ barcode })}
                                placeholder={"Your barcode"}
                                placeholderTextColor='#0071bc'
                                value={this.state.barcode}
                            />
                            <View style={{ width: "1%", height: 30 }}></View>
                            <View style={{ width: "35%", height: 35, backgroundColor: "#0071BC", borderRadius: 5 }} >
                                <TouchableOpacity disabled={this.state.barcode.length != 0 ? false : true} onPress={() => {
                                    this.setState({ display: true })
                                    let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                    let email=this.state.notifyEmail
                                    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
                                    if(email!=""&&!reg.test(email)){
                                        Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.emailFormat"))
                                        return
                                    }
                                    let allow=(this.state.switchon?1:0)
                                    //解密
                                    fetch(data.url + "user/report/upbarcode.jhtml?uuid=" + uuid + "&barcode=" + this.state.barcode+"&email="+email+"&allow="+allow).then(res => res.json()).then((data) => {
                                        
                                        switch (data.status) {
                                            case "invalid":
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"));
                                                break;
                                            case "pending":
                                                var barcode = {}
                                                barcode.val = this.state.barcode
                                                barcode.stat = data.status
                                                if (JSON.stringify(this.state.itemBox).indexOf(barcode.val) == -1) {
                                                    this.state.itemBox.push(barcode)
                                                    this.setState({ itemBox: this.state.itemBox })
                                                    this.setState({ statusbar: true })
                                                }
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.wait"))
                                                break;
                                            case "processing":
                                                this.setState({ statusbar: true })
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                break;
                                            case "ready":
                                                this.setState({ statusbar: true })
                                                this.setState({ btnBuildPdfdisabled: false })
                                                let option = Object.assign({}, this.state.option);
                                                let biological = window.parseFloat(data.biological).toFixed(2);
                                                let naturally = window.parseFloat(data.naturally).toFixed(3)
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
                                        this.setState({ display: false })
                                    })

                                }}>
                                    <Text style={{ width: "100%", height: "100%", textAlign: "center", lineHeight: 35, color: "white" }}>{I18n.t('DnaReportActivity.Registerkit')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "10%", height: 35 }} >
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
                        </View>
                        <View style={{width:"100%", flexDirection: "row",alignItems: "center"}}>
                        <View style={{width:"5%"}}></View>
                            <View style={{width:"55%"}}>
                                <Input style={{
                                    height: 30, width: '100%',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#b3b3b3',
                                    fontSize: 16,
                                    borderColor: '#0071BC', 
                                    borderWidth: 1,
                                    paddingVertical: 0
                                }}
                                    errorInputContainerStyle={{ borderColor: '#FF0000', borderWidth: 0, borderRadius: 5 }}
                                    errorMessage={I18n.t("LoginActivity.mailboxformatFail")}
                                    placeholder={I18n.t("RegisterActivity.email")} placeholderTextColor='#0071bc' validator="email"
                                    onValidatorExecuted={(isvalid) => {
                                    
                                    }}
                                    validatorExecutionDelay={100}
                                    onChangeText={(email) => { this.setState({switchon:false}); this.setState({ notifyEmail: email }) }}
                                    value={this.state.notifyEmail}
                                />
                            </View>
                            <View style={{width:"2%"}}></View>
                            <View style={{width:"12%"}}>
                                <ToggleSwitch   
                                    isOn={this.state.switchon} onColor="green" offColor="grey" 
                                    labelStyle={{ color: "black", fontWeight: "900" }}
                                    size="small"
                                    onToggle={isOn =>{
                                        let barcode=this.state.barcode
                                        if(barcode==""){  
                                            Alert.alert(I18n.t("DnaReportActivity.titlemsg"),I18n.t("DnaReportActivity.invalid"))
                                            return
                                        }
                                        let mail=this.state.notifyEmail
                                        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
                                        if(!reg.test(mail)){ 
                                            Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.emailFormat"))
                                            return
                                        }
                                        let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                        let permit=isOn?1:0;
                                        let url=data.url+"/user/report/"+uuid+"/"+mail+"/"+barcode+"/"+permit+"/notify.jhtml"
                                        fetch(url).then(res => res.text()).then((data) => {
                                            if(data=="error"){
                                                Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.invalid"))
                                            }else{
                                                this.setState({switchon:isOn})
                                            }
                                        })
                                    }}
                                /> 
                            </View>
                            <View style={{width:"22%"}}><Text>{I18n.t("DnaReportActivity.allow")}</Text></View>
                        </View>
                        <View style={{ width: "100%", height: 23 }}></View>
                        <View style={{ width: "90%", alignItems: "center" }}>
                            {this.state.statusbar ?
                                <View style={{ width: "100%", borderBottomColor: "#efefef", borderBottomWidth: 1, flexDirection: "row" }}>
                                    <View style={{ width: "40%" }}><Text style={{ color: "#808080", textAlign: 'left', fontFamily: 'FontAwesome', fontSize: 12, fontWeight: "bold",marginBottom:5 }}>{I18n.t('DnaReportActivity.barcode')}</Text></View>
                                    <View style={{ width: "30%" }}><Text style={{ color: "#808080", textAlign: "center", fontFamily: 'FontAwesome', fontSize: 12, fontWeight: "bold",marginBottom:5 }}>{I18n.t('DnaReportActivity.status')}</Text></View>
                                    <View style={{ width: "30%" }}><Text style={{ color: "#808080", textAlign: "center", fontFamily: 'FontAwesome', fontSize: 12, fontWeight: "bold",marginBottom:5 }}>{I18n.t('DnaReportActivity.yourage')}</Text></View>
                                </View>
                                : null}
                            {this.state.itemBox ?
                                this.state.itemBox.map((barcode, i) => {
                                    let j = i
                                    return <TouchableOpacity key={barcode.val}
                                        onPress={() => {
                                            let uuid = decrypt(this.state.user.publickey, this.state.user.uuid)
                                            fetch(data.url+"/user/report/"+uuid+"/"+barcode.val+"/findEmail.jhtml").then(data=>data.json()).then((udata)=>{
                                                this.setState({notifyEmail:udata.email})
                                                let isOn=udata.permit==1?true:false
                                                this.setState({switchon:isOn})
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
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.processed"));
                                                } else if (barcode.stat == "pending") {
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.wait"));
                                                }
                                                this.setState({ barcode: barcode.val })
                                            })
                                           
                                        }}>
                                        <View key={barcode.val} style={{ width: "100%", height: 39, borderBottomColor: "#efefef", borderBottomWidth: 1, flexDirection: "row" }}>
                                            <View style={{ width: "40%", alignItems: 'flex-start', height: "100%", display: "flex" }}><Text style={{ height: "100%", color: "#808080", textAlign: 'left', fontSize: 12, fontFamily: 'FontAwesome', lineHeight: 39 }}>{barcode.val}</Text></View>
                                            <View style={{ width: "30%", height: "100%" }}><Text style={{ fontWeight: "bold", height: "100%", color: "#808080", textAlign: "center", fontFamily: 'FontAwesome', fontSize: 13, lineHeight: 39, color: barcode.stat == "ready" ? "red" : "green" }}>{barcode.stat}</Text></View>
                                            <View style={{ width: "30%", height: "100%", alignItems: "center", justifyContent: 'center', }}>
                                                <TextInput style={{
                                                    height: 20,
                                                    width: '60%',
                                                    borderWidth: 1,
                                                    borderColor: '#b3b3b3',
                                                    fontSize: 14,
                                                    paddingVertical: 0,
                                                    textAlign: "center"
                                                }}
                                                    keyboardType="numeric"
                                                    defaultValue={"0"}
                                                    value={this.state.ageBox[i] + ""}
                                                    onChangeText={(val) => {
                                                        let data = val.replace(/[^\d]+/, '')
                                                        this.state.ageBox[i] = data
                                                        this.setState({ ageBox: this.state.ageBox })
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }) :
                                null

                            }
                        </View>
                    </View>

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
                            <View style={{ width: '90%', height: 289, alignSelf: 'center', marginTop: 23,marginBottom:12,  borderRadius: 10, backgroundColor: '#f7f8fc' }}>
                                <View style={{ flexDirection: 'row', width: '96%', height: 189, marginTop: 12, borderBottomColor: '#c7c9cd', borderBottomWidth: 1, alignSelf: 'center' }}>
                                    <View style={{ width: '36%', flexDirection: 'column', marginTop: 12 }}>
                                        <Image style={{ width: '100%', height: 34, }} resizeMode='contain' source={require("../image/icons/rep-cho.png")}></Image>
                                        <View style={{ width: '100%', paddingTop: 12 }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.your')} </Text>
                                            <Text style={{ fontSize: 12, lineHeight: 19, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                        </View>
                                        {parseFloat(this.state.naturally) > 0 ?
                                            <View style={{ width: '100%', height: 34, flexDirection: 'column', }}>
                                                <Text style={{ fontFamily: 'FontAwesome', fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{this.state.naturally}</Text>
                                                <View style={{ width: '100%', paddingTop: 12 }}>
                                                    <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.expected')} </Text>
                                                    <Text style={{ fontSize: 12, lineHeight: 19, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                                </View>
                                                <Text style={{ fontFamily: 'FontAwesome', fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{(-1.6394+(Math.sqrt(2.6876+0.0288*-((parseFloat(this.state.biological))+7.5806))))/(-0.0144)}</Text>
                                            </View>
                                            :
                                            <View style={{ width: '100%', height: 34, flexDirection: 'column', }}>
                                                <Text style={{ fontFamily: 'FontAwesome', fontSize: 12, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>NA(non-available)</Text>
                                                <View style={{ width: '100%', paddingTop: 12 }}>
                                                    <Text style={{ fontSize: 12, fontFamily: 'FontAwesome', textAlign: 'center' }}>{I18n.t('DnaReportActivity.expected')} </Text>
                                                    <Text style={{ fontSize: 12, lineHeight: 19, textAlign: 'center', fontFamily: 'FontAwesome', }}>{I18n.t('DnaReportActivity.chro')}</Text>
                                                </View>
                                                <Text style={{ fontFamily: 'FontAwesome', fontSize: 14, color: '#3e9c9c', fontWeight: 'bold', textAlign: 'center' }}>{(-1.6394+(Math.sqrt(2.6876+0.0288*-((parseFloat(this.state.biological))+7.5806))))/(-0.0144)}</Text>
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
                                        {this.state.biological < (-1.6394+(Math.sqrt(2.6876+0.0288*-((parseFloat(this.state.biological))+7.5806))))/(-0.0144) ?
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23,  }} resizeMode="contain" source={require("../image/smail.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#3e9c9c", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((-1.6394+(Math.sqrt(2.6876+0.0288*-((parseFloat(this.state.biological))+7.5806))))/(-0.0144) - parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.younger')} </Text></View>
                                            </View>
                                            :
                                            <View style={{ width: "90%", height: 67, alignSelf: 'center', flexDirection: "row", marginTop: 16 }}>
                                                <Image style={{ width: "10%", height: 23,  }} resizeMode="contain" source={require("../image/sad.png")}></Image>
                                                <View style={{ width: "90%", height: 67, }}><Text style={{ color: "#f15929", fontSize: 12, fontWeight: "bold", textAlign: 'center' }}>{I18n.t('DnaReportActivity.is')} {Math.abs((-1.6394+(Math.sqrt(2.6876+0.0288*-((parseFloat(this.state.biological))+7.5806))))/(-0.0144) -parseFloat(this.state.biological)).toFixed(2)} {I18n.t('DnaReportActivity.old')} </Text></View>
                                            </View>
                                        }
                                    </View>
                                
                            </View>
                            <TouchableOpacity onPress={() => this.navigate.push("Mall")}>
                                <Text style={{ fontSize: 12,marginBottom:23,textDecorationLine:'underline', textAlign: 'center'}}>{I18n.t('DnaReportActivity.calculate')}&gt;</Text>
                            </TouchableOpacity>
                            <ImageBackground style={{ width: '100%', height: 223, }} resizeMode='cover' source={require("../image/enpic/rep12.jpg")} />
                            <View style={{ width: '90%', alignSelf: 'center', }}>
                                <View style={{ width: '100%', alignSelf: 'flex-end',marginTop:-23, marginBottom:34}}>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 14, color: '#0071bc', }}>{I18n.t('DnaReportActivity.how')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 14, fontFamily: 'FontAwesome', color: '#888888', lineHeight: 19 }}>{I18n.t('DnaReportActivity.why')}</Text>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 22, fontFamily: 'FontAwesome', color: '#0071bc', lineHeight: 24 }}>{I18n.t('DnaReportActivity.epigenetic')}</Text>

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
                                <View style={{ flexDirection: 'row',marginBottom:23 }}>
                                    <View style={{ flexDirection: 'column', width: '40%' }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'FontAwesome', lineHeight: 22, }}>{I18n.t('DnaReportActivity.do')} </Text>
                                        <Image style={{ height: 89,width:'100%' }} resizeMode='contain' source={require("../image/enpic/rep4.png")}></Image>
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
                            <View style={{ width: '70%', alignSelf: 'flex-end', marginTop: -45 ,marginBottom:23}}>
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
                            <View style={{ width: '80%', alignSelf: 'flex-end',marginTop:-45, marginBottom:23 }}>
                                <Text style={{ fontSize: 16,}}>{I18n.t('DnaReportActivity.dynamic')}</Text>
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
                                    <Image style={{ width: '40%',height:123 }} resizeMode='contain' source={require("../image/enpic/rep13.png")}></Image>
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
                                            //下载pdf
                                            fetch(data.url + "user/report/" + uuid + "/" + this.state.barcode + "/" + I18n.locale + "/buildPDF.jhtml").then(res => res.text()).then(() => {
                                                if (savepathbox.indexOf(this.state.barcode + ":" + uuid + ":" + I18n.locale) == -1) {
                                                    savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                    this.setState({ animating: false })
                                                    Session.save("pdfsavepath", savepathbox)
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                } else {
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                    this.setState({ animating: false })
                                                }
                                            })
                                        }).catch(e => {
                                            Session.save("pdfsavepath", [])
                                            Session.load("pdfsavepath").then((savepathbox) => {
                                                fetch(data.url + "user/report/" + uuid + "/" + this.state.barcode + "/" + I18n.locale + "/buildPDF.jhtml").then(res => res.text()).then(() => {
                                                    savepathbox.push(this.state.barcode + ":" + uuid + ":" + I18n.locale)
                                                    this.setState({ animating: false })
                                                    Session.save("pdfsavepath", savepathbox)
                                                    Alert.alert(I18n.t("DnaReportActivity.titlemsg"), I18n.t("DnaReportActivity.pdfsuccess"))
                                                })
                                            })
                                        })

                                    }} title={I18n.t("DnaReportActivity.buildPDF")} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', height: 23 }} />
                            <View style={{ width: "89%",height:'100%', alignSelf: 'center', borderRadius: 50}}>
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