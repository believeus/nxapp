import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class ContactActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("ContactActivity.name"),
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
                    <Image style={{ height: 134, width: '23%', alignSelf: 'center' }} resizeMode='center' source={require("../image/icons/logo.png")}></Image>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>(+852) 2354 8297</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}>info@hkgepitherapeutics.com</Text>
                    <Text style={{ height: 45, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 22, textAlign: 'center' }}> https://www.hkgepitherapeutics.com</Text>
                    <Text style={{ height: 123, fontSize: 16, fontFamily: 'FontAwesome', lineHeight: 28, textAlign: 'center' }}>HKG epitherapeutics Limited Unit 613, Biotech Centre 2,Hong Kong Science Park,Sha Tin,N.T.,Hong Kong</Text>
                </View>
            </ScrollView >
        );
    }
}

