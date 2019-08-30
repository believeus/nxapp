import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import StackHomeActivity from './StackHomeActivity';

type Props = {};
export default class TabHomeActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const navigate=this.props.navigation;
        return (
            <View>
                <Text>HomeActivity Screen</Text>
                <Button  title="About View" onPress={()=>navigate.push("About")}></Button>
            </View>
        );
    }
}
