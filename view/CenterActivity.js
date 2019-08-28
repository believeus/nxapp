import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import AutoHeightWebView from 'react-native-autoheight-webview';

type Props = {};
export default class CenterActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View><Text>Center</Text></View>
        );
    }
}

