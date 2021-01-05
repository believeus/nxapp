import React, { Component } from 'react';
import { Text, View, Image, StatusBar, fontFamil, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n';

export default class CenterActivity extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("TabCenterActivity.title"),
        })
    }
    constructor(props) {
        super(props);
        this.state = { user: null };


    }
    //因为Session.load方法异步的,所以可以给sate设置值，设置之后，页面渲染会根据sata中的值变化而变化
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });

    }


    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            //borderColor:"grey",borderWidth:1
            //alignItems:'center' 左右居中
            <ScrollView>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View>
                    <View style={{ backgroundColor: '#0071bc', height: 180, alignItems: 'center', fontWeight: 'bold' }}>
                        <View style={{ width: "100%", height: 20 }}></View>
                        <View style={{ height: 60, width: '100%' }}>
                            {this.state.user == null ?
                                <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/ic_unlogin.png")}></Image>
                                :
                                <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/ic_login.png")}></Image>
                            }
                            {this.state.user == null ?
                                <View style={{ alignSelf: "center", flexDirection: 'row' }}>
                                    <View style={{ width: '30%', height: 25, justifyContent: 'center', alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => navigate.push("Login")}><Text style={{ fontSize: 18, color: "#ffffff", textAlign: "right", fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerlogin')}</Text></TouchableOpacity>
                                    </View>
                                    <View style={{ width: '10%', height: 25, justifyContent: 'center', alignSelf: 'center', }}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>|</Text></View>
                                    <View style={{ width: '30%', height: 25, justifyContent: 'center', alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => navigate.push("Register")}><Text style={{ fontSize: 18, color: "#ffffff", textAlign: "left", fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerregis')}</Text></TouchableOpacity>
                                    </View>
                                </View>

                                :
                                <View style={{ width: '100%', height: 65, justifyContent: 'center', alignItems: "center" }}>
                                    <Text style={{ color: "#fff", fontSize: 22 }}>{this.state.user.nickname}</Text>
                                    <TouchableOpacity onPress={() => { navigate.push("RasEncryptionActivity") }}><Text style={{ color: "#fff", fontSize: 18 }}>{I18n.t('TabCenterActivity.centerkey')}</Text></TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>
                    {this.state.user != null ?
                        <TouchableOpacity onPress={() => navigate.push("Quesnote")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', justifyContent: "center" }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc3.png")}></Image>
                                    </View>
                                    <View style={{  width: '50%', }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.Questionnaire')} </Text>
                                    </View>
                                    <View style={{ width: '20%', }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> : null}
                    {this.state.user != null ?
                        <TouchableOpacity onPress={() => navigate.push("DnaReport")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc4.png")}></Image>
                                    </View>
                                    <View style={{  width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerreport')}</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        : null}
                    {/* {this.state.user != null ?
                        <TouchableOpacity onPress={() => navigate.push("Contact")}>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc5.png")}></Image>
                                    </View>
                                    <View style={{ height: 20, width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>Order Record</Text>
                                    </View>
                                    <View style={{ height: 20, width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity> : null} */}

                    <TouchableOpacity onPress={() => navigate.push("QA")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc1.png")}></Image>
                                </View>
                                <View style={{  width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}> {I18n.t('TabCenterActivity.centerqa')}</Text>
                                </View>
                                <View style={{  width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push("Contact")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc6.png")}></Image>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerus')}</Text>
                                </View>
                                <View style={{ width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.user != null ?
                        <TouchableOpacity
                            onPress={() => {
                                Session.logout();
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                });
                                this.props.navigation.dispatch(resetAction);
                            }
                            }>
                            <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                                <View style={{ width: "100%", height: 20 }}></View>
                                <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                    <View style={{ height: 40, width: '25%', }}>
                                        <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={require("../image/icons/uc7.png")}></Image>
                                    </View>
                                    <View style={{  width: '50%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>{I18n.t('TabCenterActivity.centerout')}</Text>
                                    </View>
                                    <View style={{  width: '20%' }}>
                                        <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        : null
                    }
                </View>
            </ScrollView >
        );
    }
}

