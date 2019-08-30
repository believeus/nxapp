import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

type Props = {};
export default class AboutActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <View><Text>About</Text></View>
        );
    }
}

