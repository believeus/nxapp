import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Session from '../storage/Session';
import { I18n } from '../locales/i18n'


type Props = {};
export default class LoginIcon extends Component<Props> {
   
    constructor(props) {
        super(props);
        console.info(props)
        this.state = { user: null };

    }
    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user: user });
        });

    }


    render() {
        const optionsStyles = {
            optionsContainer: {
                backgroundColor: '#ffffff',
                padding: 5,
                width: 100
            },
            optionTouchable: {
                underlayColor: 'gold',
                activeOpacity: 70,
            },
        };
         //每一个screen组件中都自动具有了navigation属性
        //要强调的是navigation属性并不是所有的组件里都有，只有screen组件才自动接收该属性（被screen属性声明过的组件）
        //例如：如果你定义了一个MyBackButton组件，并且将其在一个screen组件中作为子组件渲染，那么就不会接收到navigation属性
        const navigate = this.props.navigation;
        
        return (
            <View>
                <View style={{ width: 100, height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Menu>
                        <MenuTrigger>
                            <View style={{ width: 100, justifyContent: "center", alignItems: "center" }}>
                                {this.state.user != null ?
                                    <View style={{ width: 100, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={{ height: 30, width: 30 }} resizeMode="center" source={require("../image/ic_login.png")} />
                                        <Text style={{ color: 'white' }}>{this.state.user.nickname}</Text>
                                    </View>
                                    :
                                    <View style={{ width: 100, justifyContent: "center", alignItems: "center" }}>
                                        <Image style={{ height: 25, width: 25 }} resizeMode="center" source={require("../image/icons/user-logo.png")} />
                                        <Text style={{ color: 'white' }}>{I18n.t('LoginIcon.message')}</Text>
                                    </View>
                                }
                            </View>
                        </MenuTrigger>
                        {this.state.user != null ?
                            <MenuOptions customStyles={optionsStyles}>
                                <MenuOption onSelect={() => {
                                    Session.logout();
                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'Main' })],
                                    });
                                    navigate.dispatch(resetAction);
                                }} >
                                    <Text style={{ color: '#333333' }}>{I18n.t('LoginActivity.logout')}</Text>
                                </MenuOption>
                            </MenuOptions>
                            :
                            <MenuOptions customStyles={optionsStyles}>
                                <MenuOption onSelect={() => {navigate.push("Login")}}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View><Image style={{ height: 25, width: 25 }} resizeMode="center" source={require("../image/login.png")} /></View>
                                        <View><Text style={{ color: "#333333" }}>{I18n.t('LoginActivity.login')}</Text></View>
                                    </View>
                                </MenuOption>
                                <MenuOption onSelect={() => {navigate.push("Register")}}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View><Image style={{ height: 25, width: 25 }} resizeMode="center" source={require("../image/reg.png")} /></View>
                                        <View><Text style={{ color: "#333333" }}>{I18n.t('LoginActivity.register')}</Text></View>
                                    </View>
                                </MenuOption>
                            </MenuOptions>
                        }

                    </Menu>
                </View>

            </View >
        );
    }
}
