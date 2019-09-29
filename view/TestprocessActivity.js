import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class TestprocessActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("TestprocessActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <ImageBackground style={{ width: '100%', height:199 }} source={require('../image/icons/tp1.png')} resizeMode='center'  >
                    <Text style={{ fontFamily: 'NotoSansHans-Light',marginLeft:19, marginTop:99, fontSize: 34, color: '#ffffff' }}>TEST RPOCESS </Text>
                </ImageBackground>
                <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc' }}>DNA methylation is a chemical mark on DNA </Text>
                <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>This is how the same gene can be expressed or silenced in different cells in our body.</Text>
                <Image style={{ height: 59, width: '100%' }} resizeMode='center' source={require("../image/icons/methy1.png")}></Image>



                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}

