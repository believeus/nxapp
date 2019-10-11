import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class QuesnoteActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("QuesnoteActivity.name"),
        })
    }
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Text style={{ fontFamily: 'FontAwesome', fontSize: 19, height: 45, fontWeight: 'bold' }}>About Questionnaires</Text>
                    <Text style={{ height: 145, fontFamily: 'FontAwesome', fontSize: 16, lineHeight: 19 }}>The questionnaires are <Text style={{ color: 'red' }}>optional to fill up</Text>. However, epigenetics affected by lifestyle as well as the environment. Our philosophy is that Epiaging tests make sense only within a dynamic life-long lifestyle, environmental and health management system.</Text>
                    <Text style={{ height: 145, fontFamily: 'FontAwesome', fontSize: 16, lineHeight: 19 }}>personalized evaluation including intervention will be generated based on the health and lifestyle information you provided Updates on your health and lifestyle parameters periodically will activate the life-long personalized analysis report</Text>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                        <View style={{ width: '45%' }}>
                            <TouchableOpacity >
                                <Button onPress={() => this.navigate.pop()} title={I18n.t('QuesnoteActivity.back')}></Button>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '45%' }}>
                            <TouchableOpacity >
                                <Button onPress={() => this.navigate.push("Questionnaire")} title={I18n.t('QuesnoteActivity.ques')}></Button>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView >
        );
    }
}

