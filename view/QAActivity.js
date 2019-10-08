import React, { Component } from 'react';
import { Text, View, Image, ScrollView,  } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class QAActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("QAActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22,}}>1. How does the epiAging test work?</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 22,}}>2. How to get my epiAging test report?</Text>
                </View>
            </ScrollView >
        );
    }
}

