import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import AutoHeightWebView from 'react-native-autoheight-webview';

type Props = {};
export default class MainActivity extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            //默认选中MainPage页面
            selectedTab: 'HOME'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="HOME"
                    titleStyle={{ color: '#808080', fontSize: 13 }}
                    selectedTitleStyle={{ color: '#036eae', fontSize: 13 }}
                    renderIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic1_tab_home.png")} />}
                    renderSelectedIcon={() => <Image style={{ width: 28, height: 28 }} source={require("./image/tab/ic2_tab_home.png")} />}
                    selected={this.state.selectedTab === 'HOME'} onPress={() => this.setState({ selectedTab: 'HOME' })}>
                      <Text>Home</Text>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                    title="SHOP"
                    titleStyle={{ color: '#808080', fontSize: 13 }}
                    selectedTitleStyle={{ color: '#036eae', fontSize: 13 }}
                    renderIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic1_tab_mall.png")} />}
                    renderSelectedIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic2_tab_mall.png")} />}
                    selected={this.state.selectedTab === 'SHOP'} onPress={() => this.setState({ selectedTab: 'SHOP' })}>
                        <Text>SHOP</Text>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                    title="ABOUT"
                    titleStyle={{ color: '#808080', fontSize: 13 }}
                    selectedTitleStyle={{ color: '#036eae', fontSize: 13 }}
                    renderIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic1_tab_about.png")} />}
                    renderSelectedIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic2_tab_about.png")} />}
                    selected={this.state.selectedTab === 'ABOUT'} onPress={() => this.setState({ selectedTab: 'ABOUT' })}>
                        <Text>About</Text>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                    title="EPICENTER"
                    titleStyle={{ color: '#808080', fontSize: 13 }}
                    selectedTitleStyle={{ color: '#036eae', fontSize: 13 }}
                    renderIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic1_tab_user.png")} />}
                    renderSelectedIcon={() => <Image style={{ width: 28, height: 28 }} source={require("../image/tab/ic2_tab_user.png")} />}
                    selected={this.state.selectedTab === 'EPICENTER'} onPress={() => this.setState({ selectedTab: 'EPICENTER' })}>
                        <Text>EPICENTER</Text>
                 </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

