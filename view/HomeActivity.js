import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container } from 'react-native';


type Props = {};
export default class HomeActivity extends Component<Props> {
    constructor(props) {
        super(props);

    }


    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (

            <ScrollView style={styles.container}>
                <View>
                    <Button title="About View" onPress={() => navigate.push("About")}></Button>
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