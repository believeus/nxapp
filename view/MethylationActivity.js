import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class MethylationActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("MethylationActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20,paddingBottom:20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc' }}>DNA methylation is a chemical mark on DNA </Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA methylation is a chemical mark that is added to DNA at different positions during gestation. </Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA methylation is part of the "epigenetic" program of our genes.</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>When DNA methylation happens at several important positions in genes it can silence the function of the gene.</Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>This is how the same gene can be expressed or silenced in different cells in our body.</Text>
                    <Image style={{ height: 189, width: '100%' }} resizeMode='cover' source={require("../image/icons/methy1.png")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%', fontFamily: 'NotoSansHans-Light', }}>We are developing next generation DNA methylation biomarkers for early cancer detection and healthy aging.</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company1.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%', fontFamily: 'NotoSansHans-Light', }}>We are working on building a new health ecosystem that will guide personalized management of healthy life.</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company2.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%', fontFamily: 'NotoSansHans-Light', }}>We believe that with the help of IT technology and DNA methylation testing people should be able to take ownership of their health.</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company3.jpg")}></Image>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}

