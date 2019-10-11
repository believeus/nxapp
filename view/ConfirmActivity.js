import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class ConfirmActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ConfirmActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Text>{I18n.t('TabHomeActivity.name')}</Text>
                <Text>Confirm payment</Text>
                <Text>{this.props.text}</Text>
            </ScrollView>

        );
    }
}

