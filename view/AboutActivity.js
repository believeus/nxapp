import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


type Props = {};
export default class AboutActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        //const navigator=this.props.navitation;//此处可以自定义跳转属性
        return (
           <View><Text>About</Text></View>
        );
    }
}

