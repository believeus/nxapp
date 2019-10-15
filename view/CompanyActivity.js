import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class CompanyActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("CompanyActivity.title"),
        })
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>

                <Image style={{ height: 189, width: '100%' }} resizeMode='cover' source={require("../image/enpic/company.jpg")}></Image>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%',fontSize:14,paddingTop:12,lineHeight:17, fontFamily:'FontAwesome' }}>{I18n.t('CompanyActivity.nextgeneration')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company1.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%',fontSize:14,paddingTop:12, lineHeight:17, fontFamily:'FontAwesome'  }}>{I18n.t('CompanyActivity.ecosystem')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company2.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ height: 123, width: '70%', fontSize:14,paddingTop:12,lineHeight:17, fontFamily:'FontAwesome' }}>{I18n.t('CompanyActivity.ittechnology')}</Text>
                    <Image style={{ height: 99, width: '30%' }} resizeMode='center' source={require("../image/enpic/company3.jpg")}></Image>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center' }}>{I18n.t('TabHomeActivity.allright')}</Text>
            </ScrollView>
        );
    }
}

