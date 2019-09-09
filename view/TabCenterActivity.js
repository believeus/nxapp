import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, fontFamil, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';


export default class CenterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { visual: true };
        //load 读取
        storage.load({
            key: 'sessionuser'
        }).then(sessionuser => {
            // 如果找到数据，则在then方法中返回
            this.sessionuser = sessionuser;
            this.setState({ visual: false });
            console.info(this.state.visual)
        }).catch(err => {
            // 如果没有找到数据且没有sync方法，
            // 或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        })

    }

    render() {

        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            //borderColor:"grey",borderWidth:1
            //alignItems:'center' 左右居中
            <ScrollView>
                <View>

                    <View style={{ backgroundColor: '#0071bc', height: 180, alignItems: 'center', fontWeight: 'bold' }}>
                        <View style={{ width: "100%", height: 20 }}></View>
                        <View style={{ height: 60, width: '100%' }}>
                            <Image style={{ height: "100%", width: '100%' }} resizeMode="contain" source={require("../image/icons/user-logo.png")}></Image></View>
                        {this.state.visual == true ?
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '25%', height: 25, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => navigate.push("Login")}><Text style={{ fontSize: 18, color: "#ffffff", textAlign: "center", paddingLeft: 15, fontFamily: 'NotoSansHans-Light' }}>login</Text></TouchableOpacity>
                                </View>
                                <View style={{ width: '1%', height: 25, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 18, color: "#ffffff", textAlign: "center" }}>|</Text>
                                </View>
                                <View style={{ width: '25%', height: 25, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => navigate.push("Register")}>
                                        <Text style={{ fontSize: 18, color: "#ffffff", textAlign: "center", fontFamily: 'NotoSansHans-Light' }}>Register</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : <View><Text style={{ color: "white", fontSize: 24 }}>{this.sessionuser.nickname}</Text></View>
                        }
                    </View>

                    <TouchableOpacity onPress={() => navigate.push("About")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', justifyContent: "center" }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc3.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%', }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}> Questionnaire</Text>
                                </View>
                                <View style={{ height: 20, width: '20%', }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push("About")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc4.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>My Report</Text>
                                </View>
                                <View style={{ height: 20, width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push("About")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc5.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>Order Record</Text>
                                </View>
                                <View style={{ height: 20, width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push("About")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc1.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}> Q&A</Text>
                                </View>
                                <View style={{ height: 20, width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push("About")}>
                        <View style={{ width: '90%', height: 75, alignItem: 'center', width: "100%", justifyContent: 'center', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
                            <View style={{ width: "100%", height: 20 }}></View>
                            <View style={{ width: "100%", height: 20, flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ height: 40, width: '25%', }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc6.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>Contact Us</Text>
                                </View>
                                <View style={{ height: 20, width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt;</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                                storage.remove({ key: 'sessionuser' });
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
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require("../image/icons/uc7.png")}></Image>
                                </View>
                                <View style={{ height: 20, width: '50%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontSize: 18, paddingTop: 5, color: '#0071bc', fontFamily: 'NotoSansHans-Light' }}>Log Out</Text>
                                </View>
                                <View style={{ height: 20, width: '20%' }}>
                                    <Text style={{ textAlign: 'left', lineHeight: 40, fontFamily: 'NotoSansHans-Light' }}> &gt; </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

