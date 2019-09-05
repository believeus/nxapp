import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class AboutActivity extends Component<Props> {
    static navigationOptions = {
        title: I18n.t("AboutActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Text>{I18n.t('TabHomeActivity.name')}</Text>
            </ScrollView>
        );
    }
}

