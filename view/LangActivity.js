import React, { Component } from 'react'
import { NavigationActions, StackActions } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Text,Image, View,ScrollView } from 'react-native'
import { I18n } from '../locales/i18n'

type Props = {};
export default class LangActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("LangActivity.title"),
        })
    }
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
                <View>
                    <View ></View>
                    <TouchableOpacity onPress={()=>{
                        I18n.locale = 'en'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }));
                    }}>
                        <View style={{marginTop:10,height:55, width:'90%',alignSelf: 'center', padding:10,borderRadius:10, backgroundColor:'#f0f0f0', borderColor: "#ffffff", borderWidth: 1,flexDirection: 'row', }}>
                            <Image style={{width: '27%', height: 34, borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/usa-flag.png")}></Image>
                            <Text style={{width: '73%', textAlignVertical: "center",lineHeight:30,fontSize:16 ,fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.English")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={()=>{
                            I18n.locale = 'fr'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));
                        }}>
                        <View style={{width:'90%',height:55, alignSelf: 'center',padding:10,marginTop:11,borderRadius:10, backgroundColor:'#f0f0f0', borderColor: "#ffffff", borderWidth: 1,flexDirection: 'row', }}>
                        <Image style={{width: '27%', height: 34, borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/fr-flag.png")}></Image>
                            <Text style={{ width: '77%', textAlignVertical: "center",lineHeight:30, fontSize: 16, fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.French")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                        I18n.locale = 'es'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }));    
                        }}><View style={{width:'90%',height:55,alignSelf: 'center',padding:10,marginTop:11,borderRadius:10, backgroundColor:'#f0f0f0', borderColor: "#ffffff", borderWidth: 1,flexDirection: 'row', }}>
                             <Image style={{width: '27%', height: 34, borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/sp-flag.jpg")}></Image>
                            <Text style={{ width: '77%', textAlignVertical: "center",lineHeight:30,fontSize:16 ,fontFamily: 'FontAwesome',  }}>{I18n.t("LangActivity.Spanish")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                          onPress={()=>{
                            I18n.locale = 'ru'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));    
                        }}>
                    <View style={{ width: '90%',height:55, alignSelf: 'center', padding: 10, marginTop: 11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1, flexDirection: 'row', }}>
                            <Image style={{width: '27%', height: 34, borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/ru-flag.png")}></Image>
                            <Text style={{ width: '77%', textAlignVertical: "center",lineHeight:30,fontSize:16 ,fontFamily: 'FontAwesome',  lineHeight:34 }}>{I18n.t("LangActivity.Russian")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>{
                        I18n.locale = 'pt'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }))}}>
                        <View style={{ width: '90%',height:55, alignSelf: 'center', padding: 10,marginTop:11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1,flexDirection: 'row', }}>
                        <Image style={{width: '27%', height: 34,alignItems:'center', borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/por-flag.jpg")}></Image>
                            <Text style={{ width: '77%',height:36, textAlignVertical: "center",lineHeight:30,fontSize:16 ,fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.Portuguese")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            I18n.locale = 'zh-TW'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));
                        }}>
                        <View style={{width: '90%',height:55, alignSelf: 'center', padding: 10,marginTop:11, borderRadius: 10, backgroundColor: '#f0f0f0', borderColor: "#ffffff", borderWidth: 1,flexDirection: 'row',}}>
                        <Image style={{width: '27%', height: 34, borderRadius:10,marginLeft:-18}} resizeMode='contain' source={require("../image/tab/hk-flag.png")}></Image>
                            <Text style={{ width: '77%', textAlignVertical: "center",lineHeight:30,fontSize:16 ,fontFamily: 'FontAwesome', }}>{I18n.t("LangActivity.Chinese")}</Text></View></TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}