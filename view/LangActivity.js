import React, { Component } from 'react'
import { NavigationActions, StackActions } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Text, View,ScrollView } from 'react-native'
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
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (

            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity onPress={()=>{
                        I18n.locale = 'en'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }));
                    }}>
                        <View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.English")}</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={()=>{
                            I18n.locale = 'fr'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));
                        }}>
                            <View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.French")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                        I18n.locale = 'es'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }));    
                    }}><View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.Spanish")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                          onPress={()=>{
                            I18n.locale = 'ru'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));    
                        }}><View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.Russian")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>{
                        I18n.locale = 'pt'
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "Main" })],
                        }))}}>
                            <View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.Portuguese")}</Text></View></TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            I18n.locale = 'zh-TW'
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: "Main" })],
                            }));
                        }}>
                        <View style={{borderBottomColor:"#efefef",borderWidth:1}}><Text style={{textAlign:"center"}}>{I18n.t("LangActivity.Chinese")}</Text></View></TouchableOpacity>
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