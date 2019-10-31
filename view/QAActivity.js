import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class QAActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QAActivity.title"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <TouchableOpacity onPress={() => this.navigate.push("Manual2")}>
                        <Text style={{ height: 67, fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 56, borderBottomWidth: 1, borderBottomColor: '#efefef' }}>{I18n.t('QAActivity.test')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigate.push("Manual1")}>
                        <Text style={{ height: 67, fontSize: 16, fontFamily: 'FontAwesome', paddingTop: 13, lineHeight: 56, borderBottomWidth: 1, borderBottomColor: '#efefef' }}>{I18n.t('QAActivity.report')}</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView >
        );
    }
}

