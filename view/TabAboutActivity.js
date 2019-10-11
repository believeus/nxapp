import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, navigate } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { I18n } from '../locales/i18n';
type Props = {};
export default class TabAboutActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        this.navigate = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>| Company Introduction</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Company")}>
                        <Image style={{ height: 123, width: '100%' }} resizeMode="center" source={require("../image/enpic/au1.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>| Science Team</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Scienceteam")}>
                        <Image style={{ height: 123, width: '100%' }} resizeMode="center" source={require("../image/enpic/au2.png")}></Image>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>| DNA Methylation</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Methylation")}>
                        <Image style={{ height: 123, width: '100%' }} resizeMode="center" source={require("../image/enpic/au3.png")}></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>| Biological Age Detection</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Biological")}>
                        <Image style={{ height: 123, width: '100%' }} resizeMode="center" source={require("../image/enpic/au5.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <View style={{ width: '90%', alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', fontSize: 18, }}>| Customer Data Consent Form</Text>
                    <TouchableOpacity onPress={() => this.navigate.push("Consent")}>
                        <Image style={{ height: 123, width: '100%' }} resizeMode="center" source={require("../image/enpic/au4.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10, marginTop: 10, backgroundColor: '#f0f0f0' }}></View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>

        );
    }
}

