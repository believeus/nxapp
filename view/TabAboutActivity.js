import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,ScrollView } from 'react-native';

type Props = {};
export default class AboutActivity extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View><Text>About</Text></View>
            </ScrollView>
        );
    }
}

